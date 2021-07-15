<template>
  <div>
    <div class="bg-section overflow-hidden -mt-1 relative z-0">
      <!-- background pattern -->

      <!-- card list -->
      <vueper-slides
        :breakpoints="breakpoints"
        :visible-slides="5"
        :slide-ratio="1 / 5"
        :touchable="false"
        :gap="3"
        :bullets="false"
        slide-multiple
        class="z-50 mt-10 px-2 md:px-16 no-shadow"
        fixed-height="150px"
      >
        <template #arrow-left>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-white focus:outline-none focus:border-0 focus:ring-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </template>

        <template #arrow-right>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </template>
        <vueper-slide v-for="(slide, i) in slides" :key="i">
          <template #content>
            <!-- card -->
            <NuxtLink :to="`/services/${slide.slug}`">
              <div
                class="w-full h-full bg-transparent border-graident graident-border-linear relative cursor-pointer"
              >
                <img
                  class="object-cover w-full h-full rounded-xl"
                  :src="require(`~/assets/img/services/${slide.image}.png`)"
                />
                <!-- text -->
                <p
                  class="absolute bottom-0 pb-6 mx-4 font-bold text-white text-base lg:text-lg tracking-wide"
                >
                  {{ slide.title }}
                </p>
              </div>
            </NuxtLink>
          </template>
        </vueper-slide>
      </vueper-slides>

      <div
        class="mt-20 mb-40 lg:w-2/3 mx-auto px-5 lg:px-0 text-white lg:text-center relative z-20"
      >
        <h1 class="title font-arial-black lg:text-56 text-41 leading-none py-3">
          {{ getSlideData.section1.heading }}
        </h1>
        <p class="mt-6">
          {{ getSlideData.section1.content }}
        </p>
      </div>
    </div>
    <!-- end hero section -->

    <!-- section 2 -->
    <div
      class="bg-center bg-cover bg-no-repeat min-h-screen"
      :style="resolveBackground('/img/services/bg_section_2.png')"
    >
      <!--  -->
      <div class="grid lg:grid-cols-2 lg:mx-24 mx-5 lg:py-36">
        <!-- image-->
        <div class="relative">
          <img
            :src="require(`~/assets/img/services/${getSlideData.image}.png`)"
            class="lg:rounded-3xl rounded-4xl -mt-20 lg:-mt-0 relative z-10"
          />

          <!-- dot -->
          <img
            src="~/assets/img/services/img_section_2_whitedot.png"
            class="absolute lg:-top-10 -top-28 lg:-left-10 -left-2 lg:z-0 z-20"
          />
          <img
            src="~/assets/img/services/img_section_2_reddot.png"
            class="absolute -bottom-10 lg:right-10 -right-2 z-20"
          />
        </div>

        <!-- text -->
        <div class="text-white my-auto">
          <h1 class="title text-41 font-arial-black leading-none mt-12 lg:mt-0">
            {{ getSlideData.section2.heading }}
          </h1>
          <p class="mt-4">
            {{ getSlideData.section2.content }}
          </p>
        </div>
      </div>

      <!--  -->
      <div class="text-center text-white relative">
        <!-- text -->
        <div class="lg:w-2/3 lg:mx-auto mx-5 lg:pb-96 pb-40 pt-60 lg:pt-0">
          <h1 class="title font-arial-black text-56 leading-none">
            {{ getSlideData.section3.heading }}
          </h1>
          <p class="mt-4 lg:mt-4">
            {{ getSlideData.section2.subHeading }}
          </p>
        </div>

        <!-- image -->
        <div
          class="absolute lg:w-2/3 w-5/6 right-0 left-0 lg:-bottom-40 bottom-2/3 mx-auto rounded-3xl lg:p-2 p-1"
          style="background: -webkit-linear-gradient(right, #0500ff, #ff002e)"
        >
          <img
            src="~/assets/img/services/img_section_2.2.png"
            class="rounded-3xl"
          />
        </div>
      </div>
    </div>
    <!-- end section 2 -->

    <!-- section 3 : card -->
    <div
      class="bg-section lg:pt-72 text-center pb-36 -mt-20 lg:-mt-0 overflow-hidden"
    >
      <!-- card-list -->
      <div class="grid lg:grid-cols-4 px-10 gap-7">
        <!-- card -->
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="bg-b-dark-gray rounded-2xl p-4 text-white flex flex-col space-y-2"
        >
          <!-- image -->
          <img
            class="rounded-tr-2xl rounded-tl-2xl flex-1 object-cover"
            :src="require(`~/assets/img/services/${slide.image}.png`)"
          />

          <!-- text -->
          <p class="font-bold text-2xl">{{ slide.title }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="my-40 bg-white lg:w-3/4 mx-5 mb-20 lg:mx-auto pb-20 relative">
        <h1 class="title font-arial-black lg:text-56 text-41 pt-14">
          Change the Game
        </h1>
        <p class="mt-3 mb-14">
          Our experts can take your requirements and turn in them into products
          users love.
        </p>
        <NuxtLink
          to="/contact"
          class="font-bold button-linear-red py-5 px-6 rounded-lg text-white"
        >
          GET IN TOUCH
        </NuxtLink>

        <!-- ++ -->
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSlides from '~/static/service-slides'
export default {
  data() {
    return {
      selectedSlide: 0,
      breakpoints: {
        1200: {
          slideRatio: 1 / 4,
          visibleSlides: 4,
        },
        1100: {
          slideRatio: 1 / 4,
          visibleSlides: 4,
        },
        900: {
          slideRatio: 1 / 2,
          visibleSlides: 2,
        },
        600: {
          slideRatio: 1 / 2,
          visibleSlides: 1,
        },
      },
      slides: ServiceSlides,
    }
  },
  computed: {
    getSlideData() {
      return this.slides[this.selectedSlide]
    },
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  },
}
</script>

<style scoped>
.border-graident::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.75rem;
  padding: 1px;
  background: linear-gradient(45deg, #ff002e, #0500ff);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: destination-out;
  mask-composite: exclude;
}
</style>
