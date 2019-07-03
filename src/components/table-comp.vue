<template>
  <div>
      <table border='1' id='table1'>
          <thead>
              <th v-for='(item,index) in tableHeader' :key="'item_'+index">{{item}}</th>
          </thead>
          <tbody>
              <template v-for="(item,index) in tableData">
                  <tr v-for="(childArr,ind) in item" :key="'childArr_'+ind+index">
                        <td v-for="(childValue,childKey,idx) in childArr" :key="'child'+idx" >
                            {{childValue}}
                        </td>
                  </tr>
              </template>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableHeader:['序号','项目','分类','分项','现场管理','重大隐患','汇总','备注'],
            tableCellWidth:['2rem','2rem','2rem','2rem','4rem','4rem','2rem','2rem'],
            mergeData:[
                {
                    tableCell:[0,0,0,0,0,0,0,0],//从哪行开始合并
                    tableRows:[0,3,3,3,3,3,3,0],//合并行
                },
                // {
                //     tableCell:[0,0,0,0,0,0,0,0],//从哪行开始合并
                //     tableRows:[0,2,1,3,2,1,3,0],//合并行
                // }
            ],
            tableData: [
                [
                    {
                        id:1,
                        project: '企业性质分类',
                        type: '针对企业类别',
                        subentry: '生产（危险化学品生产企业）Ⅰ类A、B、C、级',
                        nowManage: '3.2',
                        Hidden: '是',
                        Total:'',
                        remark:'备注备注'
                    },
                    {
                        id:2,
                        project: '企业性质分类',
                        type: '针对企业类别',
                        subentry: '使用（兰炭及配套企业）Ⅱ类A、B、C、级',
                        nowManage: '3.2',
                        Hidden: '是',
                        Total:'',
                        remark:''
                    },
                    {
                        id:3,
                        project: '企业性质分类',
                        type: '针对企业类别',
                        subentry: '储存、经营（加油站）Ⅲ类A、B、C、级C、级',
                        nowManage: '3.2',
                        Hidden: '是',
                        Total:'',
                        remark:''
                    },
                ],
                // [
                //     {
                //         id:4,
                //         project: '三同时执行情况',
                //         type: '针对改扩',
                //         subentry: '改扩建未执行',
                //         nowManage: '3.2',
                //         Hidden: '是',
                //         Total:'',
                //         remark:''
                //     },
                //     {
                //         id:5,
                //         project: '三同时执行情况',
                //         type: '针对改扩',
                //         subentry: '改扩建未执行',
                //         nowManage: '3.2',
                //         Hidden: '是',
                //         Total:'',
                //         remark:''
                //     },
                //     {
                //         id:6,
                //         project: '三同时执行情况',
                //         type: '针对改扩',
                //         subentry: '改扩建未执行',
                //         nowManage: '3.2',
                //         Hidden: '是',
                //         Total:'',
                //         remark:''
                //     }
                // ]
            ]
        }
    },
    mounted () {
        this.dynamicMergeTableRow(this.tableData,this.mergeData);  
    },
    methods: {
        dynamicMergeTableRow(tableData,mergeData) {
            let vmDom = '';
            let vmDomIndex;
            let rowSpanValue;
            let derail;
            for(let i = 0; i< tableData.length;i++){//数据最外层循环
                derail = true;
                for(let j = 0; j<tableData[i].length;j++){//数据分组
                    vmDom +='<tr>'
                    Object.values(tableData[i][j]).map((item,index)=>{ //数据对象
                        if(mergeData[i]['tableRows'][index] > 1 && derail){
                            vmDom +=`<td rowSpan=${mergeData[i]['tableRows'][index]}>${item}</td>`
                            derail = false;
                            vmDomIndex = index
                            rowSpanValue = mergeData[i]['tableRows'][index]
                        }else {}
                    })
                    vmDom +='</tr>'
                }
            }
            console.log(vmDom);
            
        }
    }
}
</script>

<style scoped lang="less">
</style>