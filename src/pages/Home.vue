<script lang="ts" setup>
import { ref, reactive } from 'vue';
import columns from '@/configs/task.grid.config.json'

const status = ref('all')
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

const source = reactive([])
const currentPage = ref(1)

</script>

<template>
  <div class="home-wrapper">
    <a-row class="pl24 pr24" justify="center">
      <a-col>
        <a-typography-title class="fs-64 mb48 mt48"><span class="color-red">Todo</span> manager</a-typography-title>
      </a-col>
    </a-row>
    <a-row class="pl24 pr24 pb24" justify="center">
      <a-col :span="12">
        <a-input-group class="flex">
          <a-input />
          <a-button type="primary">Создать</a-button>
        </a-input-group>
      </a-col>
    </a-row>
    <a-row class="pl24 pr24">
      <a-col :span="24">
        <a-radio-group v-model:value="status">
          <a-radio-button v-for="item in statusList" :value="item.value">{{ item.label }}</a-radio-button>
        </a-radio-group>
      </a-col>
      <a-col :span="24">
        <a-table :columns="columns" :data-source="source"></a-table>
      </a-col>
    </a-row>
  </div>
</template>
