<template>
  <div class="bg-section">
    <div class="overflow-hidden relative z-0 mx-auto">
      <!-- background pattern -->
      <!-- card list -->
      <div
        ref="cardSlider"
        class="keen-slider h-full w-full my-6"
        style="height: 150px"
      >
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="keen-slider__slide"
          @click="gotoService(i)"
        >
          <!-- card -->

          <div
            class="w-full h-full bg-transparent border-graident graident-border-linear relative cursor-pointer"
          >
            <img
              class="object-cover w-full h-full rounded-xl"
              :src="require(`~/assets/img/services/${slide.image}.png`)"
            />
            <!-- text -->
            <p
              class="absolute inset-x-0 bottom-0 font-bold text-center mb-4 text-white text-base lg:text-lg tracking-wide"
            >
              {{ slide.title }}
            </p>
          </div>
        </div>
      </div>

      <div
        v-if="getSlideData"
        class="2xl:w-2/3 max-w-4/5 mx-auto text-white text-center relative z-20 mt-20 lg:mt-32"
      >
        <h1
          class="title font-arial-black lg:text-56 text-3xl leading-none py-3"
        >
          {{ getSlideData.section1.heading }}
        </h1>
        <p class="mt-6 text-justify">
          {{ getSlideData.section1.content }}
        </p>
      </div>
    </div>
    <!-- end hero section -->

    <!-- section 2 -->
    <div v-if="getSlideData" class="min-h-screen 2xl:w-2/3 max-w-4/5 mx-auto">
      <!--  -->
      <div class="grid lg:grid-cols-2 lg:gap-6 mt-32 lg:mt-48 max-w-full">
        <!-- image-->
        <div class="mx-auto relative bg-h-black lg:bg-transparent rounded-2xl">
          <img
            class="w-full h-full object-contain"
            :src="
              require(`~/assets/img/services/${getSlideData.image}_section_2.png`)
            "
          />
          <!-- text -->
        </div>
        <!-- text -->
        <div class="text-white my-auto">
          <h1
            class="title text-3xl lg:text-56 py-2 text-center lg:text-left font-arial-black leading-none mt-12 lg:mt-0"
          >
            {{ getSlideData.section2.heading }}
          </h1>
          <p class="mt-4 text-justify">
            {{ getSlideData.section2.content }}
          </p>
        </div>
      </div>

      <!--  -->
      <div
        v-if="getSlideData"
        class="text-center text-white relative mt-32 lg:mt-48 space-y-16 mx-auto"
      >
        <!-- text -->
        <div class="">
          <h1
            class="title font-arial-black text-3xl lg:text-56 leading-none py-2"
          >
            {{ getSlideData.section3.heading }}
          </h1>
          <p class="mt-4 lg:mt-4">
            {{ getSlideData.section3.subHeading }}
          </p>
        </div>

        <!-- image -->
        <div
          class="aspect-w-4 aspect-h-2 border-graident-thick graident-border-linear rounded-3xl"
        >
          <img
            src="~/assets/img/services/img_section_2.2.png"
            class="object-cover p-2"
          />
        </div>
      </div>
    </div>
    <!-- end section 2 -->

    <!-- section 3 : card -->
    <div class="text-center overflow-hidden mt-32 lg:mt-48 px-8">
      <!-- card-list -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        <!-- card -->
        <template v-for="(slide, i) in slides">
          <div
            v-show="isCardVisible(slide)"
            :key="i"
            class="bg-b-dark-gray rounded-2xl p-4 text-white hover:cursor-pointer flex flex-col justify-between space-y-2"
            @click="gotoService(i)"
          >
            <!-- image -->
            <div class="aspect-w-4 aspect-h-3">
              <img
                class="rounded-tr-2xl rounded-tl-2xl object-contain"
                :src="
                  require(`~/assets/img/services/${slide.image}_section_2.png`)
                "
              />

              <!-- text -->
            </div>
            <p class="font-bold text-xl inline-block px-6">
              {{ slide.title }}
            </p>
          </div>
        </template>
      </div>
    </div>

    <!-- CTA -->
    <div
      class="my-16 py-24 text-center mx-6 md:px-0 md:max-w-4/5 2xl:w-2/3 lg:mx-auto"
    >
      <div class="bg-white">
        <h1 class="title font-arial-black lg:text-56 text-41">
          Change the Game
        </h1>
        <p class="mt-3 mb-14">
          Our experts can take your requirements and turn in them into products
          users love.
        </p>
        <NuxtLink
          to="/contact"
          class="font-bold button-linear-red py-5 px-6 rounded-lg text-white inline-block mb-6"
        >
          GET IN TOUCH
        </NuxtLink>
      </div>

      <!-- ++ -->
    </div>
  </div>
</template>

<script>
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import ServiceSlides from '~/static/service-slides'
export default {
  data() {
    return {
      slides: ServiceSlides,
      cardSlider: {},
      selectedSlide: '',
    }
  },
  computed: {
    getSlideData() {
      return this.slides[this.selectedSlide]
    },
  },
  watch: {
    selectedSlide() {
      this.cardSlider.moveToSlide(this.selectedSlide)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.selectedSlide = this.slides.findIndex((s) => {
        return s.slug === this.$route.params.slug
      })
    })
    this.initSlider()
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
    isCardVisible(slide) {
      return slide.slug !== this.$route.params.slug
    },
    gotoService(index) {
      this.$router.push({
        path: `/services/${this.slides[index].slug}`,
      })
    },
    initSlider() {
      this.cardSlider = new KeenSlider(this.$refs.cardSlider, {
        slidesPerView: 4,
        spacing: 50,
        loop: true,
        duration: 1000,
        centered: true,
        breakpoints: {
          '(min-width: 320px) and (max-width: 479px)': {
            slidesPerView: 1,
          },
          '(min-width: 768px) and (max-width: 1024px)': {
            slidesPerView: 3,
            spacing: 20,
          },
        },
      })
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
.border-graident-thick::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.75rem;
  padding: 5px;
  background: linear-gradient(45deg, #ff002e, #0500ff);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: destination-out;
  mask-composite: exclude;
}
</style>
