<script setup>
import { ref, nextTick, onBeforeMount } from "vue";

const showMenu = ref(false);
function clickMenu() {
  showMenu.value = !showMenu.value;
  showMenu.value &&
    nextTick(() => {
      document.addEventListener("click", hide);
      setTimeout(() => {
        document.addEventListener("scroll", hide);
      }, 500);
    });
}

function hide() {
  showMenu.value = false;
  document.removeEventListener("click", hide);
  document.removeEventListener("scroll", hide);
}

const scrollNav = ref(true);
onBeforeMount(() => {
  window.addEventListener("scroll", handdleScroll);
});

function handdleScroll() {
  if (window.pageYOffset > 70) {
    if (scrollNav.value) scrollNav.value = false;
  } else {
    if (!scrollNav.value) scrollNav.value = true;
  }
}
</script>

<template>
  <nav :class="{ 'shadow-xl': !scrollNav }" class="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-10">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-bold whitespace-nowrap text-furniture-primary">Furniture.</span>
      </a>
      <button
        @click.stop="clickMenu"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          v-if="!showMenu"
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
        <img v-else src="../../assets/images/close.svg" class="w-5 h-5" alt="" />
      </button>
      <div :class="{ hidden: !showMenu }" class="w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-[20px]"
        >
          <li>
            <a
              href="#"
              class="block text-[14px] font-semibold py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Home</a
            >
          </li>

          <li>
            <a
              href="#services"
              class="block text-[14px] font-semibold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#products"
              class="block text-[14px] font-semibold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Product</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block text-[14px] font-semibold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Gallery</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
