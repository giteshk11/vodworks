<template>
  <div>

    <IndustriesHeroSection :industries="getIndustriesData" :page="getPageDetails" :button="{
      btnURL: true
    }" />


    <!----------------------------- Tools and Technologies we use ------------------------------->
    <ToolsAndTechs :data="{
      isDarkMode: false
    }" />
    <!------------------------------------------------------------------------------------------>


    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <BenefitsOfChoosingVodworks :data="{
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Consult with our tech experts`,
      btnText: 'Get in touch with us',
      btnURL: '/contact',
      imgSrc: 'team-members.png',
      col_1: 'md:col-span-6',
      col_2: 'md:col-span-6',

    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!----------------------------- What Our Clients Say ------------------------------------->
    <Testimonials :data="{
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->


    <!--------------------------------Our Success Stories---------------------------------->
    <section v-if="getCaseStudiesData" class="lg:py-32 py-14">
      <div class="mx-auto container">
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
      resolve_relations: 'industries-container.industries,testimonial-container.testimonials_list,case-studies-container.case_studies',
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
      story: { content: {} },
    }
  },

  head() {
    return {
      title: 'Vodworks | Software Development by Industry',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Experience innovation and excellence with Vodworks in the software development industry. Elevate your digital solutions today!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development industry, software development industries, software development financial industry, development of software industry, software development healthcare industry, research and development in software industry, software industry development, software development industry growth'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Vodworks | Software Development by Industry',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Experience innovation and excellence with Vodworks in the software development industry. Elevate your digital solutions today!',
        },

      ],
    }
  },

  computed: {
    getPageDetails() {
      return this.story.content
    },
    getIndustriesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'industries-container';
      })
    },
    getTestimonialsData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'testimonial-container';
      })
    },
    getCaseStudiesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'case-studies-container';
      })
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

  },
}
</script>
