<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';
</script>

<template>
  <!-- <div class="max-w-5xl mx-auto w-full"> -->
  <main class="max-w-[1440px] mx-auto items-center bg-white">

    <!-- <div>
      <h1>Mobile</h1>
    </div> -->

    <div>
      <header class="py-6">
        <NavComponent />
      </header>
      <RouterView />
    </div>
  </main>
</template>