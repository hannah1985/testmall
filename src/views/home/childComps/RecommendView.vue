<template>
  <div class="recommend">
      <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props:{
      recommend:{
          type:Array,
          default(){
              return []
          }
      }
     
  },
  components:{
   
  }
}
</script>

<style>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0  20px;
    border-bottom: 10px solid #eee;
}

.recommend-item{
    flex:1
}

.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>