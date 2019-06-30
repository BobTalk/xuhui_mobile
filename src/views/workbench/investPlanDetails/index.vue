<template>
    <div>
        <publicTable></publicTable>
        <router-view :is='currentComp'></router-view>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import publicTable from './crossRule.vue'
import Marketing from './Marketing/marketing-index.vue'//营销
import Cost from './Cost/cost-index.vue'//成本
import Design from './Design/design-index.vue'//设计
import Operate from './Operate/operate-index.vue'//运营
import Finance from './Finance/finance-index.vue'//财务
export default {
  name:'index',
  data(){
   return {
       currentComp:'Design',//默认显示组件
       versionId:'',
       roleType:3,//根据权限动态渲染组件 索引值
       compToggle:false
   }
  },
   computed: {
        ...mapGetters('crossRule',['getCrossRuleCompToggleG'])
    },
    watch:{
        getCrossRuleCompToggleG:function(){
            this.compToggle = this.getCrossRuleCompToggleG
        }
    },
  components:{
    publicTable,
    Marketing,
    Cost,
    Design,
    Operate,
    Finance
  },
  created(){
      let {versionId} = this.$route.query;
      this.versionId = versionId;
      sessionStorage.setItem('versionId',versionId);
      this.roleTypeChange()
  },
  methods:{
      // 根据角色类型显示不同的子组件
        roleTypeChange() {
            switch (this.roleType) {
            case 1:
                this.currentComp = 'Marketing'// 营销
                break
            case 2:
                this.currentComp = 'Cost'// 成本
                break
            case 3:
                this.currentComp = 'Design'// 设计
                break
            case 4:
                this.currentComp = 'Operate'// 运营
                break
            case 5:
                this.currentComp = 'Finance'// 财务
                break
            default:
                break
            }
        },
  }
}
</script>

<style scoped>

</style>
