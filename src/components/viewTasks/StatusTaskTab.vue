<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { useTasksStore } from '@/stores/tasks'

const store = useTasksStore()
const { setFilter, getList } = store

const tab = ref(store.filters.status)

watch(
  () => store.filters.status,
  (status) => {
    tab.value = status
  }
)

const changeHandler = () => {
  setFilter({ field: 'status', value: tab.value })
  getList()
}

const statusList = reactive([
  {
    label: 'Все',
    value: 'all'
  },
  {
    label: 'Новые',
    value: 'new'
  },
  {
    label: 'В процессе',
    value: 'processing'
  },
  {
    label: 'Выполненные',
    value: 'success'
  },
  {
    label: 'Отменённые',
    value: 'cancel'
  }
])
</script>

<template>
  <a-radio-group v-model:value="tab" @change="changeHandler">
    <a-radio-button class="tab-item" v-for="item in statusList" :value="item.value">{{ item.label }}</a-radio-button>
  </a-radio-group>
</template>

<style lang="scss" scoped>
@import '@/style/variables/colors.scss';
.tab-item {
  border: none;
  padding: 0;
  margin-right: 32px;
  height: 46px;
}
.tab-item::before {
  display: none;
}
.tab-item.ant-radio-button-wrapper-checked {
  border-bottom: 2px solid get-color('blue')
}
</style>