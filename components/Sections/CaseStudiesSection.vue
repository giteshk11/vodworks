<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <section v-if="data.getCasesData" class="lg:py-32 py-14" :class="data.isDarkMode?'bgColor-tertiary-black color-white':''">
    <div class="mx-auto container">
      <div class="text-center">
        <h2 v-in-viewport>{{ data.title }} <span class="bgFill"><span class="textClip" :class="data.isDarkMode?'color-white':''"> {{ data.animated_word }}</span></span>
          </h2>
      </div>

      <div class="mx-auto md:max-w-4/5">
        <div class="mt-8 lg:mt-16">
          <client-only>
            <VueSlickCarousel class="success-stories-slider" v-bind="$store.state.sliders_configurations.success_stories">
              <template v-for="(card, i) in data.getCasesData.stories">
                <CaseStudyCard :key="i" :data="card" />
              </template>
            </VueSlickCarousel>
          </client-only>
        </div>
      </div>

      <div class="text-center">
        <NuxtLink to="/" class="btn-primary btn-lg mt-16 inline-block ">
          show all cases
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {

  name: 'CaseStudiesContainer',
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
  
  
  