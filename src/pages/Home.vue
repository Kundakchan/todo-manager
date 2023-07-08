<script lang="ts" setup>
import { ref } from 'vue';

import { KCreatingTask, KViewTasks, KEditorTaks, KStatusTaskTab } from '@/components'
import { useTasksStore } from '@/stores/tasks'
const { getList } = useTasksStore()

// Types import
import type { EditorHander } from '@/stores/tasks/types'

const editor = ref({
  open: false,
  id: ''
})
const editorHander: EditorHander = (id) => {
  editor.value = {
    open: true,
    id: id
  }
}

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
        <k-creating-task />
      </a-col>
    </a-row>
    <a-row class="pl24 pr24">
      <a-col :span="24">
        <k-status-task-tab />
      </a-col>
      <a-col :span="24">
        <k-view-tasks @open-edit="editorHander"/>
      </a-col>
    </a-row>
    <k-editor-taks v-model:open="editor.open" :id="editor.id" @saved-data="getList" />
  </div>
</template>
