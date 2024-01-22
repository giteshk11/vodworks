<template>
  <div>

    <!---------------------------------------------------------------------------------------------------->
    <IndustriesHeroSection :industries="getIndustriesData" :page="getPageDetails" :button="{
      btnURL: false
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!---------------------------------------------------------------------------------------------------->
    <IndustriesSolutionCardsSection :data="{
      SingleIndustrySolutionData,
      gridlayout: 'four-cols'
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Media and Entertainment Case Studies',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Consult with our Media and Entertainment Industry Expert`,
      btnText: 'Get in touch',
      btnURL: '/contact',
      imgSrc: 'media-and-entertainment-industry-expert.png',
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-4',
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!---------------------------------------------------------------------------------------------------->
    <BenefitsOfChoosingVodworks :data="{
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->



    <!----------------------------------------- Blog ----------------------------------------------------->
    <ArticlesSections :data="{
      title:'Relevant Articles',
      animated_word:'',
      getBlogData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------------->



    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title:'Get in Touch with us',
      isDarkSectionAtTop: false
    }" />
    <!----------------------------------------------------------------------------------->


  </div>
</template>
  

<script>


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
        title: "Media & Entertainment Software Development",
        animated_word: "Solutions",
        list: [
          {
            icon: "webcam.svg",
            alt: "webcam icon",

            title: "White-label Video Streaming Apps",
            description: "We create custom video streaming solutions, including branded platforms, tailored to your needs, offering a seamless experience for your customers with user apps and robust content management systems.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "Backend Development.svg",
            alt: "Backend Development icon",

            title: "Custom Enterprise Software",
            description: "We specialise in bespoke enterprise software solutions for global media and entertainment clients, offering end-to-end support from initial contempt to final deployment of your customised software",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "layout-template.svg",
            alt: "layout-template icon",

            title: "End-User Applications",
            description: "Whether it’s new or existing applications, we excel in cross-platform development (mobile, web, TV, and more), delivering immersive, user-friendly experiences with our expertise in product engineering and development.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "network.svg",
            alt: "network icon",

            title: "Backend Application and Infrastructure",
            description: "With our extensive experience in managing millions of concurrent streams, we build technical infrastructure and develop backend applications that guarantee minimal downtime and peak performance, even under heavy user loads.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "user-cog.svg",
            alt: "user-cog icon",

            title: "Recommendation and Personalisation",
            description: "We create advanced content recommendation and personalization services through advanced algorithms and data analysis, leading to higher user engagement and revenue growth for your business",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "file-input.svg",
            alt: "file-input icon",

            title: "Consulting Services",
            description: "We offer trusted consulting with industry insights, technology recommendations, and effective content monetisation strategies for Media and Entertainment businesses, leveraging our expertise",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "shuffle.svg",
            alt: "shuffle icon",

            title: "System Integration",
            description: "As system integrators, we work the best-in-class partners to bring together technologies and systems that enhance the productivity, efficiency, and capacity  of your software products",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db.svg",
            alt: "Data base icon",

            title: "Data and BI",
            description: "We specialise in data services, helping you access insights for informed decision-making Our expertise ensures seamless, safe and compliant integration of these services into your operations.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          }
        ]
      }
    }
  },

  head() {
    return {
      title: 'Media and Entertainment Software Development',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Elevate media experiences with Vodworks' software development industry. Revolutionize content delivery and engagement. Explore our services now!"
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'media and entertainment industry, entertainment and media industry, media software development, media and entertainment software development, media & entertainment software development, social media software development, media company software development, media and entertainment software development services'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Media and Entertainment Software Development',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Elevate media experiences with Vodworks' software development industry. Revolutionize content delivery and engagement. Explore our services now!"
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
