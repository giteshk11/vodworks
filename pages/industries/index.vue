<template>
  <div>

    <IndustriesHeroSection :industries="getIndustriesData" :page="getPageDetails" :button="{
      btnURL: true
    }" />


    <!----------------------------- Tools and Technologies we use ------------------------------->
    <ToolsAndTechs :data="{
      isDarkMode: false
    }" />
    <!------------------------------------------------------------------------------------------>


    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <BenefitsOfChoosingVodworks :data="{
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Consult with our tech experts`,
      btnText: 'Get in touch with us',
      btnURL: '/contact',
      imgSrc: 'team-members.png',
      col_1: 'md:col-span-5',
      col_2: 'md:col-span-7',

    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->


    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Success Stories',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: false,
    }" />
    <!------------------------------------------------------------------------------------->



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



export default {



  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allCasesRes, allTestimonialsRes] = await Promise.all([

      context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'industries-container.industries'
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
      pageData: {},
    }
  },

  head() {
    return {
      title: 'Vodworks | Software Development by Industry',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Experience innovation and excellence with Vodworks in the software development industry. Elevate your digital solutions today!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development industry, software development industries, software development financial industry, development of software industry, software development healthcare industry, research and development in software industry, software industry development, software development industry growth'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Vodworks | Software Development by Industry',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Experience innovation and excellence with Vodworks in the software development industry. Elevate your digital solutions today!',
        },

      ],
    }
  },

  computed: {

    getPageDetails() {
      return this.pageData.story.content
    },
    getIndustriesData() {
      return this.pageData.story.content.body.find(function (obj) {
        return obj.component === 'industries-container';
      })
    },
    getCasesData() {
      return this.allCases
    },
    getTestimonialsData() {
      return this.allTestimonials
    },

  }

}
</script>
