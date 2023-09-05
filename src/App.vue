<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
</script>

<template>
  <!-- <div class="max-w-5xl mx-auto w-full"> -->
  <main class="max-w-[1440px] mx-auto items-center bg-gradient-to-r from-[#F7F1F5] to-white">
    <header class="py-6 bg-white">
      <NavComponent />
    </header>
    <RouterView />
  </main>
</template>