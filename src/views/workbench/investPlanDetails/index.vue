<template>
    <div>
        <compHeader></compHeader>
        <publicTable :versionId='versionId'></publicTable>
        <router-view :is='currentComp'></router-view>
    </div>
</template>

<script>
import compHeader from '../../../components/comp-hearder.vue'
import publicTable from './crossRule.vue'
export default {
  name:'index',
  data(){
   return {
       currentComp:'',
       versionId:''
   }
  },
  components:{
    compHeader,
    publicTable
  },
  created(){
      let {versionId} = this.$route.query;
      this.versionId = versionId;
      sessionStorage.setItem('versionId',versionId)
  }
}
</script>

<style scoped>

</style>
