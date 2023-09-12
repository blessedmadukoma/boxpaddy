<template>
  <section class="bg-faq">
    <section class="text-white py-24">
      <h3 class="text-center text-5xl py-18 tracking-wider">Frequently Asked Questions</h3>

      <div class="font-lato mx-auto w-full pt-14">
        <div class="relative mx-auto w-[760px] text-black">
          <input class="px-8 py-4 w-full rounded-lg self-end" type="text" placeholder="Ask a question" />

          <img class="absolute cursor-pointer top-0 right-10 w-14" src="../assets/svgs/search.svg" alt="" />
        </div>
      </div>
    </section>
  </section>

  <section class="px-64 pt-20">
    <div class="">
      <div class="font-lato space-y-3 text-sm">
        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 rounded-xl">
          <span>What is BoxPaddy?</span>
          <img class="mr-2" src="../assets/svgs/down-arrow.svg" />
        </div>

        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 rounded-xl">
          <span>Who can use BoxPaddy?</span>
          <img class="mr-2" src="../assets/svgs/down-arrow.svg" />
        </div>

        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 rounded-xl">
          <span>How can I become a driver on BoxPaddy?</span>
          <img class="mr-2" src="../assets/svgs/down-arrow.svg" />
        </div>

        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 rounded-xl">
          <span>How can I insert few destinations in the request details?</span>
          <img class="mr-2" src="../assets/svgs/down-arrow.svg" />
        </div>
      </div>
    </div>
  </section>

  <section class="text-center pt-20 tracking-wider">
    <p class="text-4xl">You still have a question?</p>

    <p class="font-lato pt-4">If you cannot find the answer to your question in our FAQ, you can contact our support
      service
      <br> and we will
      answer you shortly.
    </p>

    <div class="font-lato bg-[#DEDEF5] rounded-lg mt-10 mx-auto w-[360px] py-4">
      <p class="font-semibold">Contact Support</p>

      <span class="text-primary-purple">Support@boxpaddy.com</span>
    </div>

  </section>

  <!-- footer -->
  <section class="mx-36 mt-20">
    <FooterComponent />
  </section>
</template>

<script setup>
import FooterComponent from '../components/FooterComponent.vue';


</script>