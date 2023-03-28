<template>
  <div class="filter-form" v-if="filterData.length > 0">
    <template v-for="(item, index) in filterData" :key="index">
      <div v-if="item.type === 'input'" class="item">
        <span>{{ item.text }}</span>
        <el-input
          style="width: 270px"
          v-model="filterForm[item.field]"
          clearable
          @change="changeForm()"
        />
      </div>
      <div v-else-if="item.type === 'select-multiple'" class="item">
        <span>{{ item.text }}</span>
        <el-select
          style="width: 270px"
          v-model="item.value"
          multiple
          collapse-tags
          collapse-tags-tooltip
          placeholder="Select"
        >
          <el-option
            v-for="(optionItem, index) in item.options"
            :key="index"
            :label="optionItem.label"
            :value="optionItem.value"
          />
        </el-select>
      </div>
      <div v-else-if="item.type === 'date-picker'" class="item">
        <span>{{ item.text }}</span>
        <el-date-picker
          style="width: 250px"
          v-model="filterForm[item.field]"
          type="daterange"
          :range-separator="item.rangeSeparator"
          :start-placeholder="item.placeholder.start"
          :end-placeholder="item.placeholder.end"
          value-format="YYYY-MM-DD"
          @change="changeForm()"
        />
      </div>
    </template>
    <div class="item-other"></div>
    <div class="item-other"></div>
    <div class="item-other"></div>
  </div>
</template>

<script setup>
/* 示例
----- input -----
{
  type: 'input',
  text: 'input-text',
  field: 'input-field',
  value: '',
},
----- select-多选 -----
{
  type: 'select-multiple',
  text: 'select-text',
  field: 'select-field',
  value: [],
  options: [
    {
      value: 'Option1',
      label: 'Option1x',
    },
    {
      value: 'Option2',
      label: 'Option2x',
    },
    {
      value: 'Option3',
      label: 'Option3x',
    },
  ],
},
----- date-picker -----
{
  type: 'date-picker',
  text: 'date-picker-text',
  field: 'date-picker-field',
  value: '',
  rangeSeparator: '~',
  placeholder: {
    start: 'start-placeholder',
    end: 'end-placeholder',
  },
},
 */

// 接受父组件传递过来的值
const props = defineProps({
  filterData: {
    type: Array,
    default: () => [],
  },
})

// 子传父 绑定事件
const emits = defineEmits(['filterFormChange'])

//使用父组件传递过来的值
const { filterData } = toRefs(props)

// 过滤表单数据
const filterForm = ref({})
filterData.value.forEach((item) => {
  filterForm.value[item.field] = item.value
})

// 内容修改后数据发送给父组件
const changeForm = () => {
  emits('filterFormChange', filterForm.value)
}

// 清空数据
const clearedForm = () => {
  Object.keys(filterForm.value).forEach((key) => (filterForm.value[key] = ''))
}

// 暴露给父组件的事件
defineExpose({
  clearedForm,
})
</script>

<style lang="less" scoped>
.filter-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0 1%;
  box-sizing: border-box;

  .item {
    flex: 0 0 24%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin: 5px 0;

    span {
      margin-right: 10px;
      white-space: nowrap;
    }
  }
  .item-other {
    flex: 0 0 24%;
  }
}
</style>
