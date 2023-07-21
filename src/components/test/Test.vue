<script lang="ts" setup>
import { reactive } from 'vue';
import { KTestItem } from '@/components';

const list = reactive([
  {
    key: '0',
    label: 'item - 0'
  },
  {
    key: '1',
    label: 'item - 1'
  },
  {
    key: '2',
    label: 'item - 2'
  },
  {
    key: '3',
    label: 'item - 3'
  },
  {
    key: '4',
    label: 'item - 4'
  },
  {
    key: '5',
    label: 'item - 5'
  }
])
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item.key">
      <KTestItem :value="parseInt(item.key)" :label="item.label"/>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    max-width: 400px;
  }
  li {
    margin-bottom: 8px;
  }
</style>