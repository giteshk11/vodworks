<template>
  <div>

    <!------------------------------------- Services/Engineering Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Software Engineering Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">We offer customised end-to-end software engineering
            services. Whether you're starting a new project or seeking assistance with an existing one, our global team
            of proactive developers brings the expertise required to fulfill your needs.
          </p>

          <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
            Discuss your project
          </div>

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
      <div class="mx-auto container">
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
      isNavigatingToContactPage: true,
      darkMode: true,
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-5',
    }" />
    <!------------------------------------------------------------------------------------------>


    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our engineering ',
      animated_word: 'Success Stories',
      description: '',
      getCasesData,
      isDarkMode: false,
    }" />
    <!------------------------------------------------------------------------------------->



    <!----------------------------We Work Across Industries---------------------------------------->
    <IndustriesListingSection :data='{
      getIndustriesData
    }' />
    <!---------------------------------------------------------------------------------------------->


    <!-------------------------------------- About Vodworks ---------------------------------------->
    <AboutVodworks :data="{
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------->


    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: false
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
        resolve_relations: 'service_engineering_details_container.service_engineering_details,industries-container.industries'
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
      return this.pageData.story.content.Services_Detailed_Content.find(function (obj) {
        return obj.component === 'service_engineering_details_container';
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
  },


}
</script>
