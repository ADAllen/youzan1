import 'css/common.css'
import './index.css'
import Vue from 'vue'

import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui';
import Foot from 'components/Foot.vue';
import Swipe from 'components/Swipe.vue'
Vue.use(InfiniteScroll);

let app=new Vue({
  el:'#app',
  data:{
    lists:null,
    bannerLists:null,
    pageNum:1,
    loading:false,
    allLoaded:false
  },
  created(){
    this.getLists()
    this.getBanner()
  },

  methods:{
    getLists(){
      if(this.allLoaded) return
      this.loading=true
      axios.get(url.hotLists,{
        pageNum:this.pageNum,
        pageSize:6
      }).then(res=>{
        let curLists=res.data.lists
        if(curLists.length<this.pageSize){
          this.allLoaded=ture
        }

        if(this.lists){
          this.lists=this.lists.concat(curLists)
        }else{
          this.lists=curLists
        }
        this.loading=false
        this.pageNum++
      })

    },
    getBanner(){
      axios.get(url.banner).then(res=>{
        this.bannerLists=res.data.lists
      })
    }
  },
  components:{
    Foot,
    Swipe
  }
})