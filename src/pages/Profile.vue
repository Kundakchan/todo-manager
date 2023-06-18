<script lang="ts" setup>
const StylelineVertical = {
  height: "100%",
  backgroundColor: "#FF2E00",
  width: '3px'
}
</script>

<template>
  <div class="profile-wrapper grid pb64 mt64">
    <a-row>
      <a-col :offset="4">
        <a-divider type="vertical" :style="StylelineVertical" />
      </a-col>
      <a-col class="pl24">
        <a-typography-title class="mb64 mt0"><span class="color-red">Настройка</span> профиля</a-typography-title>
      </a-col>
    </a-row>
    <a-row>
      <a-col :offset="4">
        <a-divider type="vertical" :style="StylelineVertical" />
      </a-col>
      <a-col class="pl24">
        <div class="pb24">
        <a-typography-text strong>Имя</a-typography-text>
        <a-input />
      </div>
      <div class="pb24">
        <a-typography-text strong>Email</a-typography-text>
        <a-input />
      </div>
      <div class="pb24">
        <a-typography-text strong>Пароль</a-typography-text>
        <a-input />
      </div>
      <a-typography-text strong>Роль: Пользователь</a-typography-text>
      </a-col>
    </a-row>
    <a-row>
      <a-col :offset="4">
        <a-divider type="vertical" :style="StylelineVertical" />
      </a-col>
      <a-col class="pl24">
        <a-button type="primary">Сохранить</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/variables/colors.scss';
.profile-wrapper {
  grid-template-rows: auto 1fr auto;
  position: relative;
}
</style>