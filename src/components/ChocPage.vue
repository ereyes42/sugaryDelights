<script setup>
import BaseCard from '@/cards/BaseCard.vue'
</script>

<template>
  <div class="mt-5 py-2 text-center text-3xl font-bold text-sky-900">
    <p>Chocolates</p>
  </div>
  <main class="flex h-auto items-center justify-center">
    <div class="container mx-5 grid grid-cols-5 gap-5 py-5">
      <BaseCard v-for="n in 10" :key="n.id" />
    </div>
  </main>
</template>
