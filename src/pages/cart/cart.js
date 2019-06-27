import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import mixin from 'js.mixin.js'
import axios from 'axios'
import url from 'js.api.js'

new Vue({
    el:'.container',
    data:{

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
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            axios.get(url.cartLists).tjem(res=>{
                let lists=res.data.cartLists
                
                lists.forEach(shop=>{
                    shop.checked=ture
                    shop.goodsList.forEach(good=>{
                        good.cheched=true
                    })
                })
                this.lists=lists
            })
        },
        selectGood(shop,good){
            good.checked=!good.checked
            shop.checked=shop.goodsList.every(good=>{
                return good.checked
            })
        },
        selectShop(shop){
            shop.cheched=!shop.checked
            shop.goodsList.forEach(good=>{
                good.checked=shop.checked
            })
        },
        selectAll(){
            this.allSelected=!this.allSelected
        }
    },
    mixins:[mixin]
})