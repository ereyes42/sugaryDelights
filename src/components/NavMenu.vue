<script setup>
import { ref } from 'vue'

import { useAuth } from '@/helpers/useAuth'
const { isAuthenticated, logout } = useAuth()

const brand = ref('🍭Sugary Delights')
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{ name: 'Home' }" class="brand">
        <!--RouterLink (links back to MainPage)-->
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <RouterLink :to="{ name: 'Chocolates' }" href="#" class="menu-item">Chocolates</RouterLink>
        <RouterLink :to="{ name: 'Specialties' }" href="#" class="menu-item">Specialties</RouterLink>
        <RouterLink :to="{ name: 'Candies' }" href="#" class="menu-item">Candies</RouterLink>
        <div v-if="isAuthenticated">
          <RouterLink :to="{ name: 'Checkout' }" href="#" class="menu-cart">📜</RouterLink>
          <button class="menu-logout" @click="logout">Logout</button>
        </div>
        <div v-else>
          <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-24 items-center justify-between bg-blue-200 text-sky-900;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
    .brand {
      &-title {
        @apply text-3xl font-bold text-sky-900;
      }
    }
    .menu {
      @apply flex gap-4;
      &-item {
        @apply py-1 px-1 font-bold hover:font-extrabold hover:text-gray-700;
      }
      &-login {
        @apply rounded-md bg-blue-400 py-1 px-1 font-bold hover:font-extrabold hover:text-gray-700;
      }
      &-logout {
        @apply mx-2 rounded-md bg-blue-400 py-1 px-1 font-bold hover:font-extrabold hover:text-black;
      }
    }
  }
}
</style>
