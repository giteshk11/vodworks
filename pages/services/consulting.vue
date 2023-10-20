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

          <h2 v-in-viewport>{{ getConsultingServiceData.title }} <span class="bgFill"><span class="textClip">{{
            getConsultingServiceData.animated_word }}</span></span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">

            <template v-for="(card, i) in getConsultingServiceData.service_consulting_details">
              <ServiceLargeCard :key="i" :data="card" :button="{ text: `Let's Talk`, btnURL: 'isStatic' }" />
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
          <h2 class="color-white">{{ consulting_approach.title }}</h2>
          <p class="mt-4 lg:mt-8 text-big color-white">{{ consulting_approach.description }}</p>
        </div>

        <div class="mt-8 lg:mt-16 color-white">
          <div class="consulting_timeline grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4">

            <template v-for="(approach, i) in consulting_approach.approaches">

              <div :key="i" class="approach_wrapper">

                <div class="approach_heading">
                  <img :src="`${require('~/assets/img/icons/' + approach.icon)}`" alt="icon" />
                  <h3 class="mt-0 lg:mt-2 line-clamp-1">{{ approach.title }}</h3>
                </div>

                <div class="steps_wrapper">
                  <template v-for="(step, index) in approach.steps">
                    <div :key="index" class="approach_step hvr-top">
                      <span>{{ step.count }}</span>
                      <h6 class="color-pink">{{ step.title }}</h6>
                      <p class="text-xsmall mt-2">{{ step.description }}</p>
                    </div>
                  </template>
                </div>

              </div>
            </template>

          </div>
        </div>

      </div>
    </section>

    <!------------------------------------------------------------------------------------------>



    <!---------------------------------General CTA (Light) --------------------------->
    <GeneralCTA :data="{
      title: 'Discuss your project with us!',
      btnText: 'Book a consultation',
      btnURL: '/contact',
      darkMode: false
    }" />
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

      consulting_approach: {
        title: "Our Consulting Approach",
        description: "Combining commercial and technical expertise, we have a unique approach to technical consulting. We prioritize your budget, time, and tech needs, delivering proven tailored plans.",

        approaches: [

          {
            icon: "cog.svg",
            title: "Discovery",
            steps: [
              {
                count: "01",
                title: "Sharing Ideas",
                description: "It all starts with a conversation to understand your vision, goals, and objectives.  We share ideas, discuss issues, and identify your needs"
              },
              {
                count: "02",
                title: "Deeper Understanding",
                description: "We dig deeper, asking more questions about your business, culture, and strategy. We understand your timelines, budgets, resources, and much more"
              },
              {
                count: "03",
                title: "Data Gathering",
                description: "We gather more data as required to fully understand the situation, problem, or task at hand"
              }
            ]
          },
          {
            icon: "refresh-ccw-dot.svg",
            title: "Solution Shaping & Testing",
            steps: [
              {
                count: "04",
                title: "Analyse",
                description: "Using data and insights gathered, we thoroughly assess the project by looking at the current situation, identifying key issues and opportunities"
              },
              {
                count: "05",
                title: "Solution Shaping",
                description: "We work closely with you to develop and refine potential solutions that address the identified issues and opportunities"
              },
              {
                count: "06",
                title: "Testing & Validation",
                description: "We put the proposed solution to the test using prototype or PoC to ensure it functions as intended"
              },
              {
                count: "07",
                title: "Feedback & Review",
                description: "We gather feedback and data from the previous step to assess effectiveness and feasibility, making necessary adjustments before moving to implementation"
              }
            ]
          },
          {
            icon: "pencil-ruler.svg",
            title: "Implementation",
            steps: [
              {
                count: "08",
                title: "Development",
                description: "We develop the recommended solution by executing a detailed plan. We continue to monitor and report progress, working closely with you "
              },
              {
                count: "09",
                title: "Deployment",
                description: "We work closely with you to roll out the solution to a wider audience, ensuring all components are functioning as intended"
              },
              {
                count: "10",
                title: "Recalibration",
                description: "Based on feedback and data, we revisit and fine-tune the implemented solution as necessary to help sustain long-term success"
              }
            ]
          }

        ]
      }
    }
  },

  head() {
    return {
      title: 'IT Consulting | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Empower your business with Vodworks' expert Software Consulting Services. Trust our consultants to drive growth and innovation.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'it consulting, technology consulting, it consulting services, software consultant, tech consulting, it consulting service, software consulting, it security consulting, software development consulting, software development consultant, it support consulting, software engineering consulting, consulting software, software consulting services, software testing consulting'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'IT Consulting | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Empower your business with Vodworks' expert Software Consulting Services. Trust our consultants to drive growth and innovation.",
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
