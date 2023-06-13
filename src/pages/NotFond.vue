<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const goToHome = () => {
    router.push({ name: 'Home' })
  }
</script>

<template>
  <a-result status="404" title="404" sub-title="Извините, мы не можем найти такую страницу">
    <template #extra>
      <a-button @click="goToHome" type="primary">Вернуться на главную страницу</a-button>
    </template>
  </a-result>
</template>