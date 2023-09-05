<template>
  <section class="">
    <section class="py-16 max-w-7xl mx-auto w-full px-20 flex justify-between">

      <div class="text-left mt-20 space-y-5">
        <h1 class="text-6xl"><span class="text-primary-purple tracking-wide">Deliver</span> Your Goods With <span
            class="text-primary-purple">Ease</span></h1>
        <p class="mt-8 text-xl capitalize font-lato">Remain at the comfort of your home and watch your goods
          get
          delivered
          fast and
          securely</p>

        <div class="ml-40 pt-4 w-full">
          <img src="../assets/svgs/arrow.svg" alt="">
        </div>

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
      </div>

      <div>
        <img src="../assets/svgs/iphone.svg" alt="" />
      </div>

    </section>


    <div>
      <img src="../assets/svgs/lines.svg" alt="" />
    </div>
  </section>
</template>

<script setup>
import IconApple from '../components/icons/IconApple.vue'
import IconPlaystore from '../components/icons/IconPlaystore.vue'
</script>