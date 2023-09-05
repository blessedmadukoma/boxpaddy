<template>
  <section class="relative">

    <section class="bg-gradient-to-r from-[#F7F1F5] to-white">
      <!-- Hero section -->
      <img src="../assets/svgs/rectangles.svg" alt="" class="absolute" />

      <section class="py-16 max-w-7xl mx-auto w-full px-20 flex justify-between">
        <div class="text-left pt-32 space-y-5 max-w-[600px]">
          <h1 class="text-6xl">
            <span class="text-primary-purple tracking-wide">Deliver</span> Your Goods With
            <span class="text-primary-purple">Ease</span>
          </h1>
          <p class="mt-8 text-xl capitalize font-lato">
            Remain at the comfort of your home and watch your goods get delivered fast and securely
          </p>

          <div class="ml-40 pt-4 w-full">
            <img src="../assets/svgs/arrow.svg" alt="" />
          </div>

          <DownloadButtons />
        </div>

        <div class="pt-28 relative">
          <img class="absolute right-2 w-72 bottom-20 z-50" src="../assets/svgs/iphone.svg" alt="" />

          <img src="../assets/svgs/spiral.svg" alt="" class="ml-40 mt-4 pt-52" />
        </div>
      </section>

      <!-- intro section -->
      <section class="relative">
        <div class="absolute">
          <img src="../assets/svgs/lines.svg" alt="" />
        </div>

        <section class="flex">
          <div>
            <img src="../assets/svgs/user-image.svg" alt="" />
          </div>

          <div class="ml-24 pt-32 w-[500px]">
            <h1 class="text-6xl capitalize">
              Become a <span class="text-primary-purple tracking-wide">Paddy</span> and Earn <span
                class="text-primary-purple">Extra Cash</span>
            </h1>
            <p class="mt-10 text-xl font-lato tracking-wider">
              Who doesn't want some extra cash? Make sharp money by becoming a BoxPaddy driver. Own your decisions, be
              your
              own boss.
            </p>

            <DownloadButtons class="mt-16" />
          </div>
        </section>
      </section>
    </section>

    <!-- What to expect -->
    <section class="text-center">
      <h2 class="text-5xl mt-16">What You Expect From <span class="text-primary-purple tracking-wide">BoxPaddy</span></h2>

      <p class="mt-8 font-lato tracking-wider">Download <span class="text-primary-purple tracking-wide">BoxPaddy</span>
        from the Apple Store
        or Google Play Store, create an account, then sit back
        as <br> your item is
        safely transported to wherever you want it to go.</p>
    </section>

    <div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  </section>
</template>

<script setup>
import DownloadButtons from '../components/DownloadButtons.vue'
</script>
