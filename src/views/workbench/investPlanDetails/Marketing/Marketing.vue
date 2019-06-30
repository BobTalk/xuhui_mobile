<template>
<div>
  <compHeader titleName='营销-定价逻辑'></compHeader>
  <!-- {{getMarketingCompDataG}} -->
  <el-table :data="getMarketingCompDataG" style="width: 100%" border="" height="300">
    <el-table-column type="index" label="产品类型" align="center">
        <template slot-scope="scope">
          <span>{{ formProductType(scope.row.productType)}}</span>
        </template>
    </el-table-column>
    <el-table-column prop="referenceCompeting" label="参考竞品" align="center"></el-table-column>
    <el-table-column prop="influencingFactorOne" label="影响因素1" align="center"></el-table-column>
    <el-table-column prop="influencingFactorTwo" label="影响因素2"  align="center"></el-table-column>
    <el-table-column prop="influencingFactorThree" label="影响因素3"  align="center"></el-table-column>
    <el-table-column prop="casePricing" label="本案定价"  align="center"></el-table-column>
    <el-table-column prop="pcRatio" label="本案流量"  align="center"></el-table-column>
  </el-table>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import compHeader from '../../../components/comp-hearder.vue'
export default {
  name:'Marketing',
  data(){
    return {
      productTypeObj: {
          1: '多层（花园洋房）',
          2: '小高层',
          3: '中高层',
          4: '高层',
          5: '超高层',
          6: '独栋别墅',
          7: '联排别墅',
          8: '合院别墅',
          9: '叠拼别墅',
          10: '双拼别墅',
          11: '独栋办公',
          12: '普通写字楼',
          13: 'SOHO',
          14: 'LOFT',
          15: '独立商铺',
          16: '裙房商业',
          17: '大型集中商业',
          18: '地下商业',
          19: '酒店',
          20: '会所',
          21: '社区活动用房',
          22: '配套用房',
          23: '幼儿园',
          24: '托老所',
          25: '无产权储藏室',
          26: '有产权储藏室',
          27: '地下人防',
          28: '地下车库',
          29: '人才公寓',
          30: '普通保障房/安置房',
          31: '回迁安置房',
          32: '其他'
      }
    }
  },
  computed:{
    ...mapGetters('marketing',['getMarketingCompDataG'])
  },
  created(){
    this.getMarketingCompDataHttp()
  },
  components:{
    compHeader
  },
  methods:{
    ...mapActions('marketing',['getMarketingCompDataHttp']),
     // 产品类型对应的产品名称
    formProductType(productType) {
        return this.productTypeObj[productType]
    },
  }
}
</script>

<style scoped>

</style>
