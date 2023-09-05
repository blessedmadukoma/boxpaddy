<template>
  <div class="flex text-white pt-4 text-xl">
    <button
      class="cursor-pointer bg-primary-purple rounded-[10px] py-4 px-10 flex justify-center items-center text-center">
      <IconApple />
      <span class="ml-2 tracking-wider">App Store</span>
    </button>

    <button
      class="ml-8 cursor-pointer bg-primary-purple rounded-[10px] py-4 px-10 flex justify-center items-center text-center">
      <IconPlaystore />
      <span class="ml-2 tracking-wider">Play Store</span>
    </button>
  </div>
</template>

<script setup>
import IconApple from '../components/icons/IconApple.vue'
import IconPlaystore from '../components/icons/IconPlaystore.vue'
</script>
