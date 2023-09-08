<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
</script>

<template>
  <!-- <div class="max-w-5xl mx-auto w-full"> -->
  <main class="max-w-[1440px] mx-auto items-center bg-white">

    <div v-if="$isMobile()">
      <h1>Mobile</h1>
    </div>

    <div v-else>
      <header class="py-6">
        <NavComponent />
      </header>
      <RouterView />
    </div>
  </main>
</template>