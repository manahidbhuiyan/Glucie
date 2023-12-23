<script setup>

import Header from './components/Header.vue'
import GlucieWork from './components/GlucieWork.vue'
import Pricing from './components/Pricing.vue'
import faqs from './components/Faqs.vue'
import Footer from './components/Footer.vue'
import JoinWaitlist from './components/JoinWaitlist.vue'
import Features from './components/Features.vue'
import Device from './components/Device.vue'
import Discover from './components/Discover.vue'
import HappyUsers from './components/HappyUsers.vue'
import Testimonial from './components/Testimonial.vue'

</script>

<template>
  <Header></Header>
  <main class="lg:max-w-[1400px] mx-auto">
    <HappyUsers />
    <Device />
    <Features />
    <JoinWaitlist />
    <GlucieWork />
    <Discover />
    <Testimonial />
    <Pricing />
    <faqs />
  </main>
  <Footer></Footer>
</template>

<style scoped>

</style>
