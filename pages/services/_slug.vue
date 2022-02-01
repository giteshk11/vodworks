<template>
  <div class="">
    <section
      v-if="getSlideData"
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
          {{ getSlideData.section1.heading }}
        </h1>
        <p class="mt-4 lg:text-lg">
          {{ getSlideData.section1.content }}
        </p>
      </div>
    </section>
    <!-- end hero section -->

    <!-- section 2 -->
    <div v-if="getSlideData">
      <section
        class="grid lg:grid-cols-2 lg:gap-6 items-center lg:py-24 py-10 mx-auto max-w-4/5 container"
      >
        <!-- image-->
        <div class="mx-auto relative rounded-2xl hvr-right">
          <img
            class="w-full h-full object-contain"
            :src="
              require(`~/assets/img/services/${getSlideData.image}_section_2.png`)
            "
            alt=""
          />
          <!-- text -->
        </div>
        <!-- text -->
        <div class="my-8 lg:my-0">
          <h2
            class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black text-center lg:text-left"
          >
            {{ getSlideData.section2.heading }}
          </h2>
          <p class="text-lg text-h-gray mt-4">
            {{ getSlideData.section2.content }}
          </p>
        </div>
      </section>

      <section
        v-if="getSlideData"
        class="text-center relative lg:py-24 py-10 mx-auto max-w-4/5 container"
      >
        <!-- text -->
        <div class="mx-auto md:max-w-4/5 mb-8 md:mb-16">
          <h2
            class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black"
          >
            {{ getSlideData.section3.heading }}
          </h2>
          <p class="text-lg text-h-gray mt-4">
            {{ getSlideData.section3.subHeading }}
          </p>
        </div>

        <!-- image -->

        <viewer
          ref="viewer"
          class="viewer hvr-top"
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
                class="object-fill p-2"
                alt=""
              />
            </div>
          </template>
        </viewer>
        <div
          class="aspect-w-4 aspect-h-2 border-graident-thick graident-border-linear rounded-3xl feature-image hvr-top"
        >
          <img
            :src="
              require(`~/assets/img/services/featured-images/${getSlideData.image}.png`)
            "
            alt=""
            class="object-fill p-2"
          />
        </div>
      </section>

      <section
        v-if="getSlideData.section4"
        :style="resolveBackground('/img/product-bg.jpg')"
        class="lg:py-24 py-10 max-w-full bg-no-repeat bg-cover bg-center overlapped-section"
      >
        <div class="grid lg:grid-cols-2 lg:gap-6 mx-auto max-w-4/5 container">
          <!-- text -->
          <div class="my-auto text-white">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
              {{ getSlideData.section4.heading }}
            </h2>
            <div class="text-opacity-80">
              <p class="text-lg mt-4">
                {{ getSlideData.section4.desc.first }}
              </p>
              <p class="text-lg mt-4">
                {{ getSlideData.section4.desc.second }}
              </p>
              <ul class="list-disc list-inside mt-4">
                <li
                  v-for="(i, index) in getSlideData.section4.list"
                  :key="index"
                >
                  {{ i }}
                </li>
              </ul>
            </div>
            <div class="mt-8 mb-12 lg:mb-0">
              <NuxtLink
                :to="getSlideData.section4.link"
                class="underline tracking-widest"
              >
                Read More >
              </NuxtLink>
            </div>
          </div>
          <!-- image-->
          <div class="mx-auto">
            <img
              class="w-full h-full object-contain hvr-left"
              :src="
                require(`~/assets/img/services/${getSlideData.section4.image}.png`)
              "
              alt=""
            />
            <!-- text -->
          </div>
        </div>
      </section>
    </div>
    <!-- end section 2 -->

    <!-- section 3 : card -->
    <section class="lg:py-24 py-10 mx-auto max-w-4/5 text-center container">
      <!-- card-list -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <!-- card -->
        <template v-for="(slide, i) in slides">
          <div
            v-show="isCardVisible(slide)"
            :key="i"
            class="justify-self-center p-4 box-card rounded-md w-full"
            @click="gotoService(i)"
          >
            <!-- image -->
            <div class="">
              <img
                class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
                :src="
                  require(`~/assets/img/services/${slide.image}_section_2.png`)
                "
                alt=""
              />

              <!-- text -->
            </div>
            <p class="mt-4 text-center font-bold text-xl">
              {{ slide.title }}
            </p>
          </div>
        </template>
      </div>
    </section>

    <!-- CTA -->
    <section
      :style="resolveBackground('/img/home-hero-bg.83a56ef.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center text-center overflow-hidden relative"
    >
      <div class="py-12 px-8 mx-auto max-w-4/5 container">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-arial-black text-white"
        >
          Change the Game
        </h2>
        <p class="text-lg mt-4 text-white">
          Our experts bring your ideas and innovations to life.
        </p>
        <NuxtLink
          to="/contact"
          class="font-bold button-red py-4 px-6 rounded-lg text-white inline-block mt-8"
        >
          GET IN TOUCH
        </NuxtLink>
      </div>
      <!-- ++ -->
    </section>
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
