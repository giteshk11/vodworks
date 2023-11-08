<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="mt-8 lg:mt-16">
        <client-only>
            <VueSlickCarousel class="center-slider" v-bind="$store.state.sliders_configurations.testimonials">
                <template v-for="(card, i) in data.getTestimonialsData">
                    <TestimonialCard :key="i" :data="card" />
                </template>
            </VueSlickCarousel>
        </client-only>
    </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {

    name: 'WhatOurClientsSay',
    components: {
        VueSlickCarousel,
    },
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>
  
  
  