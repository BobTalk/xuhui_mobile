<template>
    <!-- 越规提示 -->
    
    <el-table :data="crossRuleList" border height="200">
    
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
    
        <el-table-column prop="indexName" label="越规指标" width="150" align="center" :show-overflow-tooltip="true"></el-table-column>
    
        <el-table-column prop="threshold" label="越规条件" width="150" align="center" :show-overflow-tooltip="true"></el-table-column>
    
        <el-table-column prop="indexValue" label="当前值" width="150" align="center" :show-overflow-tooltip="true"></el-table-column>
    
        <el-table-column prop="indexDesc" label="说明" align="center" :show-overflow-tooltip="true"></el-table-column>
    
        <el-table-column prop="" label="提交人" width="100" align="center" :show-overflow-tooltip="true"></el-table-column>
    
    </el-table>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    name: 'crossRule',
    props: {

    },
    data() {
        return {
            crossRuleList: []
        }
    },
    created() {
        let  versionId = sessionStorage.getItem('versionId');
        console.log(versionId)
        this.getCrossRuleData({versionId})
    },
    // computed() {},
    // watch() {},
    methods: {
        ...mapActions('crossRule',['getCrossRuleData'])
    }
}
</script>

<style scoped>

</style>
