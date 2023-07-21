<script lang="ts" setup>
import { KTest } from '@/components';
import { ref, provide } from 'vue';
const count = ref(1)

provide('count', count)
</script>
<template>
  <KTest />
  <a-form>
    <a-input :style="{ 'max-width': '200px' }" v-model:value.number="count" type="number"></a-input>
    <a-button type="primary">apply</a-button>
  </a-form>
</template>