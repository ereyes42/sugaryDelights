<script setup></script>

<template>
  <div class="slide">
    <div class="slide-image">
      <img
        src="https://images.unsplash.com/photo-1627812003105-89a42ad68d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <button class="slide-btn">Shop Now</button>
      <div class="slide-title">Sugary Delights</div>
      <div class="slide-text">Sweets For Any Occasion</div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.slide {
  @apply absolute h-3/4 w-full cursor-pointer shadow-md;
  &-image {
    img {
      @apply absolute h-full w-full rounded-md fill-current object-cover;
    }
  }
  &-title {
    @apply absolute top-1/4 left-1/4  text-xl text-violet-200;
  }
  &-text {
    @apply absolute top-1/3 left-9 text-4xl font-bold text-purple-200 outline-1;
  }
  &-btn {
    @apply absolute top-1/2 left-3/4 rounded-md border-2 border-gray-400 bg-violet-200 p-2 text-center text-2xl opacity-90 hover:font-semibold;
  }
}
</style>
