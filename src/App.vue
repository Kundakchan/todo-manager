<script setup lang="ts">
import { reactive } from 'vue'

import ru_RU from 'ant-design-vue/es/locale/ru_RU'
const locale = reactive(ru_RU)

import theme from '@/configs/theme.json'
</script>

<template>
<a-config-provider :theme="theme" :locale="locale">
  <router-view/>
</a-config-provider>
</template>

<style lang="scss" scoped>

</style>
