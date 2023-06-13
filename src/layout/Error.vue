<script lang="ts" setup>
</script>

<template>
  <a-layout class="error-layout">
    <a-layout-content class="error-layout-content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss" scoped>
.error-layout {
  min-height: 100vh;
  padding: 24px;
}
.error-layout-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>