<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
</script>

<template>
  <!-- <div class="max-w-5xl mx-auto w-full"> -->
  <main class="max-w-full bg-green-200">
    <header class="py-6 bg-white">
      <NavComponent />
    </header>
    <RouterView />
  </main>
</template>