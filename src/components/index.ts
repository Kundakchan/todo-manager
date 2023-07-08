import { defineAsyncComponent } from 'vue'

const KHeader = defineAsyncComponent(() => import('@/components/header/header.vue'))
const KCreatingTask = defineAsyncComponent(() => import('@/components/creatingTask/CreatingTask.vue'))
const KViewTasks = defineAsyncComponent(() => import('@/components/viewTasks/ViewTasks.vue'))
const KEditorTaks = defineAsyncComponent(() => import('@/components/viewTasks/EditorTask.vue'))
const KStatusTaskTab = defineAsyncComponent(() => import('@/components/viewTasks/StatusTaskTab.vue'))

export {
  KHeader,
  KCreatingTask,
  KViewTasks,
  KEditorTaks,
  KStatusTaskTab
}