<template>
    <!-- 越规提示 -->
    <div v-if='getCrossRuleCompToggleG'>
        <compHeader titleName='越规提示'></compHeader>
        <div class="cross-rule">
            <ul class="table-header">
                <li class="tableW item fontW inline borderT" v-for="(item,index) in crossRuleHeader" :key="`header_${index}`" :style="{'width':(item.liW ? item.liW : '')}">
                    <p class="title">{{item.label}}</p>
                </li>
            </ul>
            <ul class="table-content">
                <div v-for="(item,index) in crossRuleHeader" class="tableW inline" :key='`div_${index}`' :style="{'width':(item.liW ? item.liW : '')}">
                    <li class='content-item content-list' v-for="(children,idx) in crossRuleList" :key="`content_${idx}`">
                        <p class="content">{{children[item.alise]}}</p>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import compHeader from '../../../components/comp-hearder.vue'
import {mapActions,mapGetters} from 'vuex';
export default {
    name: 'crossRule',
    props: {

    },
    components:{
        compHeader
    },
    data() {
        return {
            crossRuleList: [],
            crossRuleHeader:[
                {label:'序号',alise:'index',liW:'2rem'},
                {label:'越规指标',alise:'indexName',liW:'3rem'},
                {label:'越规条件',alise:'threshold',liW:'2rem'},
                {label:'当前值',alise:'indexValue',liW:'2rem'},
                {label:'说明',alise:'indexDesc',liW:'2rem'},
                {label:'提交人',alise:'',liW:'2rem'},
            ]
        }
    },
    created() {
        let  versionId = sessionStorage.getItem('versionId');
        this.getCrossRuleData({versionId})
    },
    computed: {
        ...mapGetters('crossRule',['getCrossRuleDataG','getCrossRuleCompToggleG'])
    },
    watch:{
        getCrossRuleDataG(){
            this.crossRuleList = this.getCrossRuleDataG
        }
    },
    methods: {
        ...mapActions('crossRule',['getCrossRuleData'])
    }
}
</script>

<style scoped lang='less'>
    .cross-rule{
        .fontW{
            font-weight: bolder;
        }
        .inline{
            display: inline-block;
            &:last-child{
                .content-list{
                     border-right:none;
                }
            }
        }
        .tableW{
            width: 2rem;
            vertical-align: top;
        }
         white-space: nowrap;
         overflow: auto;
         border: 1px solid #EBEEF5;
         box-sizing: border-box;
        .table-header,.content-item{
            height: 1rem;
            line-height: 1rem;
            box-sizing: border-box;
        }
        .title{
            color: #909399;
            font-size: .2rem;
        }
        .content{
            color: #ff0000;
            font-size: .18rem;
        }
       
        .content-list{
            text-align: center;
            border-bottom: 1px solid #EBEEF5;
            border-right: 1px solid #EBEEF5; 
            box-sizing: border-box;
        }
        .item{
            text-align: center;
            border-bottom: 1px solid #EBEEF5;
            border-right: 1px solid #EBEEF5; 
            box-sizing: border-box;
            &:last-child{
                border-right:none;
            }
        }
        .borderT{
            border-top: 1px solid #EBEEF5; 
        }
    }
</style>
