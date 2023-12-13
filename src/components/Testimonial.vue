<!-- <template class="w-full h-[200px] bg-slate-100">
    
   <div>
    <h1>Testimonial</h1>
    <swiper
    :modules="modules"
      :slidesPerView="3"
      :spaceBetween="50"
      :freeMode="true"
      :scrollbar="{ draggable: true }"
      :pagination="{
        clickable: true,
      }"
    
      class="mySwiper"
    >
      <swiper-slide class="w-100 h-60 bg-slate-400 ">Slide 1</swiper-slide>
      <swiper-slide class="w-100 h-60 bg-slate-400 ">Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide class="w-100 h-60 bg-slate-400 ">Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide class="w-100 h-60 bg-slate-400 ">Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide class="w-100 h-60 bg-slate-400 ">Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
   </div>
  </template>
  <script setup>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import { Scrollbar } from 'swiper/modules';
  
    // // Import Swiper styles
    import 'swiper/css';
  import 'swiper/css/scrollbar';
  
    // import 'swiper/css/free-mode';
    // import 'swiper/css/pagination';
  
    // import './style.css';
  
    // import required modules
    // import { FreeMode, Pagination } from 'swiper/modules';
  
    // export default {
    //   components: {
    //     Swiper,
    //     SwiperSlide,
    //   },
    //   setup() {
    //     return {
    //       modules: [FreeMode, Pagination],
    //     };
    //   },
    // };

  
  </script>
   -->

<!-- new -->

<template>

  <div class="testimonial mb-20">
    <h2 class="text-3xl lg:text-5xl text-center font-semibold mb-8 lg:mb-16 md:px-12">Customer testimonials</h2>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :freeMode="true"
      :initialSlide = 1
      :slidesPerView="2.6"
      :spaceBetween="200"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
          <img src="../assets/images/testimonials/1.png" class="w-[450px]" />
          <div class="text mt-6 text-left">
                        <h3 class="text-[22px] font-semibold">Emilie Oscar</h3>
                        <p class="text-[16px]">“Sign up to receive your sensor, download the DecodedSelf app and get
                            real-time insights”</p>
                    </div>
      </swiper-slide>
      <swiper-slide isActive=true>
        <img src="../assets/images/testimonials/2.png" class="w-[450px]" />
        <div class="text mt-6 text-left">
                        <h3 class="text-[22px] font-semibold">Emilie Oscar</h3>
                        <p class="text-[16px]">“Sign up to receive your sensor, download the DecodedSelf app and get
                            real-time insights”</p>
                    </div></swiper-slide
      ><swiper-slide
        ><img src="../assets/images/testimonials/3.png" class="w-[450px]" />
        <div class="text mt-6 text-left">
                        <h3 class="text-[22px] font-semibold">Emilie Oscar</h3>
                        <p class="text-[16px]">“Sign up to receive your sensor, download the DecodedSelf app and get
                            real-time insights”</p>
                    </div>
        </swiper-slide
      >
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import 'swiper/css/free-mode';

// import './style.css';

// import required modules
import { EffectCoverflow, FreeMode } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, FreeMode],
    };
  },
};
</script>

<style>


.swiper {
  width: 100%;
  padding-bottom: 100px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 40px;
}

.text{
    display: none;
}
.swiper-slide-active .text{
    display: block;
}

.swiper-slide-prev {
  transform: rotate(-12deg) !important;
  transition: 1s linear;
  top: 100px;
}
.swiper-slide-next {
  transform: rotate(12deg) !important;
  transition: 1s linear;

  top: 100px;
}
</style>
