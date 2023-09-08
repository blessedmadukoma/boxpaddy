<template>
  <section class="grid grid-cols-5 tracking-wider text-primary-purple mb-10">
    <div>
      <IconLogo />
    </div>

    <div class="flex flex-col ml-10">
      <div class="text-lg">Products</div>
      <ul class="font-lato text-black space-y-2 mt-2">
        <li>Ride</li>
        <li>Driver</li>
        <li>Business</li>
      </ul>
    </div>

    <div class="flex flex-col w-full">
      <div class="text-lg">Legal</div>
      <ul class="font-lato text-black space-y-2 mt-2">
        <li>Terms of Service</li>
        <li>Privacy</li>
      </ul>
    </div>

    <div class="flex flex-col w-full">
      <div class="text-lg">Community</div>
      <ul class="font-lato text-black space-y-2 mt-2">
        <li>FAQs</li>
        <li>Blog</li>
      </ul>
    </div>

    <div class="">
      <div class="italic font-lato text-black">BoxPaddy is available on</div>
      <div class="flex justify-between my-4">
        <h1>Button 1</h1>
        <h1>Button 2</h1>
      </div>
      <div class="text-center">
        <img src="../assets/svgs/socials.svg" alt="socials" />
      </div>
    </div>
  </section>
</template>

<script setup>
import IconLogo from './icons/IconLogo.vue';
// import IconApple from '../components/icons/IconApple.vue'
// import IconPlaystore from '../components/icons/IconPlaystore.vue'


</script>