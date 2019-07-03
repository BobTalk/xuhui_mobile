<template>
  <div>
      <table border='1' id='table1'>
          <thead>
              <th v-for='(item,index) in tableHeader' :key="index">{{item}}</th>
          </thead>
          <tbody>
              <tr v-for="(item,index) in tableData" :key="'content_'+index">
                  <td v-for="(childValue,childKey,idx) in item" :key="'child'+idx" >
                      {{childValue}}
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableCell:[[0,0],[0,0],[0,0],[1,1],[0,0],[0,0],[0,0],[0,0]],//从哪行开始合并
            tableRows:[0,3,3,3,3,3,3,0],//合并行
            tableHeader:['序号','项目','分类','分项','现场管理','重大隐患','汇总','备注'],
            tableCellWidth:['2rem','2rem','2rem','2rem','4rem','4rem','2rem','2rem'],
            tableData: [
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
                {
                    id:4,
                    project: '三同时执行情况',
                    type: '针对改扩',
                    subentry: '改扩建未执行',
                    nowManage: '3.2',
                    Hidden: '是',
                    Total:'',
                    remark:''
                },
                {
                    id:5,
                    project: '三同时执行情况',
                    type: '针对改扩',
                    subentry: '改扩建未执行',
                    nowManage: '3.2',
                    Hidden: '是',
                    Total:'',
                    remark:''
                },
                {
                    id:6,
                    project: '三同时执行情况',
                    type: '针对改扩',
                    subentry: '改扩建未执行',
                    nowManage: '3.2',
                    Hidden: '是',
                    Total:'',
                    remark:''
                }
            ]
        }
    },
    mounted () {
        this.dynamicMergeTableRow('table1');  
    },
    methods: {
        dynamicMergeTableRow(tableId) {
            let tb = document.getElementById(tableId);
            let rowCount = tb.rows.length;//行长度
            let colCount = tb.rows[0].cells.length; //列长度
            let tableRows  = this.tableRows;
            let tableCell  = this.tableCell;
            let recodeCell =[];
            let recodeCellH =[];
            //给每一行添加属性ID(表头除外)  
            for (let k = 0; k < rowCount; k++) {
                for (let z = 0; z < colCount; z++) {
                    tb.rows[k].cells[z].id = "tb_" + k.toString() + "_" + z.toString();
                }
            }
            for(let i = 0;i<tableRows.length;i++){
                // tb.rows[i] 每行tr
                if(tableRows[i] != '0'){
                    if(tableCell[i][1] > 0){
                        recodeCellH.push(i);
                       (tb.rows[i].children)[tableCell[i][0]].rowSpan = tableRows[i];
                        for(let q = 0; q<tableRows[i]-1;q++){
                           tb.rows[i+q+1].removeChild((tb.rows[i+q+1].children)[tableCell[i][0]])
                        }
                    }else{
                        recodeCell.push(i);
                        (tb.rows[tableCell[i][0]].children)[i].rowSpan = tableRows[i];
                        for(let p = 0; p<tableRows[i]-1;p++){
                            tb.rows[tableCell[i][0]+1+p].removeChild((tb.rows[tableCell[i][0]+1+p].children)[recodeCell[0]])
                        }
                    }
                }
            }
        }
    }
}
</script>

<style scoped lang="less">
</style>