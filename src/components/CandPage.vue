<script setup>
import { nanoid } from 'nanoid'
import { items } from '@/helpers/useWishlist'

const itemOne = 'Gummies'
const itemTwo = 'Jelly Beans'
const itemThree = 'Lollipops'
const itemFour = 'Taffy'
const itemFive = 'Peppermints'

const addItem = (name) => {
  if (name) {
    items.value.push({ id: nanoid(), name: name })
  }
}
</script>

<template>
  <div class="mt-5 py-2 text-center text-3xl font-bold text-sky-900">
    <p>Candies</p>
  </div>
  <main class="flex h-auto items-center justify-center pb-32">
    <div class="container mx-5 grid grid-cols-5 gap-5 py-5">
      <div class="rounded-lg bg-blue-200 shadow-lg">
        <img
          class="w-full rounded-t-lg object-cover"
          src="https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbmR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <div class="p-1">
          <h2 class="text-xl font-semibold text-gray-800">Gummies</h2>
          <button
            type="submit"
            class="my-2 mx-2 rounded-md bg-sky-900 px-1 py-1 text-center font-bold text-blue-200 shadow-md ring-1 ring-blue-200"
            @click="addItem(itemOne)"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
      <div class="rounded-lg bg-blue-200 shadow-lg">
        <img
          class="w-full rounded-t-lg object-cover"
          src="https://images.unsplash.com/photo-1603202902092-3eb7a76ecf5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbmR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <div class="p-1">
          <h2 class="text-xl font-semibold text-gray-800">Jelly Beans</h2>
          <button
            type="submit"
            class="my-2 mx-2 rounded-md bg-sky-900 px-1 py-1 text-center font-bold text-blue-200 shadow-md ring-1 ring-blue-200"
            @click="addItem(itemTwo)"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
      <div class="rounded-lg bg-blue-200 shadow-lg">
        <img
          class="w-full rounded-t-lg object-cover"
          src="https://images.unsplash.com/photo-1606797020447-cf605fc9e408?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxvbGxpcG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <div class="p-1">
          <h2 class="text-xl font-semibold text-gray-800">Lollipops</h2>
          <button
            type="submit"
            class="my-2 mx-2 rounded-md bg-sky-900 px-1 py-1 text-center font-bold text-blue-200 shadow-md ring-1 ring-blue-200"
            @click="addItem(itemThree)"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
      <div class="rounded-lg bg-blue-200 shadow-lg">
        <img
          class="w-full rounded-t-lg object-cover"
          src="https://images.unsplash.com/photo-1633057167397-150d8e714546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNvdXIlMjBjYW5keXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <div class="p-1">
          <h2 class="text-xl font-semibold text-gray-800">Taffy</h2>
          <button
            type="submit"
            class="my-2 mx-2 rounded-md bg-sky-900 px-1 py-1 text-center font-bold text-blue-200 shadow-md ring-1 ring-blue-200"
            @click="addItem(itemFour)"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
      <div class="rounded-lg bg-blue-200 shadow-lg">
        <img
          class="w-full rounded-t-lg object-cover"
          src="https://plus.unsplash.com/premium_photo-1669790759642-dd0330baf92d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <div class="p-1">
          <h2 class="text-xl font-semibold text-gray-800">Peppermints</h2>
          <button
            type="submit"
            class="my-2 mx-2 rounded-md bg-sky-900 px-1 py-1 text-center font-bold text-blue-200 shadow-md ring-1 ring-blue-200"
            @click="addItem(itemFive)"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
