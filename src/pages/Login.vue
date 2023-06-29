<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const { login } = useAuthStore()

const email = ref('')
const password = ref('')

const submit = async () => {
  if (!email.value && !password.value) return
  try {
    await login({ email: email.value, password: password.value })
    router.push({ name: 'Home' })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="login">
    <a-typography-title :level="3">Авторизация</a-typography-title>
    <a-typography-title :level="5">Email</a-typography-title>
    <a-input v-model:value="email"/>
    <a-typography-title :level="5">Пароль</a-typography-title>
    <a-input-password v-model:value="password"/>
    <a-row class="mt24" :gutter="16" align="middle" justify="space-between">
      <a-col>
        <a-button @click="submit" type='primary'>Авторизоваться</a-button>
      </a-col>
      <a-col>
        <router-link :to="{ name: 'Registration' }">Регистрация</router-link>
      </a-col>
    </a-row>
  </div>
</template>