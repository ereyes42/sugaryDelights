<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/helpers/useAuth'
const { login, logout } = useAuth()
const router = useRouter()
const route = useRoute()
const username = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (route.query.redirect) {
      router.push(route.query.redirect)
    } else {
      router.push({ name: 'Home' })
    }
  } else {
    logout()
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="rounded-md bg-blue-200 px-2 py-1 font-bold text-sky-900 shadow-md ring-1 ring-sky-900">
      Log In
    </button>
  </form>
</template>

<style lang="postcss">
.login-form {
  @apply mx-auto mt-64 flex max-w-md flex-col gap-2 rounded-md bg-sky-900 p-6 shadow-md;
  & input {
    @apply rounded-md px-1 py-1 text-lg text-sky-900 ring-1 ring-sky-900;
  }
}
</style>
