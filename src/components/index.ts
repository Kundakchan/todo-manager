import { defineAsyncComponent } from 'vue'

const KHeader = defineAsyncComponent(() => import('@/components/header/header.vue'))

export {
  KHeader
}