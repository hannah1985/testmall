<template>
<div>
  <main-tab-bar/>
  <router-view/>
</div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar"

export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
@import  "assets/css/base.css";
</style>
