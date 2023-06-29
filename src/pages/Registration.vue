<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const { registration } = useAuthStore()

const username = ref('')
const email = ref('')
const password = ref('')

const submit = async () => {
  if (!email.value || !password.value) return
  try {
    await registration({ name: username.value, email: email.value, password: password.value })
    router.push({ name: 'Home' })
  } catch (error) {
    console.error(error)
  }
  
}
</script>

<template>
  <div class="login">
    <a-typography-title :level="3">Регистрация</a-typography-title>
    <a-typography-title :level="5">Имя пользователя</a-typography-title>
    <a-input v-model:value="username" />
    <a-typography-title :level="5">Email</a-typography-title>
    <a-input v-model:value="email" />
    <a-typography-title :level="5">Пароль</a-typography-title>
    <a-input-password v-model:value="password" />
    <a-row class="mt24" :gutter="16" align="middle" justify="space-between">
      <a-col>
        <a-button @click="submit" type='primary'>Регистрация</a-button>
      </a-col>
      <a-col>
        <router-link :to="{ name: 'Login' }">Авторизоваться</router-link>
      </a-col>
    </a-row>
  </div>
</template>