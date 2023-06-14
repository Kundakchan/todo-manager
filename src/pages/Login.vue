<script lang="ts" setup>

</script>

<template>
  <div class="login">
    <a-typography-title :level="3">Авторизация</a-typography-title>
    <a-typography-title :level="5">Email</a-typography-title>
    <a-input />
    <a-typography-title :level="5">Пароль</a-typography-title>
    <a-input />
    <a-row class="action-panel" :gutter="16" align="middle" justify="space-between">
      <a-col>
        <a-button type='primary'>Авторизоваться</a-button>
      </a-col>
      <a-col>
        <router-link :to="{ name: 'Registration' }">Регистрация</router-link>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.action-panel {
  margin-top: 24px;
}
</style>