<template>
    <div class="comp-title">
      <template v-if="iconName">
        <van-icon :name="iconName" />
      </template>
      <template v-else>
        <i class="blue"></i>
      </template>
      <span class="title-name">{{titleName}}</span>
    </div>
</template>

<script>
import Vue from 'vue';
import {Icon} from 'vant';
Vue.use(Icon);
export default {
  name:'compHeader',
  data(){
   return {
   }
  },
  props:{
      iconName:{},
      titleName:{}
  },
  components:{
    [Icon.name]: Icon
  }
}
</script>

<style scoped lang='less'>
  .comp-title{
    display: flex;
    padding: .2rem 0;
    height: .4rem;
    line-height: .4rem;
    .blue{
      display: inline-block;
      width: .05rem;
      height: 100%;
      background: blue;
    }
    /deep/.van-icon{
      height: .4rem;
      line-height: .4rem;
    }
    .title-name{
      font-weight: bold;
      color: #3b3d3e;
      padding-left: .1rem;
    }
  }
</style>
