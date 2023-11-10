<template>
  <div>

    <!------------------------------Hero section start---------------------------->
    <section class="bgColor-normal-grey">

      <div class="hero">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-0 md:gap-8">
          <div class="py-8 lg:py-4 order-2 lg:order-1 content">
            <h1 class="capitalize"> Vodworks - <span class="inline-block lg:block"> Solving your technology puzzles</span>
            </h1>
            <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big">
              We are a global provider of end-to-end software development services. We work closely with our clients to
              create innovative custom software products and build successful engineering teams.
            </p>
            <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
              Discuss your project
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <img class="w-full" src="~/assets/img/hero-img.jpg" alt="Hero Image" />
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


    <!-------------------------Empower your business today------------------------------->
    <FeaturedDetailedCtaSection :data="benefits" />
    <!----------------------------------------------------------------------------------->


    <!--------------------------- Custom Software for Your Business---------------------->
    <CustomSoftwareForYourBusiness />
    <!----------------------------------------------------------------------------------->


    <!--------------------------------Our Success Stories---------------------------------->
    <section v-if="getAllCasesData" class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <div class="text-center">
          <h2>Our Success Stories</h2>
        </div>


        <div class="mx-auto md:max-w-4/5">
          <div class="mt-8 lg:mt-16">
            <client-only>
              <VueSlickCarousel class="success-stories-slider"
                v-bind="$store.state.sliders_configurations.success_stories">
                <template v-for="(card, i) in getAllCasesData">
                  <CaseStudyCard :key="i" :data="card" />
                </template>
              </VueSlickCarousel>
            </client-only>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/" class="btn-primary btn-lg mt-16 inline-block ">
            show all cases
          </NuxtLink>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


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

    <!-- Meet Our Team -->
    <section v-if="getAllTeamsData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">
          <h2 v-in-viewport>Meet Our <span class="bgFill"><span class="textClip">Team</span></span></h2>

          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
            Meet our dynamic leadership team, a group of tech industry veterans with extensive experience across
            industries and regions. Their combined expertise drives innovation and passion at the heart of our
            company.
          </p>
        </div>

        <!-- card list -->
        <div class="mx-auto max-w-7/10">
          <div class="mx-auto">
            <div class="mt-8 lg:mt-16">
              <client-only>
                <VueSlickCarousel class="our-team-slider" v-bind="$store.state.sliders_configurations.our_team">

                  <template v-for="(card, i) in getAllTeamsData">
                    <TeamSlidingCard :key="i" :data="card" />
                  </template>

                </VueSlickCarousel>
              </client-only>
            </div>
          </div>
          <div class="text-center">
            <NuxtLink to="/" class="btn-primary btn-lg mt-16 inline-block ">
              more about us
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: false
    }
      " />
    <!----------------------------------------------------------------------------------->

  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import { mapActions, mapState } from "vuex";

export default {
  components: {
    VueSlickCarousel,
  },

  data() {
    return {
      story: { content: {} },
      statistics: {
        list: [
          {
            id: "uuid-1",
            icon: "laptop.svg",
            alt: "laptop-icon",
            title: "Expert Developers",
            count: "150+"
          },
          {
            id: "uuid-2",
            icon: "flag.svg",
            alt: "flag-icon",
            title: "Global Development Centers",
            count: "5+"
          },
          {
            id: "uuid-3",
            icon: "box.svg",
            alt: "box-icon",
            title: "Projects Delivered",
            count: "300+"
          },
          {
            id: "uuid-4",
            icon: "location-pin.svg",
            alt: "pin-icon",
            title: "Customers in more than 20 countriess",
            count: "200+"
          }
        ]
      },
      benefits: {
        title: "Tech-empower your business",

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

  async fetch({ store, route }) {
    const path = route.path === '/' ? '/home' : route.path
    await store.dispatch('loadPagedata', path)
    await store.dispatch('loadAllTestimonials')
    await store.dispatch('loadAllTeam')
    await store.dispatch('loadAllCases')
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

      ],
    }
  },

  computed: {
    getServicesData() {
      return this.$store.state.CurrentPageData.story.content.body.find(function (obj) {
        return obj.component === 'services-container';
      })


    },

    // return {...this.$store.state.todos.list}


    getTestimonialsData() {
      return this.$store.state.AllTestimonials
    },
    getAllTeamsData() {
      return this.$store.state.AllTeamMembers
    },
    getAllCasesData() {
      return this.$store.state.AllCases
    },

  },

}
</script>