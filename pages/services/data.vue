<template>
  <div>

    <!------------------------------------- Data Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-4/5">
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
      <div class="mx-auto container">
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



    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Success Stories',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->


    <!------------------------------------------------------------------------------------------>
    <section v-if="why_use_our_data_services" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
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
    <IndustriesListingSection :data='{
      getIndustriesData
    }' />
    <!---------------------------------------------------------------------------------------------->


    <!------------------------------------------------------------------------------------------>
    <Web3ExpertsSection :data="{
      title: 'Meet Our',
      animated_word: 'Data Expert',
      description: '',
      getDataExpertsData,
      isDarkMode: false
    }" />

    <!------------------------------------------------------------------------------------------>


    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title:'Get in Touch with us',
      isDarkSectionAtTop: false
    }" />
    <!------------------------------------------------------------------------------------------>

  </div>
</template>


<script>

export default {



  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allCasesRes, dataTeamRes] = await Promise.all([

      context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'service_data_details_container.service_data_details,industries-container.industries'
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'cases/',
        resolve_relations: 'case-studies-container.case_studies',
      }),
      // Core:       24d738a4-ad30-45f7-9ec6-3584eb0ddbe0
      // Data:       87a4dfac-ca7d-4605-92d1-b95a7bee0a85
      // Consulting: 6e27734f-2f09-4108-9292-b27bd8a17870
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'teams/',
        resolve_relations: 'teams-container.teams',
        'filter_query[teams_categories][exists]': '87a4dfac-ca7d-4605-92d1-b95a7bee0a85'
      }),

    ])
    return {
      pageData: pageDataRes.data,
      allCases: allCasesRes.data,
      dataTeam: dataTeamRes.data,
    }

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
      title: 'Vodworks | Data data & Business Intelligence Services',
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
      return this.pageData.story.content.Services_Detailed_Content.find(function (obj) {
        return obj.component === 'service_data_details_container';
      })
    },
    getCasesData() {
      return this.allCases
    },
    getIndustriesData() {
      return this.pageData.story.content.Services_Detailed_Content.find(function (obj) {
        return obj.component === 'industries-container';
      })
    },
    getDataExpertsData() {
      return this.dataTeam
    },


  },
}
</script>
