<template>
  <nav class="max-w-[1250px] mx-auto w-full font-lato font-semibold text-[17px]">
    <ul class="flex items-center justify-between mx-10">
      <li class="link">
        <IconLogo />
      </li>
      <div class="flex">
        <li class="link">Home</li>
        <li class="link ml-16">Driver</li>
        <li class="link ml-16">FAQ</li>
      </div>
    </ul>
  </nav>
</template>

<script setup>
import IconLogo from '../components/icons/IconLogo.vue'
</script>