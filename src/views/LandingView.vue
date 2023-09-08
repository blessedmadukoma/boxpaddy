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

    <!-- What to expect header -->
    <section class="text-center">
      <h2 class="text-5xl mt-16">What You Expect From <span class="text-primary-purple tracking-wide">BoxPaddy</span></h2>

      <p class="mt-8 font-lato text-lg tracking-wider">Download <span
          class="text-primary-purple tracking-wide">BoxPaddy</span>
        from the Apple Store
        or Google Play Store, create an account, then sit back
        as <br> your item is
        safely transported to wherever you want it to go.</p>
    </section>


    <!-- What to expect image -->
    <section class="mt-20 flex justify-between px-10 tracking-wide">
      <div class="flex flex-col justify-between text-right w-1/4">
        <div class="flex items-end justify-center flex-col">
          <img src="../assets/svgs/cart.svg" alt="">
          <p class="mt-4 text-lg">Fast and Safe</p>
          <p class="mt-2 tracking-wide font-lato font-light">Experience peace of mind <br> as your package is <br>
            delivered fast, easy
            and safe
          </p>
        </div>

        <div class="flex items-end justify-center flex-col">
          <img src="../assets/svgs/cart.svg" alt="">
          <p class="mt-4 text-lg">Track your package</p>
          <p class="mt-2 tracking-wide font-lato font-light">Be able to track and view <br> your packages current <br>
            location in
            real time</p>
        </div>
      </div>

      <div class="relative w-2/4">
        <img src="../assets/svgs/circles.svg" alt="" />
        <img src="../assets/svgs/phone_mockup.svg" alt="" class="absolute top-12 right-40" />
      </div>

      <div class="flex flex-col justify-between text-left w-1/4">
        <div class="flex items-start justify-center flex-col">
          <img src="../assets/svgs/cart.svg" alt="">
          <p class="mt-4 text-lg">Deliver to place of comfort</p>
          <p class="mt-2 tracking-wide font-lato font-light">We deliver to your home, <br> office or whichever <br>
            location you
            choose
          </p>
        </div>

        <div class="flex items-start justify-center flex-col">
          <img src="../assets/svgs/cart.svg" alt="">
          <p class="mt-4 text-lg">Fast and Safe</p>
          <p class="mt-2 tracking-wide font-lato font-light">Experience peace of mind <br> as your package is <br>
            delivered fast, easy
            and safe
          </p>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="flex justify-between mx-36 mt-20 bg-[#D4D4F1] bg-opacity-[0.22] rounded-xl p-14 ">
      <div class="w-1/2 mr-10">
        <div class="text-center">
          <p class="text-3xl text-primary-purple tracking-wider">Frequently Asked Questions</p>
          <p class="font-light text-lg mt-4 tracking-wider">How can we help you?</p>
        </div>

        <div class="font-lato mt-10 space-y-3 text-sm">
          <div class="flex justify-between items-center bg-white p-4 rounded-xl">
            <span>What is BoxPaddy?</span>
            <img class="mr-2" src="../assets/svgs/right-arrow.svg" />
          </div>

          <div class="flex justify-between items-center bg-white p-4 rounded-xl">
            <span>Who can use BoxPaddy?</span>
            <img class="mr-2" src="../assets/svgs/right-arrow.svg" />
          </div>

          <div class="flex justify-between items-center bg-white p-4 rounded-xl">
            <span>How can I become a driver on BoxPaddy?</span>
            <img class="mr-2" src="../assets/svgs/right-arrow.svg" />
          </div>

          <div class="flex justify-between items-center bg-white p-4 rounded-xl">
            <span>How can I insert few destinations in the request details?</span>
            <img class="mr-2" src="../assets/svgs/right-arrow.svg" />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <img class="w-full" src="../assets/svgs/question.svg" />
      </div>
    </section>

    <!-- Outro section -->
    <section class="mx-36 mt-20 flex rounded-lg bg-[#5959CB] text-white p-8">
      <aside class="w-1/4 relative">
        <img class="w-2/4 absolute right-20 -top-5" src="../assets/svgs/phone_mockup.svg" alt="" />
      </aside>

      <div class="w-3/4 tracking-wider">
        <p class="text-3xl">Download the BoxPaddy App!!</p>
        <p class="font-lato mt-4">Boxpaddy is a client-server style mobile logistics application. Users will be
          supplied
          with a simple and
          user-friendly user interface that allows them to reserve rides that will transport their items to both close and
          far destinations in a timely manner, as well as track their shipments.</p>

        <div class="flex text-primary-purple mt-6 text-xl">
          <button class="cursor-pointer bg-white rounded-[10px] py-3 px-8 flex justify-center items-center text-center">
            <IconApple color="#5959cb" />
            <span class="ml-2 tracking-wider">App Store</span>
          </button>

          <button class="ml-8 cursor-pointer bg-white rounded-[10px]  px-8 flex justify-center items-center text-center">
            <IconPlaystore :color="'#5959cb'" />
            <span class="ml-2 tracking-wider">Play Store</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="mx-36 mt-20">
      <FooterComponent />
    </section>

  </section>
</template>

<script setup>
import DownloadButtons from '../components/DownloadButtons.vue'

import IconPlaystore from '../components/icons/IconPlaystore.vue'
import IconApple from '../components/icons/IconApple.vue'
import FooterComponent from '../components/FooterComponent.vue';
</script>
