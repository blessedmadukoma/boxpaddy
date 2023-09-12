<template>
  <section>

    <section class="flex rounded-lg bg-[#5959CB] text-white p-8">
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
    <section class="mt-20 grid grid-cols-5 tracking-wider text-primary-purple mb-10">
      <div>
        <a href="/">
          <IconLogo />
        </a>
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

      <div>
        <div class="italic font-lato text-black">BoxPaddy is available on</div>

        <div class="pt-2 flex justify-between my-4 text-white text-sm w-full">
          <div class="cursor-pointer bg-primary-purple px-3 py-1 rounded-lg flex text-center items-center">
            <IconApple color="#fff" class="w-4" />
            <span class="ml-2 text-sm">App Store</span>
          </div>

          <div class="cursor-pointer bg-primary-purple px-3 py-1 rounded-lg flex text-center items-center">
            <IconPlaystore color="#fff" class="w-4" />
            <span class="ml-2 text-sm">Play Store</span>
          </div>
        </div>

        <div class="pt-2 w-full mx-auto items-center">
          <img class="text-center mx-auto w-30" src="../assets/svgs/socials.svg" alt="socials" />
        </div>
      </div>
    </section>

  </section>
</template>

<script setup>
import IconApple from './icons/IconApple.vue';
import IconLogo from './icons/IconLogo.vue';
import IconPlaystore from './icons/IconPlaystore.vue';
// import IconApple from '../components/icons/IconApple.vue'
// import IconPlaystore from '../components/icons/IconPlaystore.vue'


</script>