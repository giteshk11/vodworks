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
      title: 'Our Telecom Case Studies',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Talk to our Telecom Industry Expert`,
      btnText: 'Get in touch',
      btnURL: '/contact',
      imgSrc: 'john-pic.png',
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-3',
    }" />
    <!---------------------------------------------------------------------------------------------------->



    <!----------------------------------------- Blog ----------------------------------------------------->
    <div class="bgColor-normal-grey">
      <ArticlesSections :data="{
        title: 'Our Latest Blog ',
        animated_word: 'Posts',
        getBlogData,
        isDarkMode: false
      }" />
    </div>
    <!---------------------------------------------------------------------------------------------------->



    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->



    <!----------------------------------------------------------------------------------------->
    <AboutVodworks :data="{
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
        title: "Telecom Software Development Solutions",
        animated_word: "We Offer",
        list: [
          {
            icon: "Settings.svg",
            alt: "Settings icon",

            title: "Technical and Monetisation Consulting",
            description: "We provide reliable consultancy services, using our expertise to offer valuable industry insights, technology recommendations, and successful monetisation strategies tailored to telecom companies",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "Backend Development.svg",
            alt: "laptop icon",

            title: "Custom Enterprise Software",
            description: "We specialise in building customised enterprise software solutions for telecom clients worldwide, delivering comprehensive support from the initial concept to the ultimate deployment of your tailored software",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "Web design.svg",
            alt: "design icon",

            title: "Video Platform Building",
            description: "Our expertise is in building top-tier video platforms designed for scalable streaming and content monetisation, ensuring the best experience for your users while at the same time ensuring more revenue for your business",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "content-write.svg",
            alt: "content-write icon",

            title: "Content Distribution Software",
            description: "We build end-to-end customised software for telecom clients to facilitate efficient and effective digital content delivery and enhance end-user experience.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db.svg",
            alt: "data base icon",

            title: "Data and BI Solutions",
            description: "We provide reliable data services, enabling you to access insights for better decision-making. We handle both large and small data sets, ensuring smooth, secure, and compliant use of data across your operations",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "circles-inside.svg",
            alt: "circles icon",

            title: "Web3 Strategy and Implementation",
            description: "We delve into and incorporate web3 technologies into telecom businesses, providing you with the opportunity to engage with and monetize your users through the next generation of interactions",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          }
        ]
      }
    }
  },

  head() {
    return {
      title: 'Telecommunication Software Development | Vodworks ',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Empowering telecom through advanced software solutions. Vodworks drives innovation in telecommunication software development industry.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'telecommunication industry, telco industry, telecom software development, telecommunication services industry, innovation in telecommunication industry, telecom software development services, telecom software services, telecom software solutions, telecom application development, telecommunications software solutions, telecoms software development, software telecom'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telecommunication Software Development | Vodworks ',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Empowering telecom through advanced software solutions. Vodworks drives innovation in telecommunication software development industry.',
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
  
