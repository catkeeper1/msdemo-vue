<template>
  <div>
    <el-button @click="add">增加</el-button>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="name"
                       label="姓名">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="deleteUser(scope.$index)"
                     type="text"
                     size="small">
            移除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { name: '张三' },
        { name: '张三' },
      ]
    }
  },
  methods: {
    add () {
      this.tableData.push({
        name: '李四'
      })
    },
    deleteUser (index) {
      this.tableData.splice(index, 1)
    },
    initTableData(){
      
    }
  },
  created () {
    
  },
}
</script>
<style lang="less" scoped>
</style>