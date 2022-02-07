<template>
  <div class="">
    <section

      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
    >
      <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
          {{ currentStory.content.title }}
        </h1>
        <p class="mt-4 lg:text-lg">
          {{ currentStory.content.description }}
        </p>
      </div>
    </section>
    <!-- end hero section -->

    <!-- section 2 -->
    <div>
      <section
        class="grid lg:grid-cols-2 lg:gap-6 items-center lg:py-24 py-10 mx-auto max-w-4/5 container"
      >
        <!-- image-->
        <div class="mx-auto relative rounded-2xl hvr-right">
          <img
            class="w-full h-full object-contain"
            :src="currentStory.content.image_1.filename"
            alt=""
          />
          <!-- text -->
        </div>
        <!-- text -->
        <div class="my-8 lg:my-0">
          <h2
            class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black text-center lg:text-left"
          >
            {{ currentStory.content.title_1 }}
          </h2>
          <p class="text-lg text-h-gray mt-4">
            {{ currentStory.content.description_1 }}
          </p>
        </div>
      </section>

      <section
        class="lg:py-24 py-10 bgColor-grey"
      >
        <div
          class="text-center relative mx-auto max-w-4/5 container"
        >
          <!-- text -->
          <div class="mx-auto md:max-w-4/5 mb-8 md:mb-16">
            <h2
              class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black"
            >
              {{ currentStory.content.title_2 }}
            </h2>
            <p class="text-lg text-h-gray mt-4">
              {{ currentStory.content.description_2 }}
            </p>
          </div>

          <!-- image -->

          <!--        <div class="viewer">-->
          <!--          <viewer-->
          <!--            ref="viewer"-->
          <!--            class="viewer hvr-top"-->
          <!--            :images="[-->
          <!--            require(`~/assets/img/services/featured-images/${getSlideData.image}.png`),-->
          <!--          ]"-->
          <!--            :options="viewOptions"-->
          <!--            @inited="inited"-->
          <!--          >-->
          <!--            <template #default>-->
          <!--              <div-->
          <!--                class="aspect-w-4 aspect-h-2 border-graident-thick graident-border-linear rounded-3xl"-->
          <!--                @click="showImage"-->
          <!--              >-->
          <!--                <img-->
          <!--                  :src="-->
          <!--                  require(`~/assets/img/services/featured-images/${getSlideData.image}.png`)-->
          <!--                "-->
          <!--                  class="object-fill p-2"-->
          <!--                  alt=""-->
          <!--                />-->
          <!--              </div>-->
          <!--            </template>-->
          <!--          </viewer>-->
          <!--        </div>-->
          <div
            class="aspect-w-4 aspect-h-2 border-graident-thick graident-border-linear rounded-3xl feature-image hvr-top"
          >
            <img
              :src="currentStory.content.image_2.filename"
              alt=""
              class="object-fill p-2"
            />
          </div>
        </div>

      </section>

<!--      <section-->
<!--        v-if="getSlideData.section4"-->
<!--        :style="resolveBackground('/img/product-bg.jpg')"-->
<!--        class="lg:py-24 py-10 max-w-full bg-no-repeat bg-cover bg-center overlapped-section"-->
<!--      >-->
<!--        <div class="grid lg:grid-cols-2 lg:gap-6 mx-auto max-w-4/5 container">-->
<!--          &lt;!&ndash; text &ndash;&gt;-->
<!--          <div class="my-auto text-white">-->
<!--            <h2 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">-->
<!--              {{ getSlideData.section4.heading }}-->
<!--            </h2>-->
<!--            <div class="text-opacity-80">-->
<!--              <p class="text-lg mt-4">-->
<!--                {{ getSlideData.section4.desc.first }}-->
<!--              </p>-->
<!--              <p class="text-lg mt-4">-->
<!--                {{ getSlideData.section4.desc.second }}-->
<!--              </p>-->
<!--              <ul class="list-disc list-inside mt-4">-->
<!--                <li-->
<!--                  v-for="(i, index) in getSlideData.section4.list"-->
<!--                  :key="index"-->
<!--                >-->
<!--                  {{ i }}-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div class="mt-8 mb-12 lg:mb-0">-->
<!--              <NuxtLink-->
<!--                :to="getSlideData.section4.link"-->
<!--                class="underline tracking-widest"-->
<!--              >-->
<!--                Read More >-->
<!--              </NuxtLink>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; image&ndash;&gt;-->
<!--          <div class="mx-auto">-->
<!--            <img-->
<!--              class="w-full h-full object-contain hvr-left"-->
<!--              :src="-->
<!--                require(`~/assets/img/services/${getSlideData.section4.image}.png`)-->
<!--              "-->
<!--              alt=""-->
<!--            />-->
<!--            &lt;!&ndash; text &ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->
    </div>
    <!-- end section 2 -->

    <!-- section 3 : card -->
    <section class="lg:py-24 pt-0 py-10 mx-auto max-w-4/5 text-center container">
      <!-- card-list -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <!-- card -->
        <template v-for="(service, i) in getServicesList">
          <div
            :key="i"
            class="justify-self-center p-4 box-card rounded-md w-full"
            @click="gotoService(service.slug)"
          >
            <!-- image -->
            <div class="">
              <img
                class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
                :src="service.content.image_1.filename"
                alt=""
              />

              <!-- text -->
            </div>
            <p class="mt-4 text-center font-bold text-xl">
              {{ service.content.title }}
            </p>
          </div>

        </template>
      </div>
    </section>

    <!-- CTA -->
    <section
      v-if="getCTA"
      :style="resolveBackground('/img/home-hero-bg.83a56ef.jpg')"
      class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center text-center overflow-hidden relative"
    >
      <div class="py-12 px-8 mx-auto max-w-4/5 container">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-arial-black text-white"
        >
          {{getCTA.title}}
        </h2>
        <p class="text-lg mt-4 text-white">
          {{getCTA.description}}
        </p>
        <NuxtLink
          to="/contact"
          class="font-bold button-red py-4 px-6 rounded-lg text-white inline-block mt-8"
        >
          {{getCTA.button}}
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

const loadData = function ({
                             api,
                             cacheVersion,
                             errorCallback,
                             version,
                             path,
                           }) {
  return api
    .get(`cdn/stories/services`, {
      version,
      resolve_links: 'story,url',
      resolve_relations: 'services-container.services',
      cv: cacheVersion,
    })
    .then((res) => {
      return res.data
    })
    .catch((res) => {
      if (!res.response) {
        errorCallback({
          statusCode: 404,
          message: 'Failed to receive content form api',
        })
      } else {
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data,
        })
      }
    })
}


export default {
  asyncData(context) {
    // Check if we are in the editing mode
    let editMode = true
    if (
      context.query._storyblok ||
      context.isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'))
    ) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1')
        if (window.location === window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode')
        }
      }
      editMode = true
    }
    const version = editMode ? 'draft' : 'published'
    const path = context.route.path === '/' ? '/home' : context.route.path
    // Load the JSON from the API
    return loadData({
      version,
      api: context.app.$storyapi,
      errorCallback: context.error,
      path,
    })
  },
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
      story: { content: {} },
      currentStory: {},

    }
  },
  computed: {
    getServicesList() {
      return this.story.content.body[0].services
    },
    getCTA(){
      return this.story.content.body[1]
    },
    getSlideData() {
      return this.slides[this.selectedSlide]
    },
    // getCurrentServiceData() {
    //   return this.story.content.body[0].services
    // },
  },
  watch: {
    story: {
      immediate: true,
      handler(value) {
        if (value) {
          this.currentStory = this.story.content.body[0].services.find(
            (s) => `/services/${s.slug}` === this.$route.fullPath
          )
        }
      },
    },
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })

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
    gotoService(slug) {
      this.$router.push({
        path: '/services/'+slug,
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
