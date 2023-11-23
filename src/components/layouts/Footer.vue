<script setup>
import { ref } from "vue";
const tanggal = ref(new Date().getFullYear());
</script>

<template>
  <div class="container py-16 flex flex-col items-center bg-furniture-secondary">
    <div class="max-w-md text-center">
      <p class="font-bold text-2xl">Join Our Mailing List</p>
      <p class="font-light text-sm text-gray-400 mt-3">
        Sign up to receive inspiration, product updates, and special offers from our team.
      </p>

      <div class="w-full flex mt-6 justify-center">
        <div>
          <input
            type="text"
            placeholder="example@gmail.com"
            class="border border-furniture-primary text-sm px-2 py-4 w-[260px] md:w-96 rounded-s-lg focus:outline-none"
          />
        </div>
        <div>
          <button class="bg-furniture-primary py-[15px] px-4 text-white rounded-e-lg">Submit</button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-furniture-primary pt-16 container">
    <div class="flex flex-col md:flex-row gap-7">
      <div class="flex flex-col md:w-1/3 text-center md:text-start gap-6">
        <p class="text-white font-bold text-xl">Beauty Care</p>
        <p class="text-white text-sm leading-6 font-light">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris.
        </p>
      </div>
      <div class="md:w-2/3 text-center md:text-start mt-4 md:mt-0">
        <p class="text-white font-bold text-xl">Instagram Shop</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <img src="../../assets/images/IG-1.jpg" class="rounded-lg" alt="" />
          <img src="../../assets/images/IG-2.jpg" class="rounded-lg" alt="" />
          <img src="../../assets/images/IG-3.jpg" class="rounded-lg" alt="" />
          <img src="../../assets/images/IG-4.jpg" class="rounded-lg" alt="" />
        </div>
      </div>
    </div>

    <p class="text-center md:text-start text-sm pb-6 text-white pt-10">
      Copyright &copy; {{ tanggal }} Furniture All Rights Reserved.
    </p>
  </div>
</template>
