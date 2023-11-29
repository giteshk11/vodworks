<template>
  <div>

    <!---------------------------------------- Hero ------------------------------------->
    <PageHeroWithAnimatedTitle :data="{ title: 'How we', animated_word: 'work', description: '' }" />
    <!----------------------------------------------------------------------------------->


    <!---------------------------------- Overview --------------------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">

        <div class="md:max-w-4/5 mx-auto">
          <p class="mb-4 lg:mb-6 text-big">Vodworks provides end-to-end software and product engineering services,
            including consulting, outsourcing, and augmented teams. We help companies who do not have the skills,
            resources or time to solve their deepest technical challenges, to adopt and implement new technology or
            explore emerging developments in technology.
          </p>
          <p class="mb-4 lg:mb-6 text-big">
            Our vision is to create a world where technology is designed around human needs and in harmony with the
            planet, rather than the other way around.
          </p>
          <p class="text-big">We have more than 150 highly-skilled technical staff working for and with us globally. If we
            do not yet have the talent in house, we have a strong network to hire quickly and globally based on the
            client’s needs.</p>

          <div class="mt-4 mb-4 lg:mt-12 lg:mb-12 zoom-in overflow-hidden">
            <img class="w-full" src="~/assets/img/how-we-work-thumbnail.jpg" alt="" />
          </div>


          <p class="mb-4 lg:mb-6 text-big">On the first stages of software development cycle we assist our valued clients
            in the
            process of requirement gathering and defining. What drives us is a profound commitment to harness our
            knowledge and initiative to develop products that genuinely interest us and that we, ourselves, are eager to
            use. When we find such a project, our development team takes the lead with initiative and enthusiasm.</p>
          <p class="mb-4 lg:mb-6 text-big">Our involvement in the outcomes of projects distinguishes us. Instead of solely
            relying on
            clients for requirements, we actively engage and contribute, being a partner rather than just a vendor,
            embracing this principle as an integral part of our team's ethos and DNA.</p>
          <p class="mb-4 lg:mb-6 text-big">We use flexible approaches and methodologies that best align with each unique
            project and
            the client's working style. While we don’t impose any particular approach on our clients, we do offer
            well-considered recommendations.</p>
          <p class="mb-4 lg:mb-6 text-big">Our approach is built around small, dedicated teams, each focusing on a
            singular project at
            a time. We never switch teams, which ensures that resources are never shared across multiple projects.</p>
          <p class="text-big">To maintain a high standard of quality, we have our own quality assurance processes and
            independent teams. They operate autonomously from our development team, ensuring that quality management
            involves not just a single group but every project member.</p>


          <div class="text-center mt-4 lg:mt-8">
            <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
              Discuss your project
            </div>
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
      isDarkSectionAtTop: false
    }" />
    <!----------------------------------------------------------------------------------->



  </div>
</template>

<script>


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
      title: 'Be Smart - Operate Seamlessly With Team Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We love to solve complex business problems using technology. We have built innovative products in the sphere of media, OTT, navigations, blockchain, and fintech.',
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
