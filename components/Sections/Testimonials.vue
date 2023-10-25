<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div>
        <section class="lg:py-32 py-14" :class="data.isDarkMode? 'bgColor-tertiary-black': 'bgColor-normal-grey'">

            <div class="mx-auto container">
                <div class="text-center">
                    <h2 v-in-viewport :class="data.isDarkMode? 'color-white': ''">{{ data.getTestimonialsData.title }} <span class="bgFill"><span class="textClip" :class="data.isDarkMode? 'color-white': ''">{{
                        data.getTestimonialsData.animated_word }}</span></span></h2>
                </div>
            </div>
            <div class="mt-8 lg:mt-16">
                <client-only>
                    <VueSlickCarousel class="center-slider" v-bind="$store.state.sliders_configurations.testimonials">
                        <template v-for="(card, i) in data.getTestimonialsData.testimonials_list">
                            <TestimonialCard :key="i" :data="card" />
                        </template>
                    </VueSlickCarousel>
                </client-only>
            </div>
        </section>
    </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {

    name: 'Testimonials',
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
  
  
  