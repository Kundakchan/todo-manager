import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

import '@/firebase'
import '@/style/main.scss'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
