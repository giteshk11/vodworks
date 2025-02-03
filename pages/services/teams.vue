<template>
  <div>
    <!------------------------------------- Services/Teams Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Vodworks Software Development Teams</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">With a proven track record in assembling
            high-performing remote teams, our expertise lies in seamlessly integrating remote development teams worldwide,
            optimising processes for successful outcomes.
          </p>
          <NuxtLink to="/services/" class="btn-primary btn-lg inline-block">
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
      <div class="mx-auto container">
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
    <section class="lg:py-32 py-14 overflow-hidden bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <div class="text-center">
          <h2>{{ teams_building_approach.title }}</h2>
        </div>

        <div class="mt-4 lg:mt-12">
          <div class="teams_approach_timeline">
            <div class="approach_wrapper">
              <template v-for="(step, i) in teams_building_approach.steps">
                <div :key="i" class="approach_step">
                  <div class="inner-content">
                    <span>{{ step.count }}</span>
                    <div class="hvr-top">
                      <h6 class="color-pink">{{ step.title }}</h6>
                      <p class="text-xsmall mt-2">{{ step.description }}</p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Build your development team!`,
      btnText: 'Get in touch with us',
      btnURL: '/contact/',
      imgSrc: 'our-experts.png',
      col_1: 'md:col-span-6',
      col_2: 'md:col-span-6',

    }" />
    <!---------------------------------------------------------------------------------------------------->



    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <FeaturedCards3sInRow :data="{
      content: why_choose_vodworks,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------->



    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Teams',
      animated_word: 'Success Stories',
      description: '',
      getCasesData,
      isDarkMode: false,
    }" />
    <!------------------------------------------------------------------------------------->


    <!------------------------------------ About Vodworks ---------------------------------------->
    <AboutVodworks :data="{
      isDarkMode: true
    }" />
    <!---------------------------------------------------------------------------------------------->


    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!------------------------------------------------------------------------------------------>

  </div>
</template>


<script>

export default {

  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allCasesRes] = await Promise.all([

      context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'service_teams_details_container.service_teams_details'
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'cases/',
        resolve_relations: 'case-studies-container.case_studies',
      }),

    ])
    return {
      pageData: pageDataRes.data,
      allCases: allCasesRes.data,
    }

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
      },

      teams_building_approach: {
        title: "Our Unique Approach to Building Teams",
        steps: [
          {
            count: "01",
            title: "Understand your needs",
            description: "First thing is first, we dive into what you want and need"
          },
          {
            count: "02",
            title: "Identify skill gap",
            description: "We figure out what skills are needed to tackle the project. If you have an existing team, we identify the gaps"
          },
          {
            count: "03",
            title: "Select the right team",
            description: "We gather the right people for the project, based on skills as well as their personalities to ensure the team vibes well with yours"
          },
          {
            count: "04",
            title: "Onboard and kickoff",
            description: "Together, we make sure everyone is onboarded and all stakeholders are aligned on expectations, goals, and timelines."
          },
          {
            count: "05",
            title: "Communicate",
            description: "We keep communication lines wide open. We have regular, transparent updates to discuss progress, challenges, and achievements"
          },
          {
            count: "06",
            title: "Always improve",
            description: "We encourage a culture of continuous improvement and strive to exceed client expectations to build a long-term partnership"
          },
          {
            count: "07",
            title: "Share knowledge",
            description: "We document all key project information, codebase, and processes for knowledge transfer to your team"
          },
          {
            count: "08",
            title: "Happy client, Happy life",
            description: "We regularly ask for feedback and do our best to exceed your expectations"
          },


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
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
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
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.getTeamsServiceData.service_teams_details[0].content.thumbnail.filename}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.getTeamsServiceData.service_teams_details[0].content.thumbnail.filename}`,
        },
      ],
    }
  },


  computed: {
    getTeamsServiceData() {
      return this.pageData.story.content.Services_Detailed_Content.find(function (obj) {
        return obj.component === 'service_teams_details_container';
      })
    },
    getCasesData() {
      return this.allCases
    },
  },
}
</script>