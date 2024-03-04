<template>
  <div>

    <IndustriesHeroSection :industries="getIndustriesData" :page="getPageDetails" :button="{
      btnURL: false
    }" />



    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-4/5">
          <div class="text-center">
            <h2>{{ SingleIndustrySolutionData.title }}</h2>
          </div>

          <div class="center-two-ele-in-grid mx-auto mt-8 lg:mt-16 gap-4">
            <template v-for="(card, i) in SingleIndustrySolutionData.list">
              <div :key="i" class="default-card card-utilities hvr-effect item">
                <img class="hvr-top" :src="`${require('~/assets/img/icons/industries/' + card.icon)}`" :alt="card.alt" />
                <h4 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h4>
                <p class="text-card flex-grow-1">{{ card.description }}</p>

                <div v-scroll-to="card.btnURL" class="btn-text mt-8 inline-block cursor-pointer">
                  {{ card.btnText }}
                </div>
              </div>
            </template>
          </div>
        </div>

      </div>
    </section>



    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      // title: 'Software Sustainability Success Stories',
      title:'Our Case Studies',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Consult with our Sustainability Industry Expert!`,
      btnText: 'Get in touch',
      btnURL: '/contact',
      imgSrc: 'sustainability-industry-expert.png',
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-4',
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!---------------------------------------------------------------------------------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-4/5">
          <div class="text-center">
            <h2>{{ Our_Values.title }}</h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4 mt-8 lg:mt-16">
            <template v-for="(card, i) in Our_Values.list">
              <IndustryCard :key="i" :data="card" />
            </template>
          </div>
        </div>

      </div>
    </section>
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
            <Accordion :payload="FaqsData" category="sustainability" />
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
      story: { content: {} },

      SingleIndustrySolutionData: {
        title: "Our Sustainability Software Development",
        animated_word: "Services",
        list: [
          {
            icon: "Backend-Development.svg",
            alt: "laptop icon",

            title: "Custom Software Development",
            description: "With extreme passion and dedication we help you create and use innovative software to drive your sustainability initiative forward, making real impact in the world",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "users-2.svg",
            alt: "Users icon",

            title: "End-User Application Development",
            description: "We support you throughout your sustainability app journey, from ideation to development, ensuring we cater to the needs and preferences of your target audience and making sure they have a seamless and satisfying user experience",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "shrink.svg",
            alt: "shrink icon",

            title: "System Integration",
            description: "We provide system integration services tailored for sustainability projects, streamlining the coordination of various components and technologies to ensure interoperability, optimizing effieciency and effectiveness of your initiative",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "megaphone.svg",
            alt: "megaphone icon",

            title: "Technical Mentoring and Consulting",
            description: "Driven by our passion for technology and belief that it can be used to change the world positively, we offer technical mentoring and consulting services for your sustainability project. We help you make informed decisions and navigate the complexities of integrating techology into your sustainability initiatives",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "wallet-2.svg",
            alt: "wallet icon",

            title: "Investment and Incubation",
            description: "When we find people and projects that align with our values and mission, we aspire to be involved. We offer not only financial backing, but also technical expertise and support as well as business advisory",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },

        ]
      },

      Our_Values: {
        title: "Our Values",
        animated_word: "",
        list: [
          {
            icon: "hand-metal.svg",
            alt: "hand-metal icon",

            title: "Keep it real",
            description: "We’re all about honesty, integrity, and transparency here. No fancy talk or hidden agendas, just straight-up truthfulness in everything we do. We believe in treating others as we would like to be treated ourselves, with respect and authenticity.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },

          {
            icon: "brain.svg",
            alt: "brain icon",

            title: "Embrace the new",
            description: "We’re always pushing boundaries, challenging ourselves, and exploring new ideas. We believe that innovation comes from curiosity and a willingness to learn, grow, and adapt. So, we never stop listening and learning, and we never stop striving to be better.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },

          {
            icon: "orbit.svg",
            alt: "orbit icon",

            title: "Tech enthusiasts at heart",
            description: "We’re passionate about technology, and we believe it has the power to change the world. We love nothing more than getting stuck into the latest trends, exploring new tools and techniques, and helping our clients stay ahead of the game.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },

          {
            icon: "users.svg",
            alt: "users icon",

            title: "Teamwork makes the dream work",
            description: "We’re a diverse and inclusive bunch, spread across departments, countries, and cultures. But no matter where we are or what we do, we’re united by a common goal: to support each other and work together to achieve great things.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },

          {
            icon: "smile-plus.svg",
            alt: "smile-plus icon",

            title: "Come together as a community",
            description: "We believe people are the backbone of any great community. We take our commitment to our communities very seriously, both inside and outside of our company, and we do whatever we can to support our communities.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },

          {
            icon: "heart-handshake.svg",
            alt: "heart-handshake icon",

            title: "Customers first, always",
            description: "We’re customer-focused to our core, and we believe the delivering quality work and building strong relationships is key to success. We never lose sight of our clients’ needs and priorities, and we’re always looking for ways to exceed their expectations and earn their trust.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },


        ]
      },

      FaqsData: {
        title: "Sustainability Development",
        animated_word: "FAQ",
        faqs: FAQs.list
      }

    }
  },

  head() {
    return {
      title: 'Sustainability Software Development Solutions | Vodworks',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Crafting Tomorrow's Solutions: Vodworks - Your Partner for Sustainable Software Development. Let's start your sustainability development project right NOW!"
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'sustainability solutions, sustainability software, sustainability reporting software, sustainability management software, software sustainability, sustainable software development, supply chain sustainability software, sustainability software engineering, sustainability software companies, enterprise sustainability software, software engineering sustainability, product sustainability software, sustainability software solutions, IT solutions for sustainability'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Sustainability Software Development Solutions | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Crafting Tomorrow's Solutions: Vodworks - Your Partner for Sustainable Software Development. Let's start your sustainability development project right NOW!"
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
