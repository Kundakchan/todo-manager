<script lang="ts" setup>
import { reactive } from 'vue';
import column from '@/configs/user.grid.config.json'

const source = reactive([])
</script>

<template>
  <div class="users-wrapper grid pb64 pl24 pr24">
    <a-row justify="center">
      <a-col>
        <a-typography-title class="fs-64 mb48 mt48"><span class="color-red">П</span>ользователи</a-typography-title>
      </a-col>
    </a-row>
    <a-row justify="center" class="mb24">
      <a-col :span="12">
        <a-input-search enter-button="Поиск" />
      </a-col>
    </a-row>
    <a-row >
      <a-col :span="24">
        <a-table :columns="column" :data-source="source">
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.users-wrapper {
  grid-template-rows: auto auto 1fr;
}
</style>