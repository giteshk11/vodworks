<template>
  <div>
    <PageHeroWithAnimatedTitle :data="{
      title: 'Software Development',
      animated_word: 'for Startups',
      description: 'Our expert team collaborates closely with startups, helping them navigate the technical landscape, build scalable and market-ready software, and bring their vision to life.',
    }" />


    <section class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>Startup Software Development Services & Solutions</h2>
        </div>
      </div>
    </section>



    <!----------------------------------------------------------------------------------->
    <section class="lg:py-32 py-14 overflow-hidden bgColor-tertiary-black color-white">
      <div class="mx-auto container">


        <div class="text-center mx-auto w-full lg:w-3/5">
          <h2 v-in-viewport>{{ how_startup_Dev_works.title }} <span class="bgFill"><span class="textClip color-white">{{
            how_startup_Dev_works.animated_word }}</span></span></h2>
        </div>


        <div class="mt-4 lg:mt-12">
          <div class="teams_approach_timeline how_startup_Dev_works_timeline">
            <div class="approach_wrapper">
              <template v-for="(step, i) in how_startup_Dev_works.steps">
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
        title: 'Software Development Case Studies',
        animated_word: '',
        description: '',
        getCasesData,
        isDarkMode: false,
      }" />
    </div>
    <!------------------------------------------------------------------------------------->

    <section class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>How Startups Can Benefit from Delegating Software Development</h2>
        </div>
      </div>
    </section>





    <!--------------------------------------FAQs-------------------------------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-3/5">
          <div class="text-center">
            <h2 v-in-viewport>{{ FaqsData.title }} <span class="bgFill"><span class="textClip">{{
              FaqsData.animated_word }}</span></span></h2>
          </div>

          <div class="mt-8 lg:mt-16">
            <Accordion :payload="FaqsData" />
          </div>
        </div>

      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->



    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'Clients About ',
      animated_word: 'Vodworks',
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <FeaturedCTA :data="{
      title: `Looking for a Bespoke Software Solution for Your Start-up?`,
      btnText: 'Get in touch with us',
      btnURL: '/contact',
      imgSrc: 'expert.png',
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-4',
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: true
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
      story: { content: {} },

      Startup_SDev_Services_Solutions: {
        title: "",
        animated_word: "",
        description: "",
        list: [
          {
            icon: "forEnterprise/shield-check.svg",
            alt: "",
            title: "MVP & Rapid POC's",
            description: "At our core, we began as a trusted consultancy partner, helping startups navigate the intricacies of requirements, R&D, development plans, and delivery timelines. After a decade of experience with clients and its own products, Vodworks is now developing MVPs & POCs for startups across diverse sectors, from gaming and streaming to banking and anti-money laundering, and beyond.",
          },
          {
            icon: "forEnterprise/shield-check.svg",
            alt: "",
            title: "Investment & Incubation",
            description: "Following the creation of tailored technology solutions for your project, our dedicated team will assist you in the establishment of a fully operational open-source project. Vodworks is committed to being your trusted software development partner, and with our tech expertise and resources, taking your startup to the next, investment stage.",
          },
          {
            icon: "forEnterprise/shield-check.svg",
            alt: "",
            title: "Mobile & Web App Development",
            description: "Our mission is to develop web and mobile apps that align seamlessly with the unique requirements of your project, catering to a diverse spectrum of platforms and devices. Vodworks team is committed to delivering a tailor-made approach and transforming your ideas into polished, user-friendly applications that resonate with your target audience.",
          },
          {
            icon: "forEnterprise/shield-check.svg",
            alt: "",
            title: "Team Augmentation",
            description: "Building a full-time team from scratch can be time-consuming, and often lacking benefits for your project's requirements. Bringing experts on a project-by-project basis guarantees the right skills and industry expertise for your unique needs. Vodworks tech experts will seamlessly integrate and complement your existing team, and deliver exceptional results.",
          },
          {
            icon: "forEnterprise/shield-check.svg",
            alt: "",
            title: "Project Rescue",
            description: "Whether you have limited in-house resources or vendor challenges, Vodworks team of tech experts is ready to step in with a comprehensive project rescue solution. We start by analysing the existing issues and making recommendations. With a solid project recovery plan in place, we move to the development and QA stages to deliver tech solutions tailored to meet your project's unique requirements. Post-launch, Vodworks provides 24/7 support for your startup.",
          }
        ]
      },


      Benefit_from_Delegating_SD: {
        title: "How Startups Can Benefit from Delegating",
        animated_word: " Software Development",
        description: "",
        list: [
          {
            icon: "forEnterprise/shield-check.svg",
            alt: "",
            title: "Achieve Business Objectives",
            description: "Our team is committed to being your trusted software development partner, and with our tech expertise and resources, reaching your project goals",
          },
          {
            icon: "forEnterprise/shield-check.svg",
            alt: "",
            title: "Cut Development Expenses",
            description: "Dedicated team works closely with you through every stage of the startup development process, tackling risks and setting your technology investments up for success.",
          },
          {
            icon: "forEnterprise/shield-check.svg",
            alt: "",
            title: "Tap into Industry Experts",
            description: "With more than 150 highly-skilled developers and a global network of experts, we guarantee the right technical talent for your industry needs.",
          },

        ]
      },


      FaqsData: {
        title: "Enterprise Development Software",
        animated_word: "FAQ",
        faqs: [
          {
            id: "1",
            isOpen: false,
            question: "Is on-demand developer availability among your offerings in software development?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "2",
            isOpen: false,
            question: "Are we able to vet the developers before we take them on-board?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "3",
            isOpen: false,
            question: "How do you manage and accommodate change requests in software development?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "4",
            isOpen: false,
            question: "Who owns the IP of my application code/will I own the source code?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "5",
            isOpen: false,
            question: "How do you handle different timezones?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ]
      },


      how_startup_Dev_works: {
        title: "How Startup Development",
        animated_word: "Works",
        steps: [
          {
            count: "01",
            title: "Concept",
            description: "Idea validation and business analysis",
          },
          {
            count: "02",
            title: "Prototype",
            description: "Testing the first version of your product",
          },
          {
            count: "03",
            title: "MVP",
            description: "Development of the working and usable product to analyse the market",
          },
          {
            count: "04",
            title: "Full Product",
            description: "Full-fledged product development and feature improvement",
          },
          {
            count: "05",
            title: "Scaling",
            description: "Expansion of your product in order to increase profitability",
          },

        ]
      }



    }
  },

  head() {
    return {
      title: 'For Startups',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'For Startups',
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
    