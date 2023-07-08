<script lang="ts" setup>
import { ref } from 'vue';
import { useTasksStore } from '@/stores/tasks';

const { creating, getList } = useTasksStore()

const name = ref('')
const loading = ref(false)
const submit = async () => {
  if (!name.value) return
  loading.value = true
  try {
    await creating({ name: name.value })
    name.value = ''
    getList()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <a-input-group class="flex">
    <a-input :disabled="loading" v-model:value="name" />
    <a-button :disabled="loading" @click="submit" type="primary">Создать</a-button>
  </a-input-group>
</template>

<style lang="scss" scoped></style>