<script lang="ts" setup>
import { computed, reactive, onBeforeMount } from 'vue';
import dayjs from "dayjs";
import { EditFilled , DeleteFilled } from '@ant-design/icons-vue';

// Store import
import { useTasksStore } from '@/stores/tasks'

// Types import
import type { TableColumnProps, TableProps } from 'ant-design-vue'
import type { Task, OrderMap, RecordHandler } from '@/stores/tasks/types'

const store = useTasksStore()
const emit = defineEmits<{
  (e: 'openEdit', id: string): void
}>()
const { getList, remove, setSorting } = store

onBeforeMount(() => {
  getList()
})

const orderMap: OrderMap = {
  descend: 'desc',
  ascend: 'asc'
}

const handleTableChange: TableProps<Task>['onChange'] = (pagination,  filters, sorter, extra) => {

  if (!Array.isArray(sorter)) {
    if (typeof sorter.field === 'string') {
      if (sorter.order) {
        setSorting({ field: sorter.field, order: orderMap[sorter.order] })
      } else {
        setSorting({ field: sorter.field, order: orderMap['ascend'] })
      }
    }
  }
  getList()
}

const columns: TableColumnProps<Task>[] = reactive([
  {
    title: "Дата создания",
    dataIndex: "created",
    sorter: true,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: "Дата обновления",
    dataIndex: "updated",
    sorter: true,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: "Названия",
    dataIndex: "name",
    sorter: true,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: "Действия",
    dataIndex: "actions"
  }
])

const source = computed(() => store.list)
const loading = computed(() => store.loading)
const dateFormat = (date: string): string => {
  const value = dayjs(date)

  if (value.isValid()) {
    return dayjs(date).format('D MMMM YYYY г.')
  } else {
    return 'Нет данных'
  }
}
const removeHandler: RecordHandler = async ({ record }) => {
  await remove(record.id)
  await getList()
}

const editHandler: RecordHandler = ({ record }) => {
  emit('openEdit', record.id)
}

</script>

<template>
  <a-table
    :loading="loading"
    rowKey="id"
    :columns="columns"
    :data-source="source"
    @change="handleTableChange"
    :pagination="{ position: ['bottomCenter'] }"
  >
    <template #bodyCell="{ column, text, record  }">
      <div v-if="column.dataIndex === 'created'">
        {{ dateFormat(text) }}
      </div>
      <div v-if="column.dataIndex === 'updated'">
        <span>{{ dateFormat(text) }}</span>
      </div>
      <div v-if="column.dataIndex === 'name'">
        <span>{{ text }}</span>
      </div>
      <a-space :size="12" v-if="column.dataIndex === 'actions'">
        <a-button @click="editHandler({ record })" type="primary" ghost shape="circle">
          <edit-filled />
        </a-button>
        <a-button @click="removeHandler({ record })" danger shape="circle">
          <delete-filled />
        </a-button>
      </a-space>
    </template>
  </a-table>
</template>