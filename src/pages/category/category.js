import 'css/common.css' 
import './category.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import Foot from 'componts/Foot.vue'           


new Vue ({
     el:'#app',
     data:{

     },
     created(){
         this.getTopList()

     },
     methods:{
         axios.post(url.topList).then(res=>{
             this.topList=res.data.lists

         }).catch(res=>{

         })
     }
     components:{

     }
 })