<script setup>
import { items } from '@/helpers/useWishlist'

const clearItems = () => {
  items.value.splice(0, items.value.length)
}
</script>

<template>
  <div class="mt-5 py-2 text-center text-3xl font-bold text-sky-900">
    <p>Wishlist</p>
  </div>
  <main class="m-auto flex max-w-lg items-center justify-center rounded-lg bg-blue-200 pb-32">
    <ul>
      <li v-for="item in items" :key="item.id" class="text-center font-bold text-sky-900">
        {{ item.name }}
      </li>
    </ul>
  </main>
  <div class="m-auto flex max-w-lg items-center justify-center">
    <button
      type="submit"
      class="center my-2 mx-2 rounded-md bg-sky-900 px-1 py-1 text-center font-bold text-blue-200 shadow-md ring-1 ring-blue-200"
      @click="clearItems()"
    >
      Clear Wishlist
    </button>
  </div>
</template>
