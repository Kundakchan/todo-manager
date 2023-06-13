<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const goToHome = () => {
  router.push({ name: 'Home' })
}
</script>

<template>
  <a-result status="403" title="403" sub-title="Извините, у вас нет доступа к данному ресурсу">
    <template #extra>
      <a-button @click="goToHome" type="primary">Вернуться на главную страницу</a-button>
    </template>
  </a-result>
</template>