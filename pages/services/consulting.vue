<template>
  <div>


    <!------------------------------------- Services/Consulting Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Software Consulting Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">Our software consulting services focus on helping
            clients make well-informed technology investments. Leveraging the expertise of our experts, we ensure your
            software project is customised to your unique needs, minimising risk and maximising return the return on your
            technology investments.
          </p>
          <NuxtLink to="/contact" class="btn-primary btn-lg inline-block">
            Consult our experts
          </NuxtLink>
        </div>

        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">
            <template v-for="(card, i) in getConsultingServiceData.service_consulting_details">
              <ServiceCtaCard :key="i" :data="card" />
            </template>
          </div>
        </div>

      </div>
    </section>
    <!------------------------------------------------------------------------------------------>



    <!---------------------------- Services/Consulting details Cards (larg Cards) ------------------------>
    <section v-if="getConsultingServiceData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">

          <h2 v-in-viewport>{{ getConsultingServiceData.title }} <span class="bgFill"><span class="textClip">{{ getConsultingServiceData.animated_word }}</span></span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">

            <template v-for="(card, i) in getConsultingServiceData.service_consulting_details">
              <ServiceLargeCard :key="i" :data="card"  :button="{ text: `Let's Talk`, btnURL: 'isStatic' }" />
            </template>

          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>



    <!--------------------------------- Our Consulting Approach --------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2 class="color-white">Our Consulting Approach</h2>
          <p class="mt-4 lg:mt-8 text-big color-white">Combining commercial and technical expertise, we have a unique
            approach to technical consulting. We prioritize your budget, time, and tech needs, delivering proven tailored
            plans.</p>
        </div>

      </div>
    </section>

    <!------------------------------------------------------------------------------------------>



    <!--------------------------------- Featured CTA (Light version) ----------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div
          class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 items-center gap-4 md:gap-16 text-center md:text-left">

          <div class="md:col-span-7">
            <h2 class="heading-1 col-start-1 col-end-3  md:w-4/5">Discuss your project with us!</h2>
          </div>
          <div class="md:col-span-5 text-center">
            <NuxtLink to="/contact" class="btn-primary inline-block btn-lg mt-8 md:mt-0">
              Book a consultation
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>



    <!--------------------------------- Meet Our Consulting Experts --------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2 class="color-white">Meet Our Consulting Experts</h2>
        </div>


        <!-- card list -->
        <div class="mx-auto max-w-7/10">
          
          <div class="mx-auto">
            <div class="mt-8 lg:mt-16">
              <client-only>
                <VueSlickCarousel class="our-team-slider" v-bind="$store.state.sliders_configurations.our_team">

                  <template v-for="(card, i) in getConsultingExpertsData.teams ">
                    <TeamSlidingCard :key="i" :data="card" />
                  </template>

                </VueSlickCarousel>
              </client-only>
            </div>
          </div>
          
          <div class="text-center">
          <NuxtLink to="/contact" class="btn-primary btn-lg  mt-16 inline-block">
            Book a consultation
          </NuxtLink>
        </div>
        </div>

      
      </div>
    </section>

    <!------------------------------------------------------------------------------------------>


    <!------------------------------- Get in Touch with us-------------------------------------->
    <section class="lg:py-32 pt-14 lg:pb-0 bgColor-normal-grey">
      <GetInTouchWithUs />
    </section>
    <!------------------------------------------------------------------------------------------>



  </div>
</template>



<script>

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
      resolve_relations: 'services-container.services,service_consulting_details_container.service_consulting_details,teams-container.teams',
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
      title: 'Consulting',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ''
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: '',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "",
        },
      ],
    }
  },

  computed: {
    getConsultingServiceData() {
      return this.story.content.Services_Detailed_Content[0]
    },
    getConsultingExpertsData() {
      return this.story.content.Services_Detailed_Content[1]
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
