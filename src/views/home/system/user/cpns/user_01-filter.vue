<template>
  <div class="filter">
    <!-- 过滤条件 -->
    <div class="filter-condition">
      <filter-form
        ref="filterFormRef"
        :filter-data="userFilterData"
        @filterFormChange="filterChange"
      />
    </div>
    <!-- 操作按钮 -->
    <div class="filter-btn">
      <el-button class="btn-item" :color="commonBtnColor.btnQueryColor">
        <i class="icon"><i-ep-search /></i>
        <span>查询</span>
      </el-button>
      <el-button
        class="btn-item"
        :color="commonBtnColor.btnResetColor"
        @click="resetBtnClick"
      >
        <i class="icon"><i-ep-refreshRight /></i>
        <span>重置</span>
      </el-button>
    </div>
  </div>
</template>

<script setup>
/*----- 引入子组件 -----*/
import FilterForm from '@/components/form/filter-form.vue'
/*----- 引入配置项 -----*/
import { commonBtnColor } from '@/config/common/style'
import { userFilterData } from '@/config/home/system/user'

// 接收子组件事件
const filterChange = (filterForm) => {
  console.log(filterForm)
}

// 重置过滤数据
const filterFormRef = ref()
const resetBtnClick = () => {
  filterFormRef.value.clearedForm()
}
</script>

<style lang="less" scoped>
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0 5px;
  border-bottom: 1px #efefef dashed;

  // 过滤条件
  .filter-condition {
    flex: 1;
  }
  // 操作按钮
  .filter-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 190px;

    .btn-item {
      display: flex;
      align-items: center;
      padding: 12px 18px;
    }
  }
}
</style>
