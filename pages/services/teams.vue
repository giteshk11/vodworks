<template>
  <div>

    <!------------------------------------- Services/Teams Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Vodworks Software Development Teams</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">With a proven track record in assembling
            high-performing remote teams, our expertise lies in seamlessly integrating remote development teams worldwide,
            optimising processes for successful outcomes.
          </p>
          <NuxtLink to="/services" class="btn-primary btn-lg inline-block">
            Explore our services
          </NuxtLink>
        </div>

        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">
            <template v-for="(card, i) in getTeamsServiceData.service_teams_details">
              <ServiceCtaCard :key="i" :data="card" />
            </template>
          </div>
        </div>

      </div>
    </section>
    <!------------------------------------------------------------------------------------------>



    <!---------------------------- Services/Teams details Cards (larg Cards) ------------------------>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">

          <h2 v-in-viewport>{{ getTeamsServiceData.title }} <span class="bgFill"><span class="textClip">{{
            getTeamsServiceData.animated_word }}</span></span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">
            <template v-for="(card, i) in getTeamsServiceData.service_teams_details">
              <ServiceLargeCard :key="i" :data="card" :button="{ text: `Let's discuss`, btnURL: 'isStatic' }" />
            </template>
          </div>

        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>


    <!----------------------------------------------------------------------------------->
    <section class="lg:py-32 py-14 overflow-hidden	vw-map  bgColor-tertiary-black color-white">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>Our Unique Approach to Building Teams</h2>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


   
    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTAv1 :data="{
      title: `Build your development team!`,
      btnText: 'Get in touch with us',
      btnURL: '/contact',
      imgSrc: 'team-members.png'
    }" />
    <!---------------------------------------------------------------------------------------------------->



    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <FeaturedCards3sInRow :data="why_choose_vodworks" />
    <!----------------------------------------------------------------------------------->

    
   <!------------------------------------------------------------------------------------------>
   <section v-if="getTeamsCaseStudiesData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 v-in-viewport>{{ getTeamsCaseStudiesData.title }} <span class="bgFill"><span class="textClip">{{
            getTeamsCaseStudiesData.animated_word }}</span></span></h2>
        </div>

        <CaseStudiesContainer :data="getTeamsCaseStudiesData" />

        <div class="text-center">
          <NuxtLink to="/contact" class="btn-primary btn-lg mt-16 inline-block ">
            show all cases
          </NuxtLink>
        </div>

        
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>



    <!--------------------------- About Vodworks ---------------------------------------->
    <section class="lg:py-32 py-14 overflow-hidden	vw-map  bgColor-tertiary-black color-white">
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
    <section class="lg:py-32 pt-14 lg:pb-0 bgColor-normal-grey">
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
      resolve_relations: 'services-container.services,service_teams_details_container.service_teams_details,case-studies-container.case_studies',
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

      why_choose_vodworks: {
        title: "Why Choose Vodworks?",
        list: [
          {
            title: "Diverse technical expertise",
            description: "With more than 150 highly-skiled developers and a global network of experts, we guarantee the right technical talent for your business needs",
          },
          {
            title: "Global presence",
            description: "We cater to diverse technical and budget requirements, and serve clients spanning various time zones",
          },
          {
            title: "Scalable teams",
            description: "We offer an agile and flexible working approach, supporting you to quickly scale your projects up or down",
          },
          {
            title: "Proactive problem solving",
            description: "As part of our DNA, all our team members are active problem-solvers, helping you to address issues, mitigate risks, and find creative solutions to your hardest challenges",
          },
          {
            title: "Fit with your culture",
            description: "Our team is adaptable and collaborative, ensuring we quickly integrate with your team and align with your culture and values",
          },
          {
            title: "Client satisfaction",
            description: "We always put your objectives first and have a strong emphasis on client satisfaction with focus on long-term partnerships",
          }
        ]
      }


    }
  },

  head() {
    return {
      title: 'Vodworks Software Development Team: Next-gen Solutions!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Unlock your business's true potential with Vodworks Software Development Team. Elevate projects and innovation with expert support.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'development team, dev team, software development team, dedicated development team, dedicated software development team, it staff augmentation, dedicated development teams, developer team, development teams, dev teams, dedicated dev teams, dedicated dev team, dev team software'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Vodworks Software Development Team: Next-gen Solutions!',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Unlock your business's true potential with Vodworks Software Development Team. Elevate projects and innovation with expert support.",
        },
      ],
    }
  },

  computed: {
    getTeamsServiceData() {
      return this.story.content.Services_Detailed_Content[0]
    },
    getTeamsCaseStudiesData() {
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