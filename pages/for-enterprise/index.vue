<template>
  <div>

    <!------------------------------HERO------------------------------------------>
    <PageHeroWithAnimatedTitle :data="{
      title: 'Enterprise Software',
      animated_word: 'Development',
      description: 'We cater to the unique needs of large organizations by designing, creating and maintaining custom software solutions. We aim to enhance the efficiency of complex business operations with innovative technologies.',
    }" />
    <!----------------------------------------------------------------------------------->

    <!-------------------Our Enterprise Software Development Solutions----------------------->
    <ThreeCardsSections :data="{
      sectionData: enterpriseSoftwareDevSolutions,
      backgroundColor: 'bgColor-normal-grey',
    }" />
    <!----------------------------------------------------------------------------------->

    <!------------------------Enterprise Software Development Lifecycle----------------------------->
    <section class="lg:py-32 py-14 overflow-hidden bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <div class="text-center">
          <h2 v-in-viewport>{{ ESD_lifecyle_timeline.title }} <span class="bgFill"><span class="textClip color-white">{{
            ESD_lifecyle_timeline.animated_word }}</span></span></h2>
        </div>

        <div class="mt-4 lg:mt-12">
          <div class="teams_approach_timeline ESD_lifecyle_timeline">
            <div class="approach_wrapper">
              <template v-for="(step, i) in ESD_lifecyle_timeline.steps">
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

      </div>
    </section>
    <!----------------------------------------------------------------------------------->

    <!--------------------------------Our Success Stories---------------------------------->
    <div class=" bgColor-normal-grey">
      <CaseStudiesSection :data="{
        title: 'Software Development Succes Stories',
        animated_word: '',
        description: '',
        getCasesData,
        isDarkMode: false,
      }" />
    </div>
    <!------------------------------------------------------------------------------------->

    <!------------------- Benefits of Enterprise Software Development -------------------->
    <ThreeCardsSections :data="{
      sectionData: Benefits_of_EnterpriseSoftwareDevelopment,
      backgroundColor: 'bgColor-white',
    }" />
    <!----------------------------------------------------------------------------------->

    <!--------------------------------------FAQs-------------------------------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-3/5">
          <div class="text-center">
            <h2 v-in-viewport>{{ FaqsData.title }} <span class="bgFill"><span class="textClip">{{
              FaqsData.animated_word }}</span></span></h2>
          </div>

          <div class="mt-8 lg:mt-16">
            <Accordion :payload="FaqsData" category="forEnterprise" />
          </div>
        </div>

      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->

    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'What Makes Our Cooperation so Special: In the Eyes',
      animated_word: 'of Customers',
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->

    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: true
    }" />
    <!----------------------------------------------------------------------------------->

  </div>
</template>
  
<script>
import FAQs from '~/static/faqs'
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
      story: { content: {} },

      enterpriseSoftwareDevSolutions: {
        title: 'Our Enterprise Software',
        animated_word: 'Development Solutions',
        description: '',
        list: [
          {
            icon: 'forEnterprise/gallery-horizontal-end.svg',
            alt: 'gallery horizontal icon',
            title: 'Mobile & Web App Development',
            description: 'Our experienced team enriches your project based on lessons from our own successes and failures. With an intimate understanding of the software development lifecycle, our team actively contributes technical and commercial ideas to ensure the success of your future app.',

            innerList: [
              {
                title: '- Idea to launch execution'
              },
              {
                title: '- Proven product experience'
              },
              {
                title: '- Tailored to your timeline, budget, goals'
              },

            ],

          },

          {
            icon: 'forEnterprise/users.svg',
            alt: 'users icon',
            title: 'IT staff augmentation',
            description: 'Expand your team and accelerate your software development process with our skilled developers. Whether you need additional resources for ongoing projects or specific expertise, we provide you with on-demand engineers without the overhead or complication of traditional hiring processes.',
          },
          {
            icon: 'forEnterprise/layout-template.svg',
            alt: 'layout-template icon',
            title: 'Outsource PMO',
            description: 'By bringing in our Outsourced PMO function, we help you improve your project management processes, allowing you to get the benefits of diverse frameworks. Our expertise lies in guiding you to use the most fitting frameworks and methods that align with your unique needs and objectives. Our main goal is to drive ongoing improvements in your project management practices, ensuring your project success.',
          },
          {
            icon: 'forEnterprise/network.svg',
            alt: 'network icon',
            title: 'Custom Business Applications',
            description: 'With strong experience in building and supporting adaptable ecosystems, we excel at working within your existing infrastructure and business principles. We specialise in taking existing structures and delivering enterprise-grade solutions that seamlessly integrate with your current systems.',
            innerList: [
              {
                title: '- Aligned with existing infrastructure'
              },
              {
                title: '- Delivering enterprise-grade solutions'
              },
              {
                title: '- Impartial recommendations'
              },

            ],
          },
          {
            icon: 'forEnterprise/layout-template.svg',
            alt: 'layout-template icon',
            title: 'Team augmentation',
            description: 'We specialise in building development teams and structuring them to operate independently and autonomously, reporting directly into your business channels. Designed especially for your organisation based on your needs, structure, and culture, our dedicated development teams are committed to delivering exceptional results aligned with your goals and objectives.',
          },
          {
            icon: 'forEnterprise/network.svg',
            alt: 'network icon',
            title: 'Business intelligence and data science',
            description: 'Our team of dedicated data and BI specialists tailor our services to your business requirements We collaborate within your current analytics framework or provide recommendations for tailored tools, guaranteeing consistent and dependable data delivery for seamless consumption every time. From selecting and implementing the ideal BI tools to drafting dynamic dashboards and reports, our comprehensive service transforms your data into a powerful asset, enabling you to improve your business operations through accessible and insightful information',
          }


        ]
      },

      Benefits_of_EnterpriseSoftwareDevelopment: {

        title: "Benefits of Enterprise Software",
        animated_word: "Development",
        description: "",

        list: [
          {
            icon: "forEnterprise/badge-dollar-sign.svg",
            alt: "Dollar icon",
            title: "Cost efficiency",
            description: "We work closely with you through every stage of the development process, making sure we tackle risks and set your technology investments up for success",
          },
          {
            icon: "forEnterprise/target.svg",
            alt: "target icon",
            title: "Business focus",
            description: "We support your business from ideation to launch, offering tailored solutions for your projects needs.",
          },
          {
            icon: "forEnterprise/shield-check.svg",
            alt: "shield-check icon",
            title: "Security",
            description: "We implement security measures during the software development process to ensure that the software can withstand attacks.",
          }
        ]

      },

      ESD_lifecyle_timeline: {
        title: "Enterprise Software Development",
        animated_word: "Lifecycle",
        steps: [
          {
            count: "01",
            title: "Requirement Gathering",
            description: "Identifying and documenting the software requirements, including functional and nonfunctional aspects, user expectations, and project goals",
          },
          {
            count: "02",
            title: "System Design",
            description: "Creating a detailed system design based on the requirements gathered, including architectural design, database design, interface design, and other technical specifications.",
          },
          {
            count: "03",
            title: "Development",
            description: "Transforming the design into a functional software application by preparing the technical environment, building the systems, integrating and testing, and handling errors and exceptions.",
          },
          {
            count: "04",
            title: "Testing",
            description: "Verifying that the developed software meets the specified requirements and functions as intended with unit testing, integration testing, system testing, and user acceptance testing.",
          },
          {
            count: "05",
            title: "Deployment",
            description: "Deploying the software to the production environment. This phase involves activities like installation, configuration, data migration, and user training.",
          },
          {
            count: "06",
            title: "Maintenance and Support",
            description: "Regularly monitoring, updating, and enhancing the software to address issues, add new features, and ensure ongoing functionality and performance.",
          },



        ]
      },

      FaqsData: {
        title: "Enterprise Development Software",
        animated_word: "FAQ",

        faqs: FAQs.list
      },

    }
  },

  head() {
    return {
      title: 'Enterprise Software Development Services | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Empower Your Enterprise with Custom Software Development Services. Vodworks Offers Expert Development Solutions for Seamless Business Transformation.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'enterprise software development, enterprise game development software, enterprise development software, enterprise software development company, enterprise software development services, enterprise software development companies, custom enterprise software development, custom enterprise software development services, enterprise software development firm, software development enterprise, custom enterprise software development services, enterprise custom software development'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Enterprise Software Development Services | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Empower Your Enterprise with Custom Software Development Services. Vodworks Offers Expert Development Solutions for Seamless Business Transformation.",
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

  }

}
</script>
    