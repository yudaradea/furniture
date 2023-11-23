<template>
  <div id="services" class="md:pt-[30px]">
    <div class="text-center container pt-[60px] pb-[40px]">
      <div class="text-judul">
        <p class="text-[24px] font-bold pb-4">Inspiration Collection</p>
        <p class="text-[14px] text-[#666] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="flex flex-col md:flex-row mt-12 md:mt-16 gap-6 md:gap-10">
        <div class="md:w-1/3 md:mt-10 overflow-hidden rounded-xl transition-all md:rounded-none md:rounded-tl-[80px]">
          <img
            src="../../assets/images/sections 1.png"
            class="rounded-xl w-full transition-all duration-300 hover:scale-125 md:rounded-none md:rounded-tl-[80px]"
            alt=""
          />
        </div>

        <div class="md:w-1/3 overflow-hidden rounded-xl transition-all md:rounded-none">
          <img
            src="../../assets/images/sectiosn2.png"
            class="rounded-xl w-full transition-all duration-300 hover:scale-125 md:rounded-none"
            alt=""
          />
        </div>

        <div class="md:w-1/3 md:mt-10 overflow-hidden rounded-xl transition-all md:rounded-none md:rounded-br-[80px]">
          <img
            src="../../assets/images/sectiosn 3.png"
            class="rounded-xl w-full transition-all duration-300 hover:scale-125 md:rounded-none md:rounded-br-[80px]"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col justify-center container md:flex-row gap-8 items-center py-[60px] bg-furniture-secondary">
    <div class="md:w-1/2 text-center md:text-start">
      <p class="font-bold text-[24px]">Beautify Your Space</p>
      <p class="font-light text-[14px] leading-7 mt-5">
        Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris.
      </p>
      <button
        class="btn bg-furniture-primary text-white mt-6 rounded-full px-10 hover:shadow-md hover:bg-transparent hover:text-black"
      >
        Learn More
      </button>
    </div>

    <div class="md:w-1/2 overflow-hidden rounded-md rounded-tl-[80px] rounded-br-[80px]">
      <img
        src="../../assets/images/Beautify Your Space.png"
        class="rounded-md rounded-tl-[80px] rounded-br-[80px] md:max-h-[650px] hover:scale-105 transition-all duration-300"
        alt=""
      />
    </div>
  </div>
</template>
