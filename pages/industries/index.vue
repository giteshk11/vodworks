<template>
  <div>
    <div class="py-16 text-center">
      <h1>Industries</h1>
    </div>


    <!----------------------------- Tools and Technologies we use ------------------------------->
    <ToolsAndTechs :data="{
      isDarkMode: false
    }" />
    <!------------------------------------------------------------------------------------------>


    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <BenefitsOfChoosingVodworks />
    <!----------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Consult with our tech experts`,
      btnText: 'Get in touch with us',
      btnURL: '/contact',
      imgSrc: 'team-members.png',
      col_1:'md:col-span-6',
      col_2:'md:col-span-6',
      
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!----------------------------- What Our Clients Say ------------------------------------->
    <Testimonials :data="{
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->


    <div class="py-16 text-center">
      <h1>Our Success Stories</h1>
    </div>


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
      resolve_relations: 'industries-served.industries,testimonial-container.testimonials_list,case-studies-container.case_studies',
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
      title: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '',
        },
      ],
    }
  },
  computed: {

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
