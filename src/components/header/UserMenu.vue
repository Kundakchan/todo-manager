<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue'
import { reactive, computed } from 'vue';
import type { ItemType } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()

const selectedKeys = computed(() => [route.name])

const items: ItemType[] = reactive([
  {
    key: 'Profile',
    label: 'Настройка профиля',
    onClick: () => {
      router.push({ name: 'Profile' })
    }
  },
  {
    key: 'LogOut',
    label: 'Выйти',
    onClick: () => {
      console.log('log out')
    }
  }
])

</script>

<template>
  <a-dropdown>
    <div class="menu-button w-64 h-64 flex flex-center">
      <user-outlined class="fs-34 color-black" />
    </div>
    
    <template #overlay>
      <a-menu
        class="user-menu"
        v-model:selectedKeys="selectedKeys"
        :items="items"
        style="padding: 0;"
      />
    </template>
  </a-dropdown>
</template>

<style lang="scss" scoped>
@import '@/style/variables/colors.scss';
.user-menu {
  :deep(.ant-dropdown-menu-item-selected) {
    color: get-color('blue');
    background-color: initial;
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      border-radius: 2px 0 0 2px;
      background-color: get-color('blue');
    }
  }
}

</style>