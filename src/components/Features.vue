<template>
  <!-- Decode all your unique body 1 -->
  <section
    class="flex gap-8 lg:gap-0 flex-col-reverse lg:flex-row items-center"
    id="features"
  >
    <div class="flex-1 p-5 lg:p-0">
      <div class="text-center max-w-[500px] mx-auto mb-10 lg:mb-0">
        <h2 class="text-3xl lg:text-5xl font-semibold">
          Decode All Your Unique Body
        </h2>
        <p class="py-9 text-lg">
          One-size-fits-all advice doesn't work. So we'll provide you with the
          most advanced analysis of your gut bacteria, blood sugar and blood
          fats available.
        </p>
        <button
          class="text-base md:text-lg border-2 border-black px-8 py-3 rounded-full"
        >
          Discover our tests
        </button>
      </div>
    </div>
    <div class="flex-1 relative">
      <img src="../assets/images/decode1.png" alt="" />
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        class="absolute bottom-[10%] lg:bottom-[30%] left-[8%] lg:left-[15%]"
      >
        <img src="../assets/images/score.png" alt="" class="rounded-xl" />
      </div>
    </div>
  </section>

  <!-- Decode all your unique body 2 -->
  <section
    class="flex gap-8 md:gap-0 flex-col-reverse lg:flex-row-reverse items-center mt-10 lg:mt-0"
  >
    <div class="flex-1 p-5 lg:p-0">
      <div class="text-center max-w-[500px] mx-auto my-10 lg:my-0">
        <h2 class="text-3xl lg:text-5xl font-semibold">
          Decode All Your Unique Body
        </h2>
        <p class="py-9 text-lg">
          One-size-fits-all advice doesn't work. So we'll provide you with the
          most advanced analysis of your gut bacteria, blood sugar and blood
          fats available.
        </p>
        <button
          class="text-base md:text-lg border-2 border-black px-8 py-3 rounded-full"
        >
          Discover our tests
        </button>
      </div>
    </div>
    <div class="flex-1 relative">
                <img src="../assets/images/pizzza.png" class="w-full" alt="">
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" class="absolute bottom-[10%] lg:bottom-[14%] left-[2%] md:left-[10%] lg:left-[10%] ">
                    <img src="../assets/images/slider.png" alt="" class="rounded-xl">
                </div>
            </div>
  </section>

</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>
