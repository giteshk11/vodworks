<template>
  <div>

    <!------------------------------------- Services Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Vodworks Software Development Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">From exploration and consultation to development of
            scalable software solutions, we provide comprehensive technical services that align with your unique business
            needs.
          </p>
          <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
            Discuss your project
          </div>
        </div>

        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">
            <template v-for="(card, i) in getServicesData.services">
              <ServiceCtaCard :key="i" :data="card" />
            </template>

          </div>
        </div>
      </div>
    </section>

    <!------------------------------------------------------------------------------------------>



    <!---------------------------- Services details Cards (larg Cards) ------------------------>
    <section v-if="getServicesData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">

          <h2 v-in-viewport>{{ getServicesData.title }} <span class="bgFill"><span class="textClip">{{
            getServicesData.animated_word }}</span></span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">
            <template v-for="(card, i) in getServicesData.services">
              <ServiceLargeCard :key="i" :data="card" :button="{ text: '', btnURL: 'isDynamic' }" />
            </template>


          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>


    <!----------------------------- Tools and Technologies we use ------------------------------->

    <ToolsAndTechs :data="{
      isDarkMode: true
    }" />
    <!------------------------------------------------------------------------------------------>



    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Discuss your project's future`,
      btnText: 'Get in touch with us',
      btnURL: '/contact/',
      imgSrc: 'team-members.png',
      col_1: 'md:col-span-5',
      col_2: 'md:col-span-7',
    }" />
    <!---------------------------------------------------------------------------------------------------->



    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Success Stories',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->




    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------------->


    <!---------------------------------  Meet our Vodworks team --------------------------------->

    <OverviewAboutVodworksTeam />

    <!------------------------------------------------------------------------------------------>



    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title:'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!----------------------------------------------------------------------------------->

  </div>
</template>

<script>


export default {

  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allCasesRes, allTestimonialsRes] = await Promise.all([

      context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'services-container.services'
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'cases/',
        resolve_relations: 'case-studies-container.case_studies',
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'testimonials/',
        resolve_relations: 'testimonial-container.testimonials_list',
      }),


    ])
    return {
      pageData: pageDataRes.data,
      allCases: allCasesRes.data,
      allTestimonials: allTestimonialsRes.data,
    }

  },


  data() {
    return {
      story: { content: {} },
      pageData: {},
    }
  },

  head() {
    return {
      title: 'Vodworks | Explore Software Development Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Empower your business with Vodworks' Software Development Services. We create tailored solutions for web, mobile, and custom software. Explore now!",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development service, custom software development services, software solution services, software development consulting services, software product development services, Software Services We Provide, software development services company, enterprise software development services, outsource software development services, services software development, software development company services, agile software development services'
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
          content: 'Vodworks | Explore Software Development Services',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Empower your business with Vodworks' Software Development Services. We create tailored solutions for web, mobile, and custom software. Explore now!",
        },

        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.getServicesData.services[0].content.thumbnail.filename}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.getServicesData.services[0].content.thumbnail.filename}`,
        },
        
      ],
    }
  },

  computed: {
    getServicesData() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'services-container';
      })
    },
    getCasesData() {
      return this.allCases
    },
    getTestimonialsData() {
      return this.allTestimonials
    },
    getAllTeamsData() {
      return this.allTeam
    },


  },

}
</script>
