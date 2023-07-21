<script lang="ts" setup>
import { inject, computed } from 'vue';

const count = inject('count', 0)

const dinamicCount = computed(() => props.value * count.value)

interface Props {
  value: number,
  label: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="item">
    <span>{{ props.label }}</span>
    <span class="count">{{ dinamicCount }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .item {
    border-radius: 4px;
    padding: 4px 8px;
    background-color: rgb(89, 89, 206);
    color: white;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
  .count {
    border-radius: 1em;
    background-color: rgb(200, 47, 47);
    width: 1em;
    height: 1em;
    text-align: center;
    padding: 4px;
  }
</style>