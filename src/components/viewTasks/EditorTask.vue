<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore()
const { get, update } = store

const props = defineProps<{
  id: string,
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'update:open', status: boolean): void,
  (e: 'savedData'): void
}>()

const saveHandler = async () => {
  try {
    await update({ id: props.id, name: task.value.name, status: task.value.status, description: task.value.description })
    cancelHandler()
    emit('savedData')
  } catch (error) {
    console.error(error)
  }
}

const cancelHandler = () => {
  emit('update:open', false)
}

const statuses = reactive([
  {
    key: 'new',
    label: 'Новый'
  },
  {
    key: 'processing',
    label: 'В процессе'
  },
  {
    key: 'success',
    label: 'Выполненные'
  },
  {
    key: 'cancel',
    label: 'Отменённые'
  }
])

const task = ref({
  name: '',
  status: '',
  description: ''
})
const loading = computed(() => store.loading)

const init = async () => {
  try {
    await get(props.id)
    task.value = {
      name: store.current?.name,
      status: store.current?.status,
      description: store.current?.description
    }
  } catch (error) {
    console.error(error)
  }
}

const showModal = ref(props.open)

watch(
  () => props.open,
  async (open) => {
    showModal.value = open
    if (!open) return
    init()
  }
)

</script>

<template>
  <a-modal
    :width="900"
    v-model:open="showModal"
    title="Редактирования задачи"
    okText="Сохранить"
    cancelText="Отменить"
    @ok="saveHandler"
    @cancel="cancelHandler"
    :ok-button-props="{ disabled: loading, loading: loading }"
  >
    <a-row justify="space-between" class="mb24">
      <a-col :span="14">
        <a-typography-text strong>Наименования</a-typography-text>
        <a-input :disabled="loading" v-model:value="task.name" />
      </a-col>
      <a-col :span="6">
        <a-typography-text strong>Статус</a-typography-text>
        <a-select :disabled="loading" v-model:value="task.status" style="width: 100%">
          <a-select-option v-for="status in statuses" :value="status.key">{{ status.label }}</a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-typography-text strong>Подробное описания</a-typography-text>
        <a-textarea :disabled="loading" v-model:value="task.description" :rows="8"></a-textarea>
      </a-col>
    </a-row>
  </a-modal>
</template>