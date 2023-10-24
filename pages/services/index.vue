<template>
  <div>

    <!------------------------------------- Services Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Vodworks Software Development Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">From exploration and consultation to development of
            scalable software solutions, we provide comprehensive technical services that align with your unique business
            needs.
          </p>
          <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
            Discuss your project
          </div>
        </div>

        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">
            <template v-for="(card, i) in getServicesData.services">
              <ServiceCtaCard :key="i" :data="card" />
            </template>

          </div>
        </div>
      </div>
    </section>

    <!------------------------------------------------------------------------------------------>



    <!---------------------------- Services details Cards (larg Cards) ------------------------>
    <section v-if="getServicesData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">

          <h2 v-in-viewport>{{ getServicesData.title }} <span class="bgFill"><span class="textClip">{{
            getServicesData.animated_word }}</span></span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">
            <template v-for="(card, i) in getServicesData.services">
              <ServiceLargeCard :key="i" :data="card" :button="{ text: '', btnURL: 'isDynamic' }" />
            </template>


          </div>
        </div>
      </div>
    </section>

    <!------------------------------------------------------------------------------------------>


    <!----------------------------- Tools and Technologies we use ------------------------------->

    <ToolsAndTechs :data="{
      isDarkMode: true
    }" />
    <!------------------------------------------------------------------------------------------>



    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTAv1 :data="{
      title: `Discuss your project's future`,
      btnText: 'Get in touch with us',
      btnURL: '/contact',
      imgSrc: 'team-members.png'
    }" />
    <!---------------------------------------------------------------------------------------------------->



    <!--------------------------------Our Success Stories---------------------------------------->
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

    <!------------------------------------------------------------------------------------------>




    <!----------------------------- What Our Clients Say ------------------------------------->
    <Testimonials :data="{
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------------->




    <!---------------------------------  Meet our Vodworks team --------------------------------->

    <OverviewAboutVodworksTeam />

    <!------------------------------------------------------------------------------------------>



    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: true
    }" />
    <!----------------------------------------------------------------------------------->

  </div>
</template>

<script>
import FeaturedCTAv1 from '~/components/Sections/FeaturedCTAv1.vue'


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
      resolve_relations: 'services-container.services,case-studies-container.case_studies,case-studies.category,testimonial-container.testimonials_list',
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
    FeaturedCTAv1
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
      title: 'Vodworks | Explore Software Development Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Empower your business with Vodworks' Software Development Services. We create tailored solutions for web, mobile, and custom software. Explore now!",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development service, custom software development services, software solution services, software development consulting services, software product development services, Software Services We Provide, software development services company, enterprise software development services, outsource software development services, services software development, software development company services, agile software development services'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Vodworks | Explore Software Development Services',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Empower your business with Vodworks' Software Development Services. We create tailored solutions for web, mobile, and custom software. Explore now!",
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
  },

  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },

    gotoService(slug) {
      this.$router.push({
        path: '/services/' + slug,
      })
    },
  },
}
</script>
