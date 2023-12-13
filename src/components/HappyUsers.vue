<template>
<!-- Join 1000+ happy users  -->
<section class="flex justify-center items-center bg-[#000000] h-[300px] lg:h-[400px] my-16 lg:my-44 p-5 lg:p-2 relative">
            <div class="">
                <h2 class="w-1/2 mx-auto text-center text-3xl lg:text-5xl font-semibold absolute top-[42%] left-[25%] z-50"><span
                        class="text-white">Join</span> <span class="text-[#F5FD00]">1000+</span> <span
                        class="text-white">Happy Users</span></h2>
            </div>
            <div class="">
                <img src="../assets/images/clients/1.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[80px] lg:w-[100px] absolute top-12 lg:top-0 left-[25%] lg:left-[38%] rounded-lg lg:rounded-none">
                <img src="../assets/images/clients/2.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[100px] lg:w-[180px] absolute lg:bottom-0 bottom-10 right-0 lg:right-[26%] rounded-lg lg:rounded-none">
                <img src="../assets/images/clients/3.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[40px] lg:w-[70px] absolute bottom-20 left-[36%] lg:bottom-12 lg:left-[44%]">
                <img src="../assets/images/clients/4.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[40px] lg:w-[80px] absolute bottom-32 right-[32%] lg:bottom-40 lg:right-[39%]">
                <img src="../assets/images/clients/5.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[70px] lg:w-[100px] absolute bottom-10 lg:bottom-0 right-[32%] lg:right-[42%] rounded-lg lg:rounded-none">
                <img src="../assets/images/clients/6.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[80px] lg:w-[150px] absolute  bottom-16 lg:bottom-5 left-[10%] lg:left-[31%]">
                <img src="../assets/images/clients/7.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[80px] lg:w-[150px] absolute top-10 lg:top-0 left-0 lg:left-[25%] rounded-lg lg:rounded-none">
                <img src="../assets/images/clients/8.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[60px] lg:w-[100px] absolute top-10 left-[53%] lg:top-0 lg:left-[53%] rounded-lg lg:rounded-none">
                <img src="../assets/images/clients/9.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[60px] lg:w-[120px] absolute top-12 right-[8%] lg:top-10 lg:right-[28%] ">
                <img src="../assets/images/clients/10.png" data-aos="zoom-in" data-aos-duration="1000" alt="" class="w-[60px] lg:w-[120px] absolute top-24 lg:top-20 left-[32%] lg:left-[42%]">
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
