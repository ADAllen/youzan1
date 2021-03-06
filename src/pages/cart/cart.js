import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import mixin from 'js/mixin.js'
import axios from 'axios'
import url from 'js/api.js'

new Vue({
    el:'.container',
    data:{
        lists:null,
        total:0,
        editingShop:null,
        editingShopIndex:-1
        },
    computed:{
        allSelected:{
            get(){
                if(this.lists&&this.lists.length){
                    return this.lists.every(shop=>{
                        return shop.checked
                    })
                }
                return  false
            },
            set(newVal){
                this,lists.forEach(shop=>{
                    shop.cheched=newVal
                    shop.goodsList.forEach(good=>{
                        good.cheched=newVal
                    })
                })

            }
        },
        allRemoveSelected:{
            get(){
                if(this.editingShop){
                    return this.editingShop.removeChecked
                }
                return false

            },
            set(newVal){
                if(this.editingShop){
                    this.editingShop.removeCheched=newVal
                    this.editingShop.goodsList.forEach(good=>{
                        good.removeCheched=newVal
                    })
                }

            }
        },
        selectLists(){



            if(this.lists&&this.lists.length){
                let arr=[]
                let total=0
                this.lists.forEach(shop=>{
                    shop.goodsList.forEach(good=>{
                        if(good.cheched){
                            arr.push(good)
                            total+=good.price*good.num
                        }
                    })
                })
                this.total=total
                return arr
            }
            return []
        },
        removeLists(){
            if(this.editingShop){
                let arr=[]
                this.editingShop.goodsList.forEach(good=>{
                    if(good.removeCheched){
                        arr.push(good)
                    }
                })
                return arr
            }
            return []

        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            axios.get(url.cartLists).then(res=>{
                let lists=res.data.cartList
                
                lists.forEach(shop=>{
                    shop.checked=true
                    shop.removeCheched=false
                    shop.editing=false
                    shop.editingMsg='编辑'
                    shop.goodsList.forEach(good=>{
                        good.checked=true
                        good.removeCheched=false
                    })
                })
                this.lists=lists
            })
        },
        selectGood(shop,good){
            let attr =this.editingShop?'removeChecked':'checked'
            good[attr]=!good[attr]
            shop[attr]=shop.goodsList.every(good=>{
                return good[attr]
            })
        },
        selectShop(shop){
            let attr=this.editingShop?'removeChecked':'checked'
            shop[attr]=!shop[attr]
            shop.goodsList.forEach(good=>{
                good[attr]=shop[attr]
            })
        },
        selectAll(){
            let attr =this.editingShop?'allRemoveSelected':'allSelected'
            this[attr]=!this[attr]
        },
        edit(shop,shopIndex){
            shop.editing=!shop.editing
            shop.editingMsg=shop.editing?'完成':'编辑'
            this.lists.forEach((item,i)=>{
                if(shopIndex!==i){
                    item.editing=false
                    item.editingMsg=shop.editing?'':'编辑'
                
                }
            })
            this.editingShop=shop.editing?shop:null
            this.editingShopIndex=shop.editing?shopIndex:-1
        },
        reduce(good){
            if(good.num===1) return
            axios.get(url.cartAdd,{
                id:good.id,
                num:1

            }).then(res=>{
                good.num--
            })
        },
        add(good){
            axios.get(url.cartAdd,{
                id:good.id,
                num:1

            }).then(res=>{
                good.num++
            })
        }

    },
    mixins:[mixin]
})