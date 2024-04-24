<template>
  <div>

    <!---------------------------------------- Hero ------------------------------------->
    <PageHeroWithAnimatedTitle :data="{ title: 'How we', animated_word: 'work', description: '' }" />
    <!----------------------------------------------------------------------------------->


    <!------------------------------------Overview with Image---------------------------------->
    <div class="bgColor-normal-grey">

      <div class="hero">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-0 md:gap-8">
          <div class="py-8 lg:py-4 content">

            <p class="my-4 text-big">
              Vodworks provides end-to-end software and product engineering services, including consulting, outsourcing,
              and augmented teams. We help companies who do not have the skills, resources or time to solve their deepest
              technical challenges, to adopt and implement new technology or explore emerging developments in technology.
            </p>

            <p class="my-4 text-big">
              Our vision is to create a world where technology is designed around human needs and in harmony with the
              planet, rather than the other way around.
            </p>

            <p class="my-4 text-big">
              We have more than 150 highly-skilled technical staff working for and with us globally. If we do not yet have
              the talent in house, we have a strong network to hire quickly and globally based on the client’s needs.
            </p>

            <div v-scroll-to="'#GetInTouchWithUs'" class="mt-4 lg:mt-8 btn-primary btn-lg inline-block cursor-pointer">
              Discuss your project
            </div>
          </div>
          <div class="">
            <img class="w-full" src="~/assets/img/IMG_9662.jpg" alt="2 team Members" />
          </div>
        </div>
      </div>
    </div>
    <!----------------------------------------------------------------------------------->


    <!---------------------------------- Vodworks Approach --------------------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="md:max-w-4/5 mx-auto">
          <div class="text-center">
            <h2 v-in-viewport>Vodworks <span class="bgFill"><span class="textClip">Approach</span></span></h2>
          </div>
          <p class="mt-4 lg:mt-8 mb-4 lg:mb-6 text-big">On the first stages of software development cycle we assist our
            valued clients
            in the process of requirement gathering and defining. What drives us is a profound commitment to harness our
            knowledge and initiative to
            develop products that genuinely interest us and that we, ourselves, are eager to use. When we find such a
            project, our development team takes the lead with initiative and enthusiasm.
          </p>
          <p class="mb-4 lg:mb-6 text-big">
            Our involvement in the outcomes of projects distinguishes us. Instead of solely relying on clients for
            requirements, we actively engage and contribute, being a partner rather than just a vendor, embracing this
            principle as an integral part of our team's ethos and DNA.
          </p>

        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!--------------------------------Featured Image---------------------------------------->
    <div>
      <img class="w-full" src="~/assets/img/Vodworks002.jpg" alt="Dedicated team Members" />
    </div>
    <!----------------------------------------------------------------------------------->


    <!------------------------------ Statistics -------------------------------------->
    <section>
      <div class="mx-auto">
        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto">
          <div class="bgColor-normal-grey p-8 left-full-box">
            <div class="stats-v2">
              <template v-for="(card, i) in statistics.list">
                <div :key="i" class="stats-card flex gap-4 lg:gap-8">
                  <img class="hvr-top invert" :src="`${require('~/assets/img/icons/' + card.icon)}`" :alt="card.alt" />
                  <div class="">
                    <h3 class="mr-2 block lg:inline">{{ card.count }}</h3>
                    <p class="text-regular block lg:inline">{{ card.title }}</p>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="p-8 right-full-box">
            <p class="my-4 text-big">
              We use flexible approaches and methodologies that best align with each unique project and the client's
              working style. While we don’t impose any particular approach on our clients, we do offer well-considered
              recommendations.
            </p>
            <p class="my-4 text-big">Our approach is built around small, dedicated teams, each focusing on a singular
              project at a time. We never switch teams, which ensures that resources are never shared across multiple
              projects.</p>
            <p class="my-4 text-big">To maintain a high standard of quality, we have our own quality assurance processes
              and independent teams. They operate autonomously from our development team, ensuring that quality management
              involves not just a single group but every project member.</p>
          </div>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!--------------------------------- Agile Process ------------------------------------->
    <section class="lg:py-32 py-14 overflow-hidden bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <div class="text-center">
          <h2 v-in-viewport>{{ Agile_Processes.title }} <span class="bgFill"><span class="textClip color-white">{{
            Agile_Processes.animated_word }}</span></span></h2>
          <img class="mt-8 lg:mt-16 mx-auto" src="~/assets/img/Iteration.svg" alt="Agile Process" />
        </div>
        <div class="mt-4 lg:mt-12">
          <div class="teams_approach_timeline Agile_Processes_timeline">
            <div class="approach_wrapper">
              <template v-for="(step, i) in Agile_Processes.steps">
                <div :key="i" class="approach_step">
                  <div class="inner-content">
                    <span>{{ step.count }}</span>
                    <div class="hvr-top">
                      <h6 class="color-pink">{{ step.title }}</h6>
                      <p class="text-xsmall mt-2">{{ step.description }}</p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/services" class="btn-primary btn-lg mt-16 inline-block ">
            Explore our services
          </NuxtLink>
        </div>

      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!--------------------------- Custom Software for Your Business---------------------->
    <CustomSoftwareForYourBusiness />
    <!----------------------------------------------------------------------------------->


    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Software Development Succes Stories',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->


    <!----------------------------- What Our Clients Say -------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Our Clients ',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!--------------------------------------------------------------------------------->


    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Discuss Your Project With Us!',
      isDarkSectionAtTop: false
    }" />
    <!----------------------------------------------------------------------------------->

  </div>
</template>

<script>

import statistics from '~/static/our-statistics'

export default {

  async asyncData(context) {
    // const path = context.route.path === '/' ? '/home' : context.route.path
    const [allCasesRes, allTestimonialsRes] = await Promise.all([


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
      allCases: allCasesRes.data,
      allTestimonials: allTestimonialsRes.data,
    }

  },


  data() {
    return {
      isLightBoxVisible: false,
      story: { content: {} },

      statistics,

      Agile_Processes: {
        title: "Agile",
        animated_word: "Processes",
        steps: [
          {
            count: "01",
            title: "Plan",
            description: "Defining project goals and requirements, creating a roadmap to guide the development process.",
          },
          {
            count: "02",
            title: "Design",
            description: "Designing the overall architecture, user interface, and system components to meet the project's objectives.",
          },
          {
            count: "03",
            title: "Develop",
            description: "Coding and implementing the designed components to create the actual software product.",
          },
          {
            count: "04",
            title: "Test",
            description: "Rigorous testing of the developed software to identify and fix any defects or issues before deployment.",
          },
          {
            count: "05",
            title: "Deploy",
            description: "Releasing and installing developed software into the production environment.",
          },
          {
            count: "06",
            title: "Review",
            description: "Evaluating software against the project requirements and customer feedback to identify areas for improvement.",
          },
          {
            count: "07",
            title: "Launch",
            description: "Official launch of the software product, making it available to users and customers.",
          },



        ]
      }

    }
  },

  head() {
    return {
      title: 'How we work | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Delve deeper into Vodworks' software development processes, technologies, and methodologies to gain valuable insights and enhance your understanding.",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'How we work | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Learn more about Vodworks software development processes, technologies and methodologies.",
        },
      ],
    }
  },

  computed: {

    getCasesData() {
      return this.allCases
    },
    getTestimonialsData() {
      return this.allTestimonials
    },

  },

}
</script>
