<script setup>
const props = defineProps({
  n: {
    type: Object,
    default: () => ({
      _id: -1,
      name: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
  <div class="rounded-lg bg-blue-200 shadow-lg">
    <img class="w-full rounded-t-lg object-cover" :src="props.n.imageUrl" />
    <div class="p-1">
      <h2 class="text-xl font-semibold text-gray-800">
        {{ props.n.name }}
      </h2>
    </div>
  </div>
</template>
