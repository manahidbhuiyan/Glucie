<template>
     <!-- Nav + Banner  -->
     <header
        class="lg:max-w-[1400px] mx-auto flex gap-8 lg:gap-16 flex-col lg:flex-row justify-center lg:justify-between">
        <div class="flex-1">
            <div class="navbar">
                <div class="navbar-start">
                    <p
                        class="text-black normal-case text-2xl lg:text-3xl font-bold tracking-[.08em] cursor-pointer pl-3 lg:pl-0">
                        Glucie®
                    </p>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 text-lg">
                        <li class="hover:text-[#2979ff]"><a href='#features'>Features</a></li>
                        <li class="hover:text-[#2979ff]"><a href='#testimonials'>Testimonials</a></li>
                        <li class="hover:text-[#2979ff]"><a href='#pricing'>Pricing</a></li>
                        <li class="hover:text-[#2979ff]"><a href='#faqs'>FAQs</a></li>
                    </ul>
                </div>
                <div class="navbar-end lg:hidden">
                    <div class="dropdown relative">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </label>
                        <ul tabindex="0"
                            class="menu menu-sm dropdown-content absolute mt-0 right-3 z-[1] p-2 bg-white shadow rounded-box w-52 text-xl">
                            <li class="hover:text-[#2979ff]"><a href='#features'>Features</a></li>
                            <li class="hover:text-[#2979ff]"><a href='#testimonials'>Testimonials</a></li>
                            <li class="hover:text-[#2979ff]"><a href='#pricing'>Pricing</a></li>
                            <li class="hover:text-[#2979ff]"><a href='#faqs'>FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div data-aos="fade-down" data-aos-duration="1000" class="flex flex-col justify-center lg:justify-end mt-16 lg:mt-44 p-5">
                <h1 class="text-4xl lg:text-7xl font-semibold">Understand How Food Impact Your Perfect Body</h1>
                <p class="text-lg mt-8 mb-10 ">A personalized program based on your body’s unique reactions and
                    scientific studies.</p>
                <div>
                    <button
                        class="text-white border-2 border-[#2251D4] bg-[#2251D4] rounded-full px-5 lg:px-8 py-2 mr-3 lg:mr-5">Shop
                        Now</button>
                    <button
                        class="text-[#2251D4] border-2 border-[#2251D4] bg-[#2251D44D] rounded-full px-5 lg:px-8 py-2 ">Learn
                        More</button>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" class="flex-1 flex justify-center lg:justify-end p-5">
            <img src="../assets/images/banner.png" alt="">
        </div>
    </header>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>
