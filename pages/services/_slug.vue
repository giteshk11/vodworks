<template>
  <div class="bg-section">
    <div class="overflow-hidden relative z-0 mx-auto">
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
        <svg
          :class="{
            arrow: true,
            'arrow--left': true,
          }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          @click="cardSlider.prev()"
        >
          <path
            d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
          ></path>
        </svg>
        <svg
          v-if="cardSlider"
          :class="{
            arrow: true,
            'arrow--right': true,
          }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          @click="cardSlider.next()"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
        </svg>
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
          <p class="mt-4 lg:mt-4 text-justify">
            {{ getSlideData.section3.subHeading }}
          </p>
        </div>

        <!-- image -->

        <viewer
          ref="viewer"
          class="viewer"
          :images="[
            require(`~/assets/img/services/featured-images/${getSlideData.image}.png`),
          ]"
          :options="viewOptions"
          @inited="inited"
        >
          <template #default>
            <div
              class="aspect-w-4 aspect-h-2 border-graident-thick graident-border-linear rounded-3xl"
              @click="showImage"
            >
              <img
                :src="
                  require(`~/assets/img/services/featured-images/${getSlideData.image}.png`)
                "
                class="object-cover p-2"
              />
            </div>
          </template>
        </viewer>
        <div
          class="aspect-w-4 aspect-h-2 border-graident-thick graident-border-linear rounded-3xl feature-image"
        >
          <img
            :src="
              require(`~/assets/img/services/featured-images/${getSlideData.image}.png`)
            "
            class="object-cover p-2"
          />
        </div>
      </div>

      <div
        v-if="getSlideData.section4"
        class="grid lg:grid-cols-2 lg:gap-6 mt-32 lg:mt-48 max-w-full"
      >
        <!-- text -->
        <div class="my-auto">
          <h1
            class="title text-3xl xl:text-56 py-2 text-center lg:text-left font-arial-black leading-none mt-12 lg:mt-0"
          >
            {{ getSlideData.section4.heading }}
          </h1>
          <div class="text-white text-opacity-80">
            <p class="mt-4 text-justify">
              {{ getSlideData.section4.desc.first }}
            </p>
            <p class="mt-6 text-justify">
              {{ getSlideData.section4.desc.second }}
            </p>
            <ul class="list-disc list-inside mt-4">
              <li v-for="(i, index) in getSlideData.section4.list" :key="index">
                {{ i }}
              </li>
            </ul>
          </div>
          <div class="mt-6">
            <NuxtLink
              :to="getSlideData.section4.link"
              class="text-white underline tracking-widest"
            >
              Read More >
            </NuxtLink>
          </div>
        </div>
        <!-- image-->
        <div class="mx-auto relative bg-h-black lg:bg-transparent rounded-2xl">
          <img
            class="w-full h-full object-contain"
            :src="
              require(`~/assets/img/services/${getSlideData.section4.image}.png`)
            "
          />
          <!-- text -->
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
    <div class="my-16 py-24 text-center mx-6 md:mx-auto md:max-w-4/5 2xl:w-2/3">
      <div class="bg-white py-8 px-8 md:px-0">
        <h1 class="title font-arial-black lg:text-56 text-4xl py-2 lg:py-4">
          Change the Game
        </h1>
        <p class="mt-2">
          Our experts can take your requirements and turn in them into products
          users love.
        </p>
        <NuxtLink
          to="/contact"
          class="font-bold button-linear-red py-5 px-6 rounded-lg text-white inline-block mb-6 mt-10"
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
      viewOptions: {
        inline: false,
        button: true,
        navbar: false,
        title: false,
        toolbar: false,
        tooltip: false,
        movable: false,
        zoomable: true,
        rotatable: false,
        scalable: false,
        transition: true,
        fullscreen: true,
        keyboard: false,
      },
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
    inited(viewer) {
      this.$viewer = viewer
    },
    showImage() {
      this.$viewer.show()
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

.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
}

.arrow--left {
  left: 5px;
}

.arrow--right {
  left: auto;
  right: 5px;
}

.arrow--disabled {
  fill: rgba(255, 255, 255, 0.5);
}

.feature-image {
  display: none;
}

@screen md {
  .viewer {
    display: none !important;
  }
  .feature-image {
    display: block;
  }
}
</style>
