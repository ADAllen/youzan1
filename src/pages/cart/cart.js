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
        selectGood(good){
            good.checked=!good.checked
        }
    },
    mixins:[mixin]
})