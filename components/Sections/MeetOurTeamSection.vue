<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section v-if="data.getTeamsData" class="lg:py-32 py-14"
        :class="data.isDarkMode ? 'bgColor-tertiary-black' : ' bgColor-normal-grey'">
        <div class="mx-auto container">
            <div class="text-center">
                <h2 v-in-viewport :class="data.isDarkMode?'color-white':''">{{ data.title }} <span class="bgFill"><span class="textClip" :class="data.isDarkMode?'color-white':''"> {{ data.animated_word }}</span></span>
                </h2>
                <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
                    {{ data.description }}
                </p>
            </div>

            <!-- card list -->
            <div class="mx-auto max-w-7/10">
                <div class="mx-auto">
                    <div class="mt-8 lg:mt-16">
                        <client-only>
                            <VueSlickCarousel class="our-team-slider" v-bind="$store.state.sliders_configurations.our_team">

                                <template v-for="(card, i) in data.getTeamsData.stories">
                                    <TeamSlidingCard :key="i" :data="card" />
                                </template>

                            </VueSlickCarousel>
                        </client-only>
                    </div>
                </div>
                <div v-if="data.scrollToSection == false" class="text-center">
                    <NuxtLink :to="data.btnURL" class="btn-primary btn-lg mt-16 inline-block ">
                        {{ data.btnText }}
                    </NuxtLink>
                </div>

                <div v-if="data.scrollToSection == true" class="text-center">
                    <div v-scroll-to="data.btnURL" class="btn-primary btn-lg mt-8 inline-block cursor-pointer">
                        {{ data.btnText }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'MeetOurTeamSection',
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
  
  
  