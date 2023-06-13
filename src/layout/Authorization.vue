<script lang="ts" setup>
</script>

<template>
  <a-row>
    <a-col class="background-container" :span="17">
      <img class="background" src="@/assets/images/authorization/background.png" alt="">
    </a-col>
    <a-col class="slot" :span="7">
      <router-view />
    </a-col>
  </a-row>
</template>

<style lang="scss" scoped>
.background-container {
  height: 100vh;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 0, 40% 100%, 0 100%);
}
.background {
  height: 100%;
  float: right;
}
.slot {
  padding: 24px;
}
</style>