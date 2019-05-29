<template>
<div class="bottom-nav">
    <ul>
      <li :class="{active:index==curIndex}" v-for="(list,index)in navConfig" @click="changeNav(list,index)"><a :href="list.href"><i :class="list.icon"></i><div>{{list.name}}</div></a></li>
     
    </ul>
    </div>
</template>
<script>
let navConfig =[{
  name:'有赞',
  icon:'icon-home',
  href:'index.html'
},
{
  name:'分类',
  icon:'icon-category',
  href:'category.html'
},
{
  name:'购物车',
  icon:'icon-cart',
  href:'cart.html'
},
{
  name:'我',
  icon:'icon-user',
  href:'member.html'
}]
export default {
  data(){
    return{
      navConfig,
      curIndex:0
    }
  },
  methods:{
    changeNav(list,index){
      this.curIndex=index
    }
  }
}
</script>
