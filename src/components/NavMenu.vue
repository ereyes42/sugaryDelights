<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/choc">Chocolates</RouterLink>
    <RouterLink to="/spec">Specialties</RouterLink>
    <RouterLink to="/clear">Clearance</RouterLink>
    <RouterLink to="/cand">Candies</RouterLink>
    <RouterLink to="/check">🛒</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
