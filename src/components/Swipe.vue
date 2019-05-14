<template>
    <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swp-page  swiper-slide" v-for="list in lists">
              <a class="js-no-follow " v-bind:href="list.clickUrl">
                <img class="goods-main-photo fadeIn" :src="list.img">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
</template>
<style>
img  .swiper-slide {
    height: 100%;
    width: 100%;
}
   
</style>

<script>
export default {
    name:'swipe',
    props:{
        lists:{
         type:Array,
         required:true
        },
        name:{}
       
    },
    created(){
        console.log(this.lists)
    }
}
</script>
