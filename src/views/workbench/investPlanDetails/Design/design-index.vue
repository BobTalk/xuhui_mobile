<template>
  <div>
    <generalPlan></generalPlan>
    <businessComp></businessComp>
    <product></product>
   <!-- <otherComp></otherComp> -->
  </div>
</template>

<script>
import businessComp from './businessSegmentation.vue'//商业分割方案
import generalPlan from './generalPlan.vue'//设计总图
import otherComp from './other.vue'//其他
import product from './product.vue' //产品
export default {
  name:'design-index',
  data(){
    return {}
  },
  components:{
    businessComp,
    generalPlan,
    otherComp,
    product
  }
}
</script>

<style scoped>

</style>
