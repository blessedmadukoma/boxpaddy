<template>
  <div class="relative">
    <section class="flex pt-20 bg-gradient-to-r from-white to-[#F7F1F5]">
      <img src="../assets/svgs/driver-rectangles.svg" alt="" class="absolute -top-0" />
      <div class="w-1/2 relative">
        <img class="absolute w-[85%]" src="../assets/svgs/left-iphone.svg" alt="boxpaddy logo" />

        <img class="pt-[360px]" src="../assets/svgs/left-spiral.svg" alt="" />
      </div>

      <div class="w-1/2">
        <h2 class="text-5xl">Become A <span class="text-primary-purple">Paddy</span> And Let <br> <span
            class="text-primary-purple">Everyday</span> Be <span class="text-primary-purple">Payday</span></h2>

        <p class="font-lato pt-10 tracking-wider text-lg">Who doesn't want some extra cash? Make sharp money by <br>
          becoming a
          BoxPaddy driver.
          Own
          your
          decisions, be your own boss.</p>

        <div class="ml-40 pt-4">
          <img src="../assets/svgs/arrow.svg" alt="" />
        </div>

        <DownloadButtons />
      </div>
    </section>

    <!-- <section class="pt-20 px-36 bg-gradient-to-r from-white to-[#F7F1F5]"> -->
    <section class="pt-20 px-36">
      <div
        class="bg-driver py-20 px-4 md:px-8 lg:px-10 xl:px-10 max-w-7xl m-auto h-[30rem] rounded-none md:rounded-none lg:rounded-[2.25rem] xl:rounded-[2.25rem]">
      </div>
    </section>

    <section class="text-center pt-14 tracking-wider">
      <p class="text-3xl capitalize">
        Don’t just <span class="text-primary-purple">drive</span>, Make <span class="text-primary-purple">money</span>
        while doing it !
      </p>

      <p class="font-lato font-light pt-4">How cool is it making money just from doing one of the basic things in life
        with
        no stress,
        all you need is a mobile <br> phone and car.</p>
    </section>

    <!-- wallet section -->
    <section class="relative flex px-48 w-full mx-auto pt-20">
      <div class="w-1/2 py-32">
        <p class="text-4xl capitalize tracking-wider">Be Your Own <span class="text-primary-purple">boss</span> And Cash
          Out Anytime</p>

        <p class="font-lato pt-10 font-light tracking-wide">Cash out anytime you want and have the opportunity to view
          and track your rides and
          other
          expenses. </p>

        <div class="pt-10">
          <DownloadButtons />
        </div>
      </div>
      <div class="w-1/2">
        <img src="../assets/svgs/wallet.svg" alt="">
      </div>
    </section>

    <!-- footer -->
    <section class="px-36 pt-20">
      <FooterComponent />
    </section>
  </div>
</template>

<script setup>
import DownloadButtons from '../components/DownloadButtons.vue';
import FooterComponent from '../components/FooterComponent.vue';


</script>
