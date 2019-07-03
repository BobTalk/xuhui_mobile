<template>
  <div class="general-plan">
    <!-- //设计总图 -->
    <div>
      <van-image src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      <van-cell-group>
        <van-cell title="单元格" value="内容"/>
        <van-cell title="单元格" value="内容"/>
        <van-cell title="单元格" value="内容"/>
        <van-cell title="单元格" value="内容"/>
      </van-cell-group>
      <tableComp></tableComp>
    </div>
    
  </div>
</template>

<script>
import { Image,Cell, CellGroup } from 'vant';
import tableComp from '../../../../components/table-comp.vue'
export default {
  name:'Design',
  data(){
    return {}
  },
  components:{
    [Image.name]:Image,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    tableComp
  }
}
</script>

<style scoped>
.general-plan{
  overflow: auto !important;
}
</style>
