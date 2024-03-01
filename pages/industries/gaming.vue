<template>
  <div>

    <IndustriesHeroSection :industries="getIndustriesData" :page="getPageDetails" :button="{
      btnURL: false
    }" />

    <!---------------------------------------------------------------------------------------------------->
    <IndustriesSolutionCardsSection :data="{
      SingleIndustrySolutionData,
      gridlayout: 'three-cols'
    }" />
    <!---------------------------------------------------------------------------------------------------->




    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      // title: 'Gaming Software Case Studies',
      title:'Our Case Studies',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Consult with our Gaming Industry Expert!`,
      btnText: 'Get in touch',
      btnURL: '/contact',
      imgSrc: 'gaming-industry-expert.png',
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-4',
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!----------------------------------------- Blog ----------------------------------------------------->
    <div class="bgColor-normal-grey">
      <ArticlesSections :data="{
        title: 'Vodworks Related Blog ',
        animated_word: 'Insights',
        getBlogData,
        isDarkMode: false
      }" />
    </div>
    <!---------------------------------------------------------------------------------------------------->



    <!---------------------------------------------------------------------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2 class="color-white">Why Vodworks as your Gaming Development Partner?</h2>
        </div>
        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16">
          <div>
            <p class="mb-4 lg:mb-6 text-big color-white">Our comprehensive set of software solutions for gaming, combined
              with our commitment to driving innovation and delivering value to our clients, makes Vodworks your ultimate
              gaming development partner.
            </p>
            <p class="text-big color-white">
              Our comprehensive set of software solutions for gaming, combined with our commitment to driving innovation
              and delivering value to our clients, makes Vodworks your ultimate gaming development partner.
            </p>
          </div>
          <div>
            <div class="zoom-in overflow-hidden">
              <img class="w-full" src="~/assets/img/IMG_9662_2.jpg" alt="Development Partner" />
            </div>
          </div>

        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->



    <!--------------------------------------FAQs-------------------------------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-3/5">
          <div class="text-center">
            <h2 v-in-viewport>{{ FaqsData.title }} <span class="bgFill"><span class="textClip">{{
              FaqsData.animated_word }}</span></span></h2>
          </div>
          
          <div class="mt-8 lg:mt-16">
            <Accordion :payload="FaqsData" category="gaming" />
          </div>
        </div>

      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->



    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->


    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title:'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!----------------------------------------------------------------------------------->

  </div>
</template>
  

<script>

import FAQs from '~/static/faqs'

export default {

  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allCasesRes, allArticlesRes, allTestimonialsRes] = await Promise.all([

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
        starts_with: 'blogs/',
        per_page: 10,
        resolve_relations: 'blog-container.blog',
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
      allArticles: allArticlesRes.data,
      allTestimonials: allTestimonialsRes.data,
    }

  },


  data() {
    return {

      story: { content: {} },
      

      SingleIndustrySolutionData: {
        title: "Our Software Solutions for",
        animated_word: "Gaming",
        list: [
          {
            icon: "layers.svg",
            alt: "layers icon",

            title: "Enterprise Gaming Infrastructure",
            description: "We seamlessly incorporate enterprise gaming infrastructure into your business, ensuring it aligns with your overarching architecture, is optimised for performance, and improves your customers' experiences.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "shrink.svg",
            alt: "shrink icon",

            title: "Gaming DevOps and Scalability",
            description: "We help your business build and implement scalable software infrastructure to handle mass concurrent users while reducing costs",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "star.svg",
            alt: "star icon",

            title: "Game Design",
            description: "We recognize the vital role of UX and UI design in shaping immersive gaming. Our skilled designers create intuitive, captivating interfaces to boost gamer engagement and retention.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "rocket.svg",
            alt: "rocket icon",

            title: "Game Development",
            description: "We work closely with your team to conceive, strategize, and meticulously documet game designs, ensuring thorough consideration of every aspect of the gaming experience",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db.svg",
            alt: "db icon",

            title: "Data and BI Solutions",
            description: "We deliver secure, compliant, and optimised gaming data service, giving your business access to invaluable insights for operational improvements and better decision making",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "gamepad.svg",
            alt: "Gamepad icon",

            title: "Web3 Gaming Integration",
            description: "We transform your web2 economies for seamless integration with web3 technologies, enabling your business to harness the opportunities in the web3 landscape",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },

        ]
      },

      FaqsData: {
        title: "Gaming Software",
        animated_word: "FAQ",

        faqs: FAQs.list

      }

    }
  },

  head() {
    return {
      title: 'Gaming Software Development  | Vodworks',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Vodworks pioneers Gaming Software Development, shaping immersive experiences. Join us to redefine interactive entertainment TODAY!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'gaming industry, gaming software, entertainment software, gaming development software, gaming software development, mobile gaming development software, software for entertainment, gaming software development, entertaining software, game software development, game entertainment management, entertainment softwares, gaming software developers'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Gaming Software Development  | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Vodworks pioneers Gaming Software Development, shaping immersive experiences. Join us to redefine interactive entertainment TODAY!',
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
    getBlogData() {
      return this.allArticles
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