<template>
  <nav class="max-w-[1250px] mx-auto w-full font-lato font-semibold text-[17px]">
    <ul class="flex items-center justify-between mx-10">
      <li class="link">
        <IconLogo />
      </li>
      <div class="flex">
        <a href="/">
          <li class="link ml-16">Home</li>
        </a>
        <a href="/driver">
          <li class="link ml-16">Driver</li>
        </a>
        <a href="/faq">
          <li class="link ml-16">FAQ</li>
        </a>
      </div>
    </ul>
  </nav>
</template>

<script setup>
import IconLogo from '../components/icons/IconLogo.vue'
</script>