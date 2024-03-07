<template>
  <div>

    <!------------------------------Hero section start---------------------------->
    <section class="bgColor-normal-grey">

      <div class="hero fw-image-and-fw-content">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-0 md:gap-8">
          <div class="py-8 lg:py-4 order-2 lg:order-1 content">
            <h1 class="capitalize"> {{ hero.title }} <span class="inline-block lg:block"> {{ hero.subtitle }}</span>
            </h1>
            <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big md:w-4/5">
              {{ hero.description }}
            </p>
            <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
              Discuss your project
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <img class="w-full" :src="`${require('~/assets/img/' + hero.image)}`" :alt="hero.alt" />
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------->


    <!-------------------------------Statistics section-------------------------------->
    <section class="lg:py-8 py-6 bgColor-tertiary-black">
      <div class="stats-wrapper mx-auto container color-white">
        <div class="stats">
          <template v-for="(card, i) in statistics.list">

            <div :key="card.id" class="stats-card relative" :class="i == 3 ? 'last-item' : ''">
              <!-- <img :src="resolveImage('/img/icons/'+card.icon)" :alt="card.alt" /> -->
              <img class="hvr-top" :src="`${require('~/assets/img/icons/' + card.icon)}`" :alt="card.alt" />

              <div>
                <h3>{{ card.count }}</h3>
                <p class="color-white text-regular">{{ card.title }}</p>
              </div>
            </div>
            <img :key="i" class="v-line-border" :class="i == 3 ? 'hidden' : ''" src="~assets/img/v-line.svg"
              alt="line-image" />
          </template>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->






    <!----------------------------------Services Listing---------------------------------->
    <section v-if="getServicesData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">
          <h2 v-in-viewport>{{ getServicesData.title }} <span class="bgFill"><span class="textClip">{{
            getServicesData.animated_word }}</span></span></h2>
          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-1/2">
            {{ getServicesData.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4 mt-8 lg:mt-16">
          <template v-for="(card, i) in getServicesData.services">
            <ServiceCard :key="i" :data="card" />
          </template>
        </div>

      </div>

    </section>
    <!----------------------------------------------------------------------------------->


    <!---------------------- Our Clients Logos-------------------------------------------->
    <OurClientsLogos :data="{
      ourClients,
    }" />
    <!----------------------------------------------------------------------------------->



    <!-------------------------Empower your business today------------------------------->
    <FeaturedDetailedCtaSection :data="benefits" />
    <!----------------------------------------------------------------------------------->


    <!--------------------------- Custom Software for Your Business---------------------->
    <CustomSoftwareForYourBusiness />
    <!----------------------------------------------------------------------------------->



    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Our Success',
      animated_word: 'Stories',
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


    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <BenefitsOfChoosingVodworks :data="{
      isDarkMode: true
    }
      " />
    <!----------------------------------------------------------------------------------->


    <!--------------------------- Meet Our Team --------------------------->
    <MeetOurTeamSection :data="{
      title: 'Meet Our',
      animated_word: 'Team',
      description: 'Meet our dynamic leadership team, a group of tech industry veterans with extensive experience across industries and regions. Their combined expertise drives innovation and passion at the heart of our company.',
      getTeamsData,
      scrollToSection: false,
      btnText: 'more about us',
      btnURL: '/about',
      isDarkMode: false,
    }" />
    <!----------------------------------------------------------------------------------->


    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: false,
    }
      " />
    <!----------------------------------------------------------------------------------->

  </div>
</template>

<script>

import statistics from '~/static/our-statistics'
import ogImage from '~/static/preview.jpg';

export default {

  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allCasesRes, allTestimonialsRes, allTeamRes, allClientsRes] = await Promise.all([

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
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'teams/',
        resolve_relations: 'teams-container.teams',
      }),

      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'our-clients/',
        resolve_relations: 'our-clients-container.slides',
      }),

    ])
    return {
      pageData: pageDataRes.data,
      allCases: allCasesRes.data,
      allTestimonials: allTestimonialsRes.data,
      allTeam: allTeamRes.data,
      ourClients: allClientsRes.data,
    }

  },

  data() {
    return {
      statistics,

      hero: {
        title: "Vodworks -",
        subtitle: "Solving your technology puzzles",
        description: "We are a global provider of end-to-end software development services. We work closely with our clients to create innovative custom software products and build successful engineering teams.",
        image: "hero-img.jpg",
        alt: "our team",
      },

      benefits: {
        title: "Tech-empower your business",

        btnText: "Get in touch with us",
        btnURL: "/contact",
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
    }
  },

  head() {
    return {
      title: 'Software Development Company | Vodworks',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development, it company, software development company, software development companies, development company, software development service, software development services, software developer company, software development firm, product development services, software development services company, database management company'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Software Development Company | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Experience End-to-end software and product engineering services with Vodworks: Software Development, POCs, Augmented Teams, DevOps and much more',
        },

        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImage,
        },
        {
          hid: 't-type',
          name: 'twitter:card',
          content: ogImage,
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
    getTeamsData() {
      return this.allTeam
    },
    getOurClientsData() {
      return this.ourClients
    },

  },

}
</script>