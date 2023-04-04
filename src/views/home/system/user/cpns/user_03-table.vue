<template>
  <div class="table">
    <el-table
      class="table-data"
      :data="userTableData"
      :border="true"
      :header-cell-style="tableHeaderStyle"
      :row-class-name="tableRowClassName"
      @selection-change="handleSelectionChange"
    >
      <el-table-column fixed align="center" type="selection" width="55" />
      <template v-for="(item, index) in userTableColumnData" :key="index">
        <el-table-column
          v-if="item.label === '均价图'"
          align="center"
          :prop="item.prop"
          :label="item.label"
        >
          <template #default="scope">
            <el-image
              style="width: 100px; height: 50px"
              :src="scope.row[item.prop]"
              :zoom-rate="1.2"
              :preview-src-list="[scope.row[item.prop]]"
              :preview-teleported="true"
              fit="contain"
            />
          </template>
        </el-table-column>
        <el-table-column
          v-else
          align="center"
          :prop="item.prop"
          :label="item.label"
        />
      </template>
    </el-table>
    <div class="table-pagination">
      <el-pagination
        v-model:current-page="pageMsg.currentPage"
        v-model:page-size="pageMsg.pageSize"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageMsg.pageTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
/*----- 引入配置项 -----*/
import { tableHeaderStyle } from '@/config/common/style'
import { userTableColumnData, userTableData } from '@/config/home/system/user'

// 子传父 绑定事件
const emits = defineEmits([
  'tableSingleSelected',
  'tableMultipleSelected',
  'tableSelectedData',
])

// 表格选中数据
const multipleSelection = ref([])
const handleSelectionChange = (selection) => {
  multipleSelection.value = selection

  let isSingleSelected = false
  let isMultipleSelected = false

  if (selection.length === 1) {
    isSingleSelected = false
    isMultipleSelected = false
  } else if (selection.length > 1) {
    isSingleSelected = true
    isMultipleSelected = false
  } else {
    isSingleSelected = true
    isMultipleSelected = true
  }

  emits('tableSingleSelected', isSingleSelected)
  emits('tableMultipleSelected', isMultipleSelected)
  emits('tableSelectedData', selection)
}
// 修改选中行背景色
const tableRowClassName = ({ row }) => {
  for (let item of multipleSelection.value) {
    if (item.id === row.id) {
      return 'table-selection'
    }
  }
}

// 分页组件数据
const pageMsg = ref({
  currentPage: 1,
  pageSize: 10,
  pageTotal: 11,
})
// 切换当前页展示条数事件
const handleSizeChange = (currentSize) => {
  console.log(`${currentSize} items per page`)
}
// 切换当前页数事件
const handleCurrentChange = (currentPage) => {
  console.log(`current page: ${currentPage}`)
}
</script>

<style lang="less" scoped>
.table {
  width: 100%;
  padding-top: 10px;

  :deep(.table-data) {
    width: 100%;
    height: 610px;
    .table-tag {
      margin-right: 10px;
      margin-bottom: 5px;
      cursor: pointer;

      &:last-of-type {
        margin-right: 0;
      }
    }
    .el-table__cell {
      line-height: 30px;
    }
    .table-selection {
      td {
        background-color: #e7f3fd !important;
      }
    }
  }
  .table-pagination {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }
}
</style>
