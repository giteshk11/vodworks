<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="mx-auto md:max-w-4/5">
          <div class="mt-8 lg:mt-16">
            <client-only>
              <VueSlickCarousel class="success-stories-slider"
                v-bind="$store.state.sliders_configurations.success_stories">
                <template v-for="(card, i) in data.case_studies">
                  <CaseStudyCard :key="i" :data="card" />
                </template>
              </VueSlickCarousel>
            </client-only>
          </div>
        </div>
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
  
  
  