<template>
  <div>

    <!------------------------------------- Data Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Data Management Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">While most companies collect data, very few take
            action on that data. Our team of dedicated data specialists is here to ensure your data becomes an asset that
            actively benefits your operations. We collaborate within your current analytics framework or provide
            recommendations for tailored tools, guaranteeing consistent and dependable data delivery for seamless
            consumption every time.
          </p>

          <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
            Talk with our experts
          </div>

        </div>

        <div class="text-center mx-auto md:max-w-3/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-2 md:gap-4 lg:gap-6">
            <template v-for="(card, i) in getDataServiceData.service_data_details">
              <ServiceCtaCard :key="i" :data="card" />
            </template>
          </div>
        </div>


      </div>
    </section>
    <!------------------------------------------------------------------------------------------>



    <!---------------------------- Data details Cards (larg Cards) ------------------------>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">

          <h2 v-in-viewport>{{ getDataServiceData.title }} <span class="bgFill"><span class="textClip">{{
            getDataServiceData.animated_word }}</span></span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">
            <template v-for="(card, i) in getDataServiceData.service_data_details">
              <ServiceLargeCard :key="i" :data="card" :button="{ text: `Get in touch`, btnURL: 'isStatic' }" />
            </template>

          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>



    <!--------------------------------Our Success Stories---------------------------------------->
    <section v-if="getDataCaseStudiesData" class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2>{{ getDataCaseStudiesData.title }}</h2>
        </div>

        <CaseStudiesContainer :data="getDataCaseStudiesData" />

        <div class="text-center">
          <NuxtLink to="/" class="btn-primary btn-lg mt-16 inline-block ">
            show all cases
          </NuxtLink>
        </div>
      </div>
    </section>

    <!------------------------------------------------------------------------------------------>




    <!------------------------------------------------------------------------------------------>
    <section v-if="why_use_our_data_services" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2>{{ why_use_our_data_services.title }}</h2>
        </div>

        <div class="mt-4 lg:mt-12 center-two-ele-in-grid">
          <template v-for="(card, i) in why_use_our_data_services.list">
            <div :key="i" class="my-4 lg:my-4 text-center md:text-left item">
              <h3 v-in-viewport class="mb-4 inline-block capitalize"> <span class="bgFill"><span class="textClip">{{
                card.title }}</span></span> </h3>
              <p class=" text-regular">{{ card.description }}</p>
            </div>
          </template>
        </div>

      </div>
    </section>
    <!------------------------------------------------------------------------------------------>






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
                <h5 class="font-bold lg:max-w-3/5" :class="i == 1 ? 'five_chars' : ''">{{ industry.content.title }}</h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------->


    <!------------------------------------------------------------------------------------------>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto max-w-4/5 container">
        <div class="text-center">
          <h2 v-in-viewport>Meet Our <span class="bgFill"><span class="textClip">Data Experts</span></span></h2>
        </div>

        <div class="mx-auto max-w-full lg:max-w-3/5 mt-4 lg:mt-12">

          <div class="bgColor-white card-utilities hvr-effect">
            <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0">
              
              <div class="md:col-span-5 expert-avatar-wrapper">
                <img src="~/assets/img/data-expert-member.jpg" alt="Data Expert" />
              </div>

              <div class="md:col-span-7 expert-content p-4 lg:px-8 lg:py-8">
                <div class="flex items-center gap-4 justify-between">
                  <div>
                    <h4 class="text-regular font-bold color-primary-black">Abdul Qayyum</h4>
                    <p class="color-secondary-black font-medium text-regular">CEO</p>
                  </div>
                  <a target="_blank" href="#"><img src="~assets/img/icons/Linkedin-icon.svg" alt="Lnkedin-icon" /></a>
                </div>
                <p class="mt-4 lg:mt-8 color-primary-black">Hi, everyone! I’m a UI/UX Designer with 6+ years of experience. I've made a lot of
                  designs for many
                  spheres. I have a strong understanding of base UI/UX design principles and can convert clients' ideas
                  into high-quality beautiful modern design sticking to the latest trends.</p>
              </div>

            </div>


          </div>


        </div>

        <div class="text-center mt-16">
          <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
            Book a consultation
          </div>
        </div>

      </div>
    </section>
    <!------------------------------------------------------------------------------------------>





    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: false
    }" />
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
      resolve_relations: 'services-container.services,service_data_details_container.service_data_details,case-studies-container.case_studies,industries-container.industries',
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

      why_use_our_data_services: {

        title: "Why Use Our Data Services",
        list: [
          {
            title: "Data Security Focused",
            description: "Our top priority is ensuring the security of your data. We employ best-in-class GDPR compliant measures to safeguard your data, both in transit and at rest, providing you with peace of mind and compliance with industry standards",
          },
          {
            title: "Balanced Performance and Affordability",
            description: "We understand the delicate balance between performance and cost. Using our expertise, we optimise data services to deliver superior performance while keeping costs manageable",
          },
          {
            title: "Big Data Expertise",
            description: "With strong knowledge of big data infrastructure and tools such as Snowflake, BigQuery, Redshift, Kafka, Cassandra, and more, we’re well equipped to handle your data needs, regardless of the scale or complexity",
          },
          {
            title: "ETL and ELT Mastery",
            description: "Whether you prefer ETL (Extract, Transform, Load) or ELT (Extract, Load Transform) at the source or destination, on-premises or in the cloud, we have the experience and knowledge to execute seamless data integration processes tailored to your requirements",
          },
          {
            title: "Dedicated Data Experts",
            description: "Our team includes dedicated data scientists and engineers ready to support and collaborate with you. From data analysis to troubleshooting ,we have the talent and expertise to assist you at every stage of your data journey",
          }
        ]
      }
    }
  },

  head() {
    return {
      title: 'Vodworks | Data Engineering & Business Intelligence Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Elevate your business potential through Vodworks' comprehensive Data Engineering & Business Intelligence services, unraveling insights for informed decisions.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'data engineering, data services, data management services, data analytics services, data centre services, data protection services, data analysis services, business intelligence services, data analytic services, data backup services, data consulting services, data consultancy services, data engineering consulting, data engineering services, data science engineering'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Vodworks | Data Engineering & Business Intelligence Services',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Elevate your business potential through Vodworks' comprehensive Data Engineering & Business Intelligence services, unraveling insights for informed decisions.",
        },
      ],
    }
  },

  computed: {
    getDataServiceData() {
      return this.story.content.Services_Detailed_Content[0]
    },

    getDataCaseStudiesData() {
      return this.story.content.Services_Detailed_Content[1]
    },
    getIndustriesData() {
      return this.story.content.Services_Detailed_Content[2]
    },
    getDataExpertsData() {
      return this.story.content.Services_Detailed_Content[3]
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
