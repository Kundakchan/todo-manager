<script lang="ts" setup>
import { KHeader } from '@/components'
</script>

<template>
  <a-layout class="vh-100">
    <a-layout-header class="bg-white">
      <k-header/>
    </a-layout-header>
    <a-layout-content class="grid">
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>