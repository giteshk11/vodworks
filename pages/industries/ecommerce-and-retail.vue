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
      // title: 'Retail & Ecommerce Case Studies',
      title:'Our Case Studies',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->



    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <FeaturedCards3sInRow :data="{
      content: why_choose_vodworks,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------->


    <!----------------------------------------------------------------------------------->
    <FeaturedDetailedCtaSection :data="benefits" />
    <!----------------------------------------------------------------------------------->



    <!----------------------------------------- Blog ----------------------------------------------------->
    <div class="bgColor-normal-grey">
      <ArticlesSections :data="{
        title: 'Ecommerce & Retail Insights',
        animated_word: '',
        getBlogData,
        isDarkMode: false
      }" />
    </div>
    <!---------------------------------------------------------------------------------------------------->


    <!-------------------------------------------FAQs----------------------------------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-3/5">
          <div class="text-center">
            <h2 v-in-viewport>{{ FaqsData.title }} <span class="bgFill"><span class="textClip">{{
              FaqsData.animated_word }}</span></span></h2>

          </div>
          <div class="mt-8 lg:mt-16">
            <Accordion :payload="FaqsData" category="ecommerce" />
          </div>
        </div>

      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->



    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Customers ',
      animated_word: 'Have to Say',
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
        title: "Ecommerce Software & Retail Services",
        animated_word: "We Offer",
        list: [

          {
            icon: "locate-fixed.svg",
            alt: "locate-fixed icon",

            title: "Platform Implementation",
            description: "We select and implement the best eCommerce platform for your business, with focus on driving revenue growth and improving online customer engagement. We also provide ongoing support and security measures to ensure continued success and compliance with industry standards",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "users-2.svg",
            alt: "users icon",

            title: "Custom Enterprise Solutions",
            description: "We build custom enterprise solutions for eCommerce and retail, whether you require an end-user application or internal business tool. Our solutions are designed to meet your needs, optimising efficiency and improving customer experience",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "scan-face.svg",
            alt: "scan-face icon",

            title: "Custom Loyalty Applications",
            description: "With strong knowledge and experience in loyalty applications and gamification, our team creates engaging solutions that will help drive your customer loyalty and build lasting engagement.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "integration.svg",
            alt: "integration icon",

            title: "System Integration",
            description: "We provide end-to-end system integration services, seamlessly integrating various software and systems to ensure smooth data flow, process automation and improving operational efficiency of your eCommerce and retail business",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "web3-assets.svg",
            alt: "web3-assets icon",

            title: "Web3 Asset Management and Monetisation",
            description: "By leveraging the power of web3 technology, we build solutions for businesses to manage and monetise your digital assets, driving innovation and revenue growth",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db.svg",
            alt: "db icon",

            title: "Data and BI Solutions",
            description: "We provide secure, compliant, and optimised data services for eCommerce and retail players, offering your business invaluable insights to enhance operations and make informed decisions.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          }
        ]
      },

      why_choose_vodworks: {
        title: "Why Choose Vodworks?",

        list: [
          {
            title: "Proven Track Record",
            description: "Our comprehensive experience in eCommerce and Retail will help deliver a revenue-driven solution that is both aligned with industry regulations, and has a seamless user experience."
          },
          {
            title: "Innovative Custom Software Solutions",
            description: "Committed to innovation, constant industry research and technology advancements, our team ensures your project stands out in the market and meets your needs."
          },
          {
            title: "Cutting-Edge Tech Stack",
            description: "With knowledge of a broad range of tools and technologies, team of Vodworks experts  will carefully select the appropriate tools and tech stack to ensure we deliver on time and within budget."
          }
        ]
      },

      benefits: {
        title: "Get in Touch with Our Team",
        btnText: "Get in touch with us",
        btnURL: "/contact/",
        target: "_self",

        list: [
          {
            intial_title: 'Stay competitive',
            remaning_title: "by leveraging our specialised knowledge"
          },
          {
            intial_title: 'Reduce development time and cost',
            remaning_title: "by avoiding the hiring overhead "
          },
          {
            intial_title: 'Build scalable, adaptable software',
            remaning_title: "that meets your evolving business needs"
          },
        ]
      },

      FaqsData: {
        title: "FAQ About Retail & Ecommerce",
        animated_word: "Software Development",
        faqs: FAQs.list
      },

    }
  },

  head() {
    return {
      title: 'Ecommerce Software Development & Retail Solutions | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Seamless Commerce Transformation: Vodworks - Pioneering Ecommerce Software Development and Retail Solutions for Success. Get in touch with us right now!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'ecommerce software, retail solutions, ecommerce development services, retail development, retail software solutions, ecommerce software companies, ecommerce software development, retail software development, retail app development, ecommerce software solutions, ecommerce software company, online retail solutions, retail application development, retail ecommerce solutions, retail app development company, retail software development companies'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Ecommerce Software Development & Retail Solutions | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Seamless Commerce Transformation: Vodworks - Pioneering Ecommerce Software Development and Retail Solutions for Success. Get in touch with us right now!',
        },

      ],
      script: [
        {
          type: 'application/ld+json',
          json: this.generateFaqSchema(),
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
  },

  methods: {
    generateFaqSchema() {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": this.FaqsData.faqs.filter(faq => faq.categories.includes("ecommerce")).map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
    }
  }

}
</script>