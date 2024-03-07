<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="bgColor-white lg:py-32 py-14">

        <div class="mx-auto container text-center">
            <h2 v-in-viewport>Trusted by Global <span class="bgFill"><span class="textClip">Clients</span></span></h2>
        </div>
        <div class="clients">
            <client-only>

                <VueSlickCarousel class="our-team-slider mt-8 lg:mt-16 pb-4"
                    v-bind="$store.state.sliders_configurations.clients">
                    <template v-for="(slide, i) in data.ourClients.stories">
                        <a :key="i" :href="slide.content.client_url" target="_blank" rel="noopener noreferrer nofollow">
                            <img class="hvr-effect" :src="slide.content.client_logo.filename"
                                :alt="slide.content.client_logo.alt" />
                        </a>
                    </template>
                </VueSlickCarousel>

            </client-only>
        </div>
    </section>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {

    name: 'OurClientsLogos',
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
  
  
  