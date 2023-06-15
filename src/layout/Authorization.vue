<script lang="ts" setup>
</script>

<template>
  <a-row align="middle">
    <a-col class="background-container" :span="17">
      <img class="background" src="@/assets/images/authorization/background.png" alt="">
    </a-col>
    <a-col class="pt24 pb24 pr64" :span="7">
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
</style>