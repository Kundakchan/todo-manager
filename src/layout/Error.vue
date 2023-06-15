<script lang="ts" setup>
</script>

<template>
  <a-layout class="error-layout pt24 pr24 pb24 pl24">
    <a-layout-content class="error-layout-content">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss" scoped>
.error-layout {
  min-height: 100vh;
}
.error-layout-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>