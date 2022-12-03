<script setup>
import { faker } from '@faker-js/faker'

const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const fullName = `${firstName} ${lastName}`

const firstName2 = faker.name.firstName()
const lastName2 = faker.name.lastName()
const fullName2 = `${firstName2} ${lastName2}`
</script>

<template>
  <div class="slide">
    <div class="slide-image">
      <img
        src="https://images.unsplash.com/photo-1612201143788-b15844da6606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      />
    </div>
    <div class="center">
      <button class="slide-btn">Shop Now</button>
    </div>
    <div class="slide-text">Sweets For Any Occasion</div>
  </div>
  <div class="wrapper">
    <div class="wrapper-title">
      <p>REVIEWS</p>
    </div>
    <div class="card">
      <div class="card-review" @click="selectCard">
        <div class="card-image">
          <img :src="faker.internet.avatar()" alt="" srcset="" />
        </div>
        <p class="card-review-name">{{ fullName }}</p>
        <p class="card-review-quote">{{ faker.lorem.paragraph() }}</p>
      </div>
      <div class="card-review" @click="selectCard">
        <div class="card-image">
          <img :src="faker.internet.avatar()" alt="" srcset="" />
        </div>
        <p class="card-review-name">{{ fullName2 }}</p>
        <p class="card-review-quote">{{ faker.lorem.paragraph() }}</p>
      </div>
    </div>
  </div>
  <div class="about">
    <p class="about-title">About Us</p>
    <div class="about-info">
      <p class="about-desc">{{ faker.lorem.paragraphs(3) }}</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.slide {
  @apply container relative flex h-auto w-full cursor-pointer flex-col gap-1;
  &-image {
    img {
      @apply h-96 w-full object-cover;
    }
  }
  &-text {
    @apply absolute top-1/4 left-1/4 right-1/4 text-center text-4xl font-semibold text-sky-900;
  }
  &-btn {
    @apply absolute left-1 right-1 rounded-lg border-2 border-sky-900 bg-blue-200 p-2 text-center text-xl opacity-90 hover:font-semibold;
  }
}

.center {
  @apply absolute top-1/2 left-80 right-80;
}

.about {
  @apply container mx-auto flex w-4/5 flex-col gap-1 pt-2 pb-32;
  &-title {
    @apply mt-2 text-center text-3xl font-bold text-sky-900;
  }
  &-info {
    @apply mt-3 mb-5 grid grid-cols-1;
  }
}

.wrapper {
  @apply container mx-auto flex w-4/5 flex-col gap-1 py-2;

  &-title {
    @apply mt-2 text-center text-3xl font-bold text-sky-900;
  }
}

.card {
  @apply grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2;
  &-image {
    img {
      @apply mx-auto rounded-full object-contain;
    }
  }
}

.card-review {
  @apply mt-5 w-auto cursor-pointer overflow-hidden rounded-lg bg-blue-200 p-4 shadow-md transition-transform duration-300 hover:scale-100 hover:shadow-md hover:shadow-gray-900;

  &-name {
    @apply mb-4 text-center font-bold;
  }
}
</style>
