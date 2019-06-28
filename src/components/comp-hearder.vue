<template>
    <div>
        <van-icon name="close" />
        <span>{{titleName}}</span>
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
       titleName:'测试中'
   }
  },
  components:{
    [Icon.name]: Icon
  }
}
</script>

<style scoped>

</style>
