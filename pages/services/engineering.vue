<template>
  <div>


    <!------------------------------------- Services/Engineering Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Software Engineering Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">We offer customised end-to-end software engineering
            services. Whether you're starting a new project or seeking assistance with an existing one, our global team
            of proactive developers brings the expertise required to fulfill your needs.
          </p>
          <NuxtLink to="/contact" class="btn-primary btn-lg inline-block">
            Discuss your project
          </NuxtLink>
        </div>

        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">
            <template v-for="(card, i) in getEngineeringServiceData.service_engineering_details">
              <ServiceCtaCard :key="i" :data="card" />
            </template>
          </div>
        </div>


      </div>
    </section>
    <!------------------------------------------------------------------------------------------>



    <!---------------------------- Services/Engineering details Cards (larg Cards) ------------------------>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">

          <h2 v-in-viewport>{{ getEngineeringServiceData.title }} <span class="bgFill"><span class="textClip">{{
            getEngineeringServiceData.animated_word }}</span></span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">
            <template v-for="(card, i) in getEngineeringServiceData.service_engineering_details">
              <ServiceLargeCard :key="i" :data="card" :button="{ text: `Start a conversation`, btnURL: 'isStatic' }" />
            </template>
          </div>

        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>


    <!----------------------------General CTA (Dark)---------------------------------------->
    <GeneralCTA :data="{
      title: 'Bring your ideas and innovations to life!',
      btnText: 'Get in touch with us',
      btnURL: '/contact',
      darkMode: true
    }" />
    <!------------------------------------------------------------------------------------------>



    <!-------------------------------- Our Engineering Success Stories ---------------------------------->

    <section v-if="getEngineeringCaseStudiesData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 v-in-viewport>{{ getEngineeringCaseStudiesData.title }} <span class="bgFill"><span class="textClip">{{
            getEngineeringCaseStudiesData.animated_word }}</span></span></h2>
        </div>

        <CaseStudiesContainer :data="getEngineeringCaseStudiesData" />

        <div class="text-center">
          <NuxtLink to="/contact" class="btn-primary btn-lg mt-16 inline-block ">
            show all cases
          </NuxtLink>
        </div>

        
      </div>
    </section>
    <!----------------------------------------------------------------------------------->



    <!----------------------------We Work Across Industries---------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5">
          <h2 class="color-white">{{ getIndustriesData.title }}</h2>
          <p class="mt-4 lg:mt-8 text-big color-white">{{ getIndustriesData.description }}</p>
        </div>

        <div class="mt-8 lg:mt-16">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-4">
            <template v-for="(industry, i) in getIndustriesData.industries">
              <div :key="i" class="industrues-card flex items-center text-left gap-4 bgColor-white p-4 ">
                <img :src="industry.content.icon.filename" :alt="industry.content.alt" />
                <h5 class="font-bold" :class="i == 1 ? 'five_chars' : ''">{{ industry.content.title }}</h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------->



    <!--------------------------- About Vodworks ---------------------------------------->
    <section class="lg:py-32 py-14 overflow-hidden	vw-map  bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>About Vodworks</h2>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16 relative">

          <div class="text-center lg:text-left position-relative z-10	">
            <p class="mb-4 lg:mb-6 text-big">Vodworks is a global provider of end-to-end software development
              services. We
              help clients across the world use modern technology to transform challenges into lasting business value,
              operational efficiency, and revenue growth. With a team of over 200 experts in multiple countries,
              Vodworks
              offers tech consulting, engineering, data, and team augmentation services.
            </p>
            <p class="text-big">
              Since our inception in 2012, we have worked with numerous industry leaders and innovative startups,
              creating
              value across diverse sectors like media, telecommunications, gaming, fintech, and beyond. As a company,
              we
              are driven by a passion for advancing society through technology. We therefore also invest heavily in
              research and development and collaborate closely with entrepreneurs and startups to build innovative
              tech
              solutions to life.
            </p>
          </div>

          <div>
            <img class="locations-map" src="~/assets/img/map.png" alt="" />
          </div>

        </div>

      </div>
    </section>
    <!---------------------------------------------------------------------------------------------->


    <!------------------------------- Get in Touch with us-------------------------------------->
    <section class="lg:pb-0 bgColor-normal-grey">
      <GetInTouchWithUs />
    </section>
    <!------------------------------------------------------------------------------------------>


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
      resolve_relations: 'services-container.services,service_engineering_details_container.service_engineering_details,case-studies-container.case_studies,industries-container.industries',
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
      title: 'Vodworks | Software Engineering Services & Solutions',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Empowering Innovation through Software Engineering Services with Vodworks. From concept to product, we drive digital evolution. Partner with us today!",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'engineering, software engineering, data engineering, engineering companies, product design engineering, engineering services, product engineering, quality engineering, engineering consulting services, data engineering services, building engineering services, product engineering services, quality engineering services'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Vodworks | Software Engineering Services & Solutions',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Empowering Innovation through Software Engineering Services with Vodworks. From concept to product, we drive digital evolution. Partner with us today!",
        },
      ],
    }
  },

  computed: {
    getEngineeringServiceData() {
      return this.story.content.Services_Detailed_Content[0]
    },

    getEngineeringCaseStudiesData() {
      return this.story.content.Services_Detailed_Content[1]
    },
    getIndustriesData() {
      return this.story.content.Services_Detailed_Content[2]
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
