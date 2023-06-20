<script lang="ts" setup>
import { reactive, defineAsyncComponent } from 'vue';
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
import { useRoute } from 'vue-router';

const UserMenu = defineAsyncComponent(() => import('@/components/header/UserMenu.vue'))

const route = useRoute()

const navigations = reactive([
  {
    name: 'Home',
    icon: HomeOutlined
  },
  {
    name: 'About',
    icon: InfoCircleOutlined
  }
])

const isActive = (name: string) => {
  return route.name === name
}
</script>

<template>
  <a-row :wrap="false">
    <a-col flex="auto">
      <a-row justify="center">
        <a-col class="flex">
          <router-link
            v-for="(item) in navigations"
            class="h-64 w-64 flex flex-center nav-item"
            :to="{ name: item.name }"
            :class="[{ 'active': isActive(item.name) }]">
            <component class="fs-34 color-black" :is="item.icon"></component>
          </router-link>
        </a-col>
      </a-row>
    </a-col>
    <a-col flex="none">
      <user-menu />
    </a-col>
  </a-row>
</template>

<style lang="scss" scoped>
@import '@/style/variables/colors.scss';
.nav-item {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: get-color('transparent');
    border-radius: 0px 0px 2px 2px;
    transition: background-color .2s;
  }
}
.active {
  &::before {
    background-color: get-color('blue');
  }
}
</style>