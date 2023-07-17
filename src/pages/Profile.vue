<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth';
const store = useAuthStore()
const { profileUpdate } = store

const user = ref({
  name: store.user?.displayName,
  email: store.user?.email,
  password: ''
})

const loading = ref(false)

watch(
  () => store.user,
  (value) => {
    user.value = {
      name: value?.displayName,
      email: value?.email,
      password: ''
    }
  }
)

const submit = async () => {
  loading.value = true
  try {
    if (typeof user.value.name === 'string' && typeof user.value.email === 'string') {
      profileUpdate({ name: user.value.name, email: user.value.email, password: user.value.password })
    }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

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
        <a-input v-model:value="user.name" />
      </div>
      <div class="pb24">
        <a-typography-text strong>Email</a-typography-text>
        <a-input v-model:value="user.email" />
      </div>
      <div class="pb24">
        <a-typography-text strong>Пароль</a-typography-text>
        <a-input v-model:value="user.password" />
      </div>
      <a-typography-text strong>Роль: Пользователь</a-typography-text>
      </a-col>
    </a-row>
    <a-row>
      <a-col :offset="4">
        <a-divider type="vertical" :style="StylelineVertical" />
      </a-col>
      <a-col class="pl24">
        <a-button :loading="loading" :disabled="loading" @click="submit" type="primary">Сохранить</a-button>
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