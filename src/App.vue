<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
</script>

<template>
  <!-- <div class="max-w-5xl mx-auto w-full"> -->
  <main class="max-w-[1440px] mx-auto items-center bg-white">
    <header class="py-6">
      <NavComponent />
    </header>
    <RouterView />
  </main>
</template>