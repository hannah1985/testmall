<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner" />
    <recommend-view :recommend="recommend"/>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import {getHomeMultiData} from 'network/home'

export default {
  name: 'Home',
  data(){
    return{
      banner:[],
      recommend:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created(){
      getHomeMultiData().then(res=>{
        this.banner = res.data.banner.list;
        this.recommend =  res.data.recommend.list
        console.log(res)
      })
    }
  
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color:#fff;
}
</style>