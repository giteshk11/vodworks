<template>
  <div>

    <!------------------------------Hero section start---------------------------->
    <section class="bgColor-normal-grey">

      <div class="hero">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-0 md:gap-8">
          <div class="py-8 lg:py-4 order-2 lg:order-1 content">
            <h1 class="capitalize"> Vodworks - <span class="inline-block lg:block"> Solving your technology puzzles</span>
            </h1>
            <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big">
              We are a global provider of end-to-end software development services. We work closely with our clients to
              create innovative custom software products and build successful engineering teams.
            </p>
            <NuxtLink to="/" class="btn-primary btn-lg inline-block">
              Discuss your project
            </NuxtLink>
          </div>
          <div class="order-1 lg:order-2">
            <img class="w-full" src="~/assets/img/hero-img.jpg" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------->


    <!-------------------------------Statistics section-------------------------------->
    <section class="lg:py-8 py-6 bgColor-tertiary-black">
      <div class="stats-wrapper mx-auto max-w-4/5 container color-white">
        <div class="stats">
          <template v-for="(card, i) in $store.state.home.statistics.list">

            <div :key="card.id" class="stats-card relative" :class="i == 3 ? 'last-item' : ''">
              <!-- <img :src="resolveImage('/img/icons/'+card.icon)" :alt="card.alt" /> -->
              <img class="hvr-top" :src="`${require('~/assets/img/icons/' + card.icon)}`" :alt="card.alt" />

              <div>
                <h3>{{ card.count }}</h3>
                <p class="color-white text-regular">{{ card.title }}</p>
              </div>
            </div>
            <img :key="i" class="v-line-border" :class="i == 3 ? 'hidden' : ''" src="~assets/img/v-line.svg" alt="line-image" />
          </template>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!----------------------------------Services Listing---------------------------------->
    <section v-if="getServicesData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 v-in-viewport>{{ getServicesData.title }} <span class="bgFill"><span class="textClip">{{
            getServicesData.animated_word }}</span></span></h2>
          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-1/2">
            {{ getServicesData.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4 mt-8 lg:mt-16">
          <template v-for="(card, i) in getServicesData.services">
            <ServiceCard :key="i" :data="card" />
          </template>
        </div>

      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!-------------------------Empower your business today------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container color-white">

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-4 text-center md:text-left">
          <div class="">
            <h2 class="heading-1 md:w-4/5"> {{ $store.state.home.benefits.title }}</h2>
            <NuxtLink to="/" class="btn-primary btn-lg mt-16 hidden lg:inline-block invisible md:visible">
              Get in touch with us
            </NuxtLink>
          </div>
          <div class="empowerment">
            <div v-for="(benefit, i) in $store.state.home.benefits.list" :key="i" class="my-8">
              <p v-in-viewport class="color-white"> <span class="bgFill"><span
                    class="textClip color-white font-semibold">{{ benefit.intial_title }}</span></span> {{
                      benefit.remaning_title }}</p>
            </div>
            <NuxtLink to="/" class="btn-primary btn-lg mt-8 lg:mt-16 inline-block lg:hidden visible lg:invisible">
              Get in touch with us
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!-- Custom Software for Your Business-->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 v-in-viewport>Custom Software for Your <span class="bgFill"><span class="textClip">Business</span></span>
          </h2>
          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
            {{ $store.state.home.custom_software_for_your_business.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4 mt-8 lg:mt-16">
          <template v-for="(card, i) in $store.state.home.custom_software_for_your_business.list">
            <div :key="i" class="default-card card-utilities hvr-effect business-card">
              <img class="hvr-top" :src="`${require('~/assets/img/icons/' + card.icon)}`" :alt="card.alt" />
              <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h3>
              <p class="text-card">{{ card.description }}</p>
              <ul class="mt-4 md:mt-8 flex-grow-1 text-card">
                <template v-for="(item, index) in card.market_prospects">
                  <li :key="index">{{ item.title }} </li>
                </template>
              </ul>
              <NuxtLink to="/" class="btn-text mt-8 inline-block">
                Read More
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!--------------------------------Our Success Stories---------------------------------->
    <section v-if="getCaseStudiesData" class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2>{{ getCaseStudiesData.title }}</h2>
        </div>
        <CaseStudiesContainer :data="getCaseStudiesData" />
        <div class="text-center">
          <NuxtLink to="/" class="btn-primary btn-lg mt-16 inline-block ">
            show all cases
          </NuxtLink>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!-- What Our Clients Say -->
    <section v-if="getTestimonialsData" class="lg:py-32 py-14 bgColor-normal-grey">

      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 v-in-viewport>{{ getTestimonialsData.title }} <span class="bgFill"><span class="textClip">{{
            getTestimonialsData.animated_word }}</span></span></h2>
        </div>
      </div>
      <TestimonialsConatiner :data="getTestimonialsData" />
    </section>
    <!----------------------------------------------------------------------------------->


    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container color-white">

        <div class="text-center">
          <h2>{{ $store.state.home.why_choose_vodworks.title }}</h2>
        </div>


        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-8 mt-8 lg:mt-16">


          <template v-for="(card, i) in $store.state.home.why_choose_vodworks.list">
            <div :key="i" class="my-4 lg:my-4 text-center md:text-left">
              <h3 v-in-viewport class="mb-4 inline-block capitalize"> <span class="bgFill"><span
                    class="textClip color-white">{{ card.title }}</span></span> </h3>
              <p class="color-white text-regular">{{ card.description }}</p>
            </div>
          </template>

        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!-- Meet Our Team -->
    <section v-if="getTeamsData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 v-in-viewport>Meet Our <span class="bgFill"><span class="textClip">Team</span></span></h2>

          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
            Meet our dynamic leadership team, a group of tech industry veterans with extensive experience across
            industries and regions. Their combined expertise drives innovation and passion at the heart of our company.
          </p>
        </div>

        <!-- card list -->
        <div class="mx-auto max-w-7/10">
          <div class="mx-auto">
            <div class="mt-8 lg:mt-16">
              <client-only>
                <VueSlickCarousel class="our-team-slider" v-bind="$store.state.sliders_configurations.our_team">

                  <template v-for="(card, i) in getTeamsData.teams">
                    <TeamSlidingCard :key="i" :data="card" />
                  </template>

                </VueSlickCarousel>
              </client-only>
            </div>
          </div>
          <div class="text-center">
            <NuxtLink to="/" class="btn-primary btn-lg mt-16 inline-block ">
              more about us
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!----------------------------- Get in Touch with us--------------------------------->
    <section class="py-0 bgColor-normal-grey">
      <GetInTouchWithUs />
    </section>
    <!----------------------------------------------------------------------------------->

  </div>
</template>

<script>

// import KeenSlider from 'keen-slider'
// import 'keen-slider/keen-slider.min.css'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


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
      resolve_relations: 'case-studies-container.case_studies,case-studies.category,services-container.services,testimonial-container.testimonials_list,teams-container.teams',
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
  components: {
    VueSlickCarousel,
  },
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
      story: { content: {} },
    }
  },

  head() {
    return {
      title: 'Software Development Company | Vodworks',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development, it company, software development company, software development companies, development company, software development service, software development services, software developer company, software development firm, product development services, software development services company, database management company'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Software Development Company | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more',
        },

      ],
    }
  },
  computed: {
    getServicesData() {
      return this.story.content.body[0]
    },
    getCaseStudiesData() {
      return this.story.content.body[1]
    },
    getTestimonialsData() {
      return this.story.content.body[2]
    },
    getTeamsData() {
      return this.story.content.body[3]
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
    });
  },

  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
    resolveImage(path) {
      return `${require('~/assets' + path)}`
    },
    gotoService(slug) {
      this.$router.push({
        path: '/services/' + slug,
      })
    },

  },
}
</script>