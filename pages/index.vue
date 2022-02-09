<template>
  <div class="font-arial mx-auto">
    <!-- hero section start-->
    <section
      v-if="getHeroData"
      class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center"
      :style="resolveBackground('/img/hero-bg.jpg')"
    >
      <div class="relative overflow-hidden">
        <div class="w-full relative z-50">
          <div
            class="grid xl:grid-cols-12 gap-2 mx-auto max-w-4/5 items-center container"
          >
            <!-- text -->
            <div class="xl:col-span-7 text-lg">
              <h1
                class="text-white text-3xl md:text-4xl lg:text-5xl font-arial-black"
                >
                {{ getHeroData.title }}
              </h1>

              <p class="text-white mt-8 lg:pr-24">
                {{ getHeroData.description1 }}
              </p>
              <p class="text-white mt-4">
                {{ getHeroData.description2 }}
              </p>

              <div class="mt-8">
                <NuxtLink
                  :to="getHeroData.button_url"
                  class="px-6 py-4 bg-white rounded-md text-l-red font-bold inline-block uppercase"
                >
                  {{ getHeroData.button }}
                </NuxtLink>
              </div>
            </div>

            <!-- image -->
            <img
              :src="getHeroData.image.filename"
              class="xl:col-span-5 object-contain hvr-right"
              alt=""
            />
          </div>
        </div>
      </div>

    </section>
    <!-- hero section end-->

    <!--    services start-->
    <section
      v-if="getServicesData"
      class="lg:py-24 py-10 mx-auto max-w-4/5">
      <div class="z-50 relative text-white text-center">
        <div class="mx-auto md:max-w-4/5">
          <h2
            class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black"
          >
            {{ getServicesData.title }}
          </h2>
          <p class="text-h-gray mt-4 text-lg">
            {{ getServicesData.description }}
          </p>

          <!-- link -->
          <NuxtLink
            id="service-button"
            :to="getServicesData.button_url"
            class="mt-8 py-4 px-6 rounded-md font-bold uppercase button-red inline-block"
          >
           {{ getServicesData.button_txt }}
          </NuxtLink>
        </div>

        <!-- card list -->
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-8 mt-16 services-card container"
        >
          <div
            v-for="(service, i) in getServicesData.services"
            :key="i"
            class="justify-self-center p-4 box-card rounded-md w-full"
            @click="gotoService(service.slug)"
          >
            <!-- card -->
            <img
              :src="service.content.image_1.filename"
              alt=""
              class="lg:w-60 w-80 h-44 rounded-md object-contain mx-auto"
            />
            <p class="color-black mt-4 text-center font-bold text-xl">
              {{ service.content.title }}
            </p>
          </div>
          <!-- card -->
        </div>
      </div>
    </section>
    <!--    services end-->


    <!-- webflow -->
    <section
      class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center mx-auto"
      :style="resolveBackground('/img/bg_home_4.png')"
    >
      <!-- content 1 -->
      <div
        v-if="getOpertareSeamlesslyData"
        class="grid lg:grid-cols-2 items-center text-white mx-auto max-w-4/5 container"
      >
        <!-- text -->
        <div class="lg:w-5/6">

          <h4 class="font-arial-black text-2xl lg:text-3xl">
            {{ getOpertareSeamlesslyData.title }}
          </h4>
          <p class="mt-4 lg:text-lg opacity-80">
            {{ getOpertareSeamlesslyData.description }}
          </p>
        </div>

        <!-- image -->
        <div class="relative">
          <img
            :src="getOpertareSeamlesslyData.image.filename"
            class="mx-auto hvr-right"
            alt=""
          />
        </div>
      </div>

      <!-- cotent 2 -->
      <div
        v-if="getOutsourcedProductsData"
        class="grid lg:grid-cols-2 items-center mx-auto max-w-4/5 gap-12 container"
      >
        <!-- image -->
        <div class="relative order-2 lg:order-none">
          <img
            :src="getOutsourcedProductsData.image.filename"
            class="order-2 lg:order-none mx-auto hvr-left"
            alt=""
          />
        </div>

        <!-- text -->
        <div class="text-white">
          <h4 class="font-arial-black text-2xl lg:text-3xl mt-8 lg:mt-0">
            {{ getOutsourcedProductsData.title }}
          </h4>
          <p class="mt-4 text-lg opacity-80">
            {{ getOutsourcedProductsData.description }}
          </p>
        </div>
      </div>
    </section>
    <!-- end web flow -->


    <!--    statistics start-->
    <section
      v-if="getStatisticsData"
      class="py-10 lg:py-20 bgColor-grey">
      <div class="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-4/5 container gap-8">
        <div class="lg:border-r">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">{{ getStatisticsData.card_1_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_1_title }}</p>
        </div>
        <div class="lg:border-r">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">{{ getStatisticsData.card_2_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_2_title }}</p>
        </div>
        <div class="lg:border-r">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">{{ getStatisticsData.card_3_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_3_title }}</p>
        </div>
        <div class="">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">{{ getStatisticsData.card_4_count }}</h2>
          <p class="text-h-gray mt-2">{{ getStatisticsData.card_4_title }}</p>
        </div>
      </div>
    </section>
    <!--    statistics end-->


    <!-- expert developers start-->
    <section
      id="home-expert"
      class="lg:py-24 py-10 grid grid-rows-1 lg:grid-cols-2 mx-auto container"
    >
      <!-- image: left -->
      <div
        class="bg-no-repeat bg-cover bg-center py-40 lg:py-72 relative order-2 lg:order-1"
      >
        <!-- background circle -->
        <!-- <img
          src="~assets/img/bg_home_3.png"
          class="absolute w-4/5 md:w-1/2 lg:w-3/4 top-0 bottom-0 right-0 left-0 m-auto z-0 hidden lg:visible"
          alt=""
        /> -->

        <!-- dot -->
        <!-- <img
          src="~assets/img/home_dot_1.png"
          class="absolute left-20 lg:left-1/4 bottom-1/2 lg:bottom-3/4 z-0 lg:visible"
          alt=""
        />

        <img
          src="~assets/img/home_dot_2.png"
          class="absolute right-7 bottom-20 z-0 lg:visible"
          alt=""
        /> -->

        <!-- image -->
        <div
          ref="rotateAnimation"
          class="absolute inset-0 w-3/4 right-0 left-0 bottom-0 top-0 bg-contain bg-center bg-no-repeat mx-auto"
        >
          <div
            class="absolute transition duration-700 ease-linear mx-auto transform right-0 left-0 bottom-0 top-0 z-50 lg:h-72 h-24 w-24 lg:w-72 dev-card overflow-hidden filter drop-shadow-lg bg-white -translate-y-6 lg:-translate-y-20"
            style="top: 25%"
          >
            <img
              src="~assets/img/home/developers_mobile.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0"
              alt=""
            />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-20 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white translate-x-12 translate-y-9 lg:translate-x-36 lg:translate-y-10"
            style="top: 25%"
          >
            <img
              src="~assets/img/home/developers_backend.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0"
              alt=""
            />
          </div>
          <div
            class="absolute lg:h-72 lg:w-72 h-24 w-24 right-0 mx-auto left-0 bottom-0 top-0 z-10 transform transition duration-700 ease-linear dev-card overflow-hidden filter drop-shadow-lg bg-white -translate-x-12 lg:-translate-x-28 translate-y-12 lg:translate-y-24"
            style="top: 25%"
          >
            <img
              src="~assets/img/home/developers_platform.png"
              class="transition duration-700 ease-linear w-full transform translate-y-0"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- text: right -->
      <div
        v-if="getExpertSlidesData"
        class="lg:ml-20 self-center order-1 lg:order-2 md:order-2 items-center text-center lg:text-left"
      >

          <h2
            class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black lg:pr-24"
            style="width: 90%"
          >
            {{ getExpertSlidesData[count] }}
          </h2>


        <NuxtLink
          to="/contact"
          class="mt-8 py-4 px-6 button-red rounded-md inline-block text-white font-bold uppercase"
        >
          Discuss Your Project
        </NuxtLink>
      </div>
    </section>
    <!-- expert developers end-->


    <!--    our clients start-->
    <section class="lg:py-24 py-10 bgColor-grey">
      <div class="mx-auto max-w-4/5 text-center mb-0 lg:mb-8">
        <h2
          class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black"
        >
          Our Clients
        </h2>
      </div>
      <!-- logo -->
      <div class="h-48 flex justify-center items-center relative">
        <div ref="horzClientSlider" class="keen-slider w-full h-full">
          <div
            v-for="(item, index) in clientList"
            :key="index"
            class="keen-slider__slide flex justify-center items-center"
          >
            <div
              class="flex justify-center transition duration-1000 ease-in-out"
            >
              <div
                :class="[
                  relativeClientSlide === index ? 'opacity-100' : 'opacity-30',
                  `w-64`,
                ]"
              >
                <img
                  :src="
                    require(`~/assets/img/home/home_logo/${item.image}.png`)
                  "
                  :alt="item.image"
                  class="object-contain"
                />
                <!-- <a href="1" class="hidden"></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end clients -->

      <!-- banner -->
      <div
        class="lg:w-11/12 py-4 mx-auto lg:rounded-lg bg-no-repeat bg-cover bg-center text-white container mx-auto"
        :style="resolveBackground('/img/bg_home_5.png')"
      >
        <div class="flex items-center md:items-baseline 2xl:max-w-9/10 mx-auto">
          <div ref="vertClientSlider" class="keen-slider h-486 md:h-80">
            <div
              v-for="(item, index) in clientList"
              :key="index"
              class="w-full keen-slider__slide h-full flex items-center md:flex-none"
            >
              <div
                class="flex flex-col-reverse md:flex-row justify-between w-full px-10 lg:px-20 md:h-full md:items-center align-middle"
              >
                <div class="space-y-8 text-center md:text-left">
                  <p
                    class="transform translate-y-0 transition duration-1000 ease-out text-2xl font-bold max-w-full md:max-w-1/2 text-center md:text-left"
                  >
                    {{ item.name }}
                  </p>
                  <p
                    class="text-white font-arial text-sm md:text-base text-opacity-60 whitespace-normal text-justify md:text-left"
                  >
                    {{ item.about }}
                  </p>
                </div>

                <div
                  id="services-banner-logo"
                  class="self-center justify-self-center lg:w-auto overflow-hidden flex-shrink-0 inline-block"
                >
                  <img
                    :src="
                      require(`~/assets/img/home/home_logo/${item.image}.png`)
                    "
                    :class="[
                      relativeClientSlide === index
                        ? 'filter invert'
                        : 'filter-none',
                      'filter h-20 invert transform translate-y-0 transition duration-1000 ease-out object-contain',
                    ]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    our clients end-->


    <!-- industries start-->
    <section
      v-if="getIndustriesData"
      class="lg:py-24 py-10 mx-auto max-w-4/5 container">
      <div>
        <h2
          class="color-black mb-8 text-3xl md:text-4xl lg:text-5xl font-arial-black text-center mb-8 lg:mb-16"
        >
          {{ getIndustriesData.title }}
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div v-for="industory in getIndustriesData.industries">
            <!-- card start -->
            <div
              class="justify-self-center p-4 box-card rounded-md w-full h-full">
              <!-- image -->
              <img
                class="lg:w-60 w-80 h-44 rounded-lg object-contain mx-auto"
                :src="industory.content.image.filename"
                alt="icon"
              />

              <!-- text -->
              <p class="mt-4 text-center font-bold text-xl">{{industory.content.title}}</p>
              <p class="text-center text-sm text-h-gray">
                {{industory.content.description}}
              </p>
            </div>
            <!-- card end -->
          </div>
        </div>

      </div>

    </section>
    <!-- industries end-->


    <!-- Join our team and share with us start-->
    <section class="lg:py-24 py-10 mx-auto max-w-4/5 container">
      <div
        v-if="getJoinOurTeamData"
        class="grid lg:grid-cols-2 items-center">
        <!-- team -->
        <div
          class="overflow-x-hidden rounded-full order-2 lg:order-none hvr-right"
        >
          <img
            class="w-80 mx-auto md:m-0"
            :src="getJoinOurTeamData.image.filename"
            alt=""
          />
        </div>
        <div class="my-8 lg:my-0">
          <!-- text -->
          <h2
            class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black"
          >
            {{ getJoinOurTeamData.title }}
          </h2>

          <p class="text-lg text-h-gray mt-4">
            {{ getJoinOurTeamData.description }}
          </p>
          <NuxtLink
            :to="getJoinOurTeamData.button_url"
            class="inline-block mt-8 py-4 px-6 button-red rounded-md text-white font-bold uppercase"
          >
            {{ getJoinOurTeamData.button }}
          </NuxtLink>
        </div>
      </div>

      <div
        v-if="getShareWithUsData"
        class="grid lg:grid-cols-2 items-center">
        <div class="my-8 lg:my-0">
          <!-- text -->
          <h2
            class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black"
          >
            {{ getShareWithUsData.title }}
          </h2>

          <p class="text-lg text-h-gray mt-4">
            {{ getShareWithUsData.description }}
          </p>
          <NuxtLink
            :to="getShareWithUsData.button_url"
            class="mt-8 py-4 px-6 button-red rounded-md text-white font-bold uppercase relative inline-block"
          >
            {{ getShareWithUsData.button }}
          </NuxtLink>
        </div>
        <!-- team -->
        <div class="overflow-x-hidden rounded-full hvr-left">
          <img
            class="w-80 mx-auto"
            :src="getShareWithUsData.image.filename"
            alt=""
          />
        </div>
      </div>
    </section>
    <!-- Join our team and share with us end-->


    <section
      v-if="getCTAData"
      class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center"
      :style="resolveBackground('/img/home/get-in-touch-bg.jpg')"
    >
      <div
        class="overflow-hidden grid lg:grid-cols-2 md:gap-2 items-center text-white relative z-10"
      >
        <div class="mx-auto max-w-3/4">
          <h2
            class="text-white text-3xl md:text-4xl lg:text-5xl font-arial-black"
          >
            {{ getCTAData.title_1 }}
            <span class="block font-arial-black"
              >{{ getCTAData.title_2 }}
              <img
                class="inline-block align-middle"
                src="~assets/img/announcement.svg"
                alt="Speaker icon"
            /></span>
          </h2>
          <NuxtLink
            :to="getCTAData.button_url"
            class="mt-8 py-4 px-6 button-red rounded-md font-bold uppercase inline-block"
          >
            {{ getCTAData.button }}
          </NuxtLink>
        </div>

        <!-- img lg -->

        <img
          :src="getCTAData.image.filename"
          class="hidden lg:block w-full h-full object-contain z-10"
          alt=""
        />
      </div>
    </section>

  </div>
</template>

<script>
import KeenSlider from 'keen-slider'
import ServiceSlides from '~/static/service-slides'
import ClientList from '~/static/client-list'
import 'keen-slider/keen-slider.min.css'


const loadData = function ({
                             api,
                             cacheVersion,
                             errorCallback,
                             version,
                             path,
                           }) {
  return api
    .get(`cdn/stories${path}`, {
      version,
      resolve_links: 'story,url',
      resolve_relations: 'services-container.services,expert-section-container.slides,industries-served.industries',
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
      cardSlides: ServiceSlides,
      clientList: ClientList,
      curClientIndex: 0,
      count: 0,
      // expertSection: [
      //   'Scalable Tech Stack',
      //   'Highly Skilled Software Developers',
      //   'Expert Architects & Engineers',
      // ],
      expertSection:[],
      serviceSlider: {},
      vertClientSlider: {},
      horzClientSlider: {},
      relativeServiceSlide: 0,
      relativeClientSlide: 0,
      story: { content: {} },
    }
  },

  head() {
    return {
      title: 'VODWORKS Solving Technology Puzzles In Industries Globally',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Vodworks provides innovative technology &amp; OTT solutions, business/technology consulting, enterprise software services, staff augmentation, UI/UX designs &amp; more.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'vodworks is great again',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'product development, product engineering, Product &amp; Technology Consulting, Product Experience Design, Media technology, OTT Solutions, OTT platform, Online streaming solutions, Product Architecture Transformation, Product Modernisation, DevOps, Product Lifecycle, Product Engineering Process, Conceptualisation, Design &amp; Development, Development, Design, Performance, scalable software, scalable solutions',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'some link from cloudinary?',
        },
      ],
    }
  },
  computed: {
    getHeroData(){
      return this.story.content.body[0]
    },
    getServicesData(){
      return this.story.content.body[1]
    },
    getOpertareSeamlesslyData(){
      return this.story.content.body[2]
    },
    getOutsourcedProductsData(){
      return this.story.content.body[3]
    },
    getStatisticsData(){
      return this.story.content.body[4]
    },

    getExpertSlidesData(){
      var items = this.story.content.body[5].slides
      var array = items.map(function(item) {
          return item.content.slide_data
      })
      // this.expertSection=array
      return array

    },
    getOurClientsData(){
      return this.story.content.body[6]
    },
    getIndustriesData() {
      return this.story.content.body[8]
    },
    getJoinOurTeamData(){
      return this.story.content.body[9]
    },
    getShareWithUsData(){
      return this.story.content.body[10]
    },
    getCTAData(){
      return this.story.content.body[11]
    }

  },
  mounted() {
    this.expertSectionAnimation()
    this.initServiceSldier()
    this.initVertClientSlider()
    this.initHorzClientSlider()
    this.setLongInterval()
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  },
  methods: {
    // getImgUrl(url){
    //   return require('~assets/img/home/home_card/' + url + '.png')
    // },

    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
    expertSectionAnimation() {
      setInterval(() => {
        const childern = this.$refs.rotateAnimation.children
        const child1Class = childern[0].className
        const child2Class = childern[1].className
        const child3Class = childern[2].className
        childern[0].className = child2Class
        childern[1].className = child3Class
        childern[2].className = child1Class
        if (this.count === 2) {
          this.count = 0
        } else {
          this.count = this.count + 1
        }
      }, 2500)
    },
    initServiceSldier() {
      this.serviceSlider = new KeenSlider(this.$refs.serviceSlider, {
        slidesPerView: 3,
        spacing: 50,
        loop: true,
        duration: 1000,
        centered: true,
        slideChanged: (data) => {
          this.relativeServiceSlide = data.details().relativeSlide
        },
        breakpoints: {
          '(min-width: 320px) and (max-width: 479px)': {
            slidesPerView: 1,
            spacing: 0,
          },
          '(min-width: 768px) and (max-width: 1024px)': {
            slidesPerView: 2,
            spacing: 20,
          },
        },
      })
    },
    initVertClientSlider() {
      this.vertClientSlider = new KeenSlider(this.$refs.vertClientSlider, {
        slidesPerView: 1,
        centered: true,
        vertical: true,
        loop: true,
        spacing: 10,
        controls: false,
        duration: 1500,
        slideChanged: (data) => {
          this.relativeClientSlide = data.details().relativeSlide
        },
      })
    },
    initHorzClientSlider() {
      this.horzClientSlider = new KeenSlider(this.$refs.horzClientSlider, {
        slidesPerView: 5,
        loop: true,
        centered: true,
        controls: false,
        duration: 1500,
        slideChanged: (data) => {
          this.relativeClientSlide = data.details().relativeSlide
        },
        breakpoints: {
          '(min-width: 320px) and (max-width: 479px)': {
            slidesPerView: 1,
          },
          '(min-width: 768px) and (max-width: 1024px)': {
            slidesPerView: 4,
          },
        },
      })
    },

    currentClient(data) {
      this.curClientIndex = data.currentPage
    },
    gotoService(slug) {
      this.$router.push({
        path: '/services/'+slug,
      })
    },
    resetInterval() {
      clearInterval(this.interval)
    },
    setLongInterval() {
      this.interval = setInterval(() => {
        if (!this.pause) {
          this.horzClientSlider.next()
          this.vertClientSlider.next()
        }
      }, 5000)
    },
  },
}
</script>

<style scoped>
.s-card {
  border: 2px solid black;
  @apply rounded-xl;
}
.s-card-active {
  border: 1px solid white;
  @apply bg-opacity-30 bg-gradient-to-t via-transparent from-black rounded-xl;
}

.center-arrow {
  top: 50%;
}
@screen md {
  .center-arrow {
    top: 40%;
  }
}
</style>
