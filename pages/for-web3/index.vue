<template>
  <div>


    <!--------------------------------------- HERO ----------------------------------------->
    <PageHeroWithAnimatedTitle :data="{
      title: 'Web3 Development Company',
      animated_word: '',
      description: `Our dedicated R&D team is on a mission to use blockchain and web3 technologies to address real challenges across traditional and non-traditional sectors by removing the complexities of web3 and streamlining it's adoption process.`,
    }" />
    <!-------------------------------------------------------------------------------------->

    <!------------------ Web3 Development Services We Perform ------------------------------>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-4/5">
          <div class="text-center">
            <h2 v-in-viewport>{{ Web3_Development_Services_We_Perform.title }} <span class="bgFill"><span
                  class="textClip">{{
                    Web3_Development_Services_We_Perform.animated_word }}</span></span></h2>
          </div>

          <div class="center-two-ele-in-grid mx-auto mt-8 lg:mt-16 gap-4">

            <template v-for="(card, i) in Web3_Development_Services_We_Perform.list">
              <div :key="i" class="default-card card-utilities hvr-effect item">
                <img class="hvr-top" :src="`${require('~/assets/img/icons/' + card.icon)}`" :alt="card.alt" />
                <h4 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h4>
                <p class="text-card flex-grow-1">{{ card.description }}</p>

              </div>
            </template>

          </div>
        </div>

      </div>
    </section>
    <!-------------------------------------------------------------------------------------->

    <!--------------------------------- Explore Kumocore ---------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container color-white">

        <div
          class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 items-center mx-auto text-center md:text-left">

          <div class="md:col-span-7">
            <h2 class="heading-1 kumoCore_title"> {{ explore_kumocore.title }} <img
                :src="`${require('~/assets/img/icons/forWeb3/' + explore_kumocore.kumo_logo)}`" alt="kumocore logo" />
            </h2>
            <p class="mt-2 lg:mt-4 text-big w-full lg:w-3/5">{{ explore_kumocore.description }}</p>


            <a :href="explore_kumocore.btnURL" :target="explore_kumocore.target"
              class="btn-primary btn-lg mt-16 hidden lg:inline-block invisible md:visible">
              {{ explore_kumocore.btnText }}
            </a>
          </div>
          <div class="md:col-span-5">
            <div v-for="(card, i) in explore_kumocore.list" :key="i" class="my-8">
              <h3 class="mb-4 inline-block capitalize in-viewport" data-in-viewport="i12"><span class="bgFill"><span
                    class="textClip color-white">{{ card.title }}</span></span></h3>
              <p class="text-regular">{{ card.description }}</p>
            </div>
            <a :href="explore_kumocore.btnURL" :target="explore_kumocore.target"
              class="btn-primary btn-lg mt-8 lg:mt-16 inline-block lg:hidden visible lg:invisible">
              {{ explore_kumocore.btnText }}
            </a>
          </div>

        </div>
      </div>
    </section>
    <!-------------------------------------------------------------------------------------->

    <!------------------ Our Value-Driven Web3 Development Process-------------------------->
    <ThreeCardsSections :data="{
      sectionData: Our_ValueDriven_Web3Development_Process,
      backgroundColor: 'bgColor-white',
    }" />
    <!-------------------------------------------------------------------------------------->

    <!--------------------------------Our Success Stories---------------------------------->
    <div class="bgColor-normal-grey">
      <CaseStudiesSection :data="{
        title: 'Vodworks Web3 Case Studies',
        animated_word: '',
        description: '',
        getCasesData,
        isDarkMode: false,
      }" />
    </div>
    <!------------------------------------------------------------------------------------->

    <!---------------- Why Choose Us as Your Web3 Development Company -------------------->
    <ThreeCardsSections :data="{
      sectionData: Why_Choose_as_Web3_Development_Company,
      backgroundColor: 'bgColor-white',
    }" />
    <!------------------------------------------------------------------------------------->

    <!--------------------------------------FAQs-------------------------------------------------->
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-3/5">
          <div class="text-center">
            <h2 v-in-viewport>{{ FaqsData.title }} <span class="bgFill"><span class="textClip">{{
              FaqsData.animated_word }}</span></span></h2>
          </div>

          <div class="mt-8 lg:mt-16">
            <Accordion :payload="FaqsData" category="web3" />
          </div>
        </div>

      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->

    <!----------------------------- What Our Clients Say ------------------------------------->
    <WhatOurClientsSay :data="{
      title: 'Our Clients ',
      animated_word: 'Want to Say',
      getTestimonialsData,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------------->

    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title:'Get Started Your Web3 Development Project With Us!',
      isDarkSectionAtTop: true
    }" />
    <!----------------------------------------------------------------------------------------->

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

      Web3_Development_Services_We_Perform: {
        title: "Web3 Development Services",
        animated_word: " We Perform",

        list: [
          {
            icon: "forWeb3/contact-2.svg",
            alt: "icon",
            title: "Web3 Digital Asset Management",
            description: "Vodworks develops unique and new methods of utilising web3 digital assets for a variety of traditional industries, enabling your business to leverage the web3 technology, whilst also removing the complexity of blockchain for your business and its customers.",
          },
          {
            icon: "forWeb3/messages-square.svg",
            alt: "icon",
            title: "Consulting",
            description: "Our Web3 software consulting services focus on helping clients make well-informed technology investments. Leveraging the expertise and experience of our team, we guide you through all aspects of Web3 software development from technical strategy to technology implementation.",
          },
          {
            icon: "forWeb3/copy-check.svg",
            alt: "icon",
            title: "Innovation Adoption",
            description: "The transition from Web2 to Web3, or even partial implementation of Web3 technology, like many other innovative shifts, faces obstacles in grasping this complex technology. Innovation adoption can empower your business to conquer these challenges and seamlessly enter the market.",
          },
          {
            icon: "forWeb3/wallet-2.svg",
            alt: "icon",
            title: "Web3 Monetization",
            description: "Vodworks enables its customers to embrace this new technology to create new methods of engaging your audience, building new relationships with your users, developing new revenues and increasing your ARPU's.",
          },
          {
            icon: "forWeb3/wallet-cards.svg",
            alt: "icon",
            title: "Payment Orchestration Solutions",
            description: "Vodworks utilises the advantages of the blockchain technology combining multi-custody wallets and on/off ramp solutions to create innovative new ways to receive and distribute payments.",
          }
        ]
      },

      explore_kumocore: {
        title: "Explore Kumocore",
        description: "Our enterprise web3 digital asset management platform",
        kumo_logo: "kumoLogo.svg",

        btnText: "More about our product",
        btnURL: "#",
        target: "_blank",

        list: [
          {
            title: 'Engage your audience ',
            description: "Seamlessly launch existing web3 digital assets for your customers to collect, sell, and trade"
          },
          {
            title: 'Grow your revenue',
            description: "Discover new and unique ways to use web3 digital assets to boost your revenue"
          },
          {
            title: 'Stay safe and compliant',
            description: "Achieve compliance with our custom user onboarding and web3 wallet solutions"
          },
        ]
      },

      Our_ValueDriven_Web3Development_Process: {
        title: "Our Value-Driven Web3 Development",
        animated_word: " Process",
        description: "",

        list: [
          {
            icon: "forWeb3/folder-tree.svg",
            alt: "Icon",
            title: "Project Mapping",
            description: "Creating a visual diagram to ensure every member of the team shares a common understanding and to organise the priorities of your Web3 project.",
          },
          {
            icon: "forWeb3/brush.svg",
            alt: "Icon",
            title: "Technical Design",
            description: "Creating a detailed system design based on the requirements gathered, including architectural design, database design, interface design, and other technical specifications.",
          },
          {
            icon: "forWeb3/file-search.svg",
            alt: "Icon",
            title: "Development",
            description: "Transforming the design into a functional software application by preparing the technical environment, building the systems, integrating and testing, and handling errors and exceptions.",
          },
          {
            icon: "forWeb3/file-search.svg",
            alt: "Icon",
            title: "Testing",
            description: "Verifying that the developed software meets the specified requirements and functions as intended with unit testing, integration testing, system testing, and user acceptance testing.",
          },
          {
            icon: "forWeb3/picture-in-picture.svg",
            alt: "Icon",
            title: "Deployment",
            description: "Deploying the software to the production environment. This phase involves activities like installation, configuration, data migration, and user training.",
          },
          {
            icon: "forWeb3/wrench.svg",
            alt: "Icon",
            title: "Maintenance and Support",
            description: "Regularly monitoring, updating, and enhancing the software to address issues, add new features, and ensure ongoing functionality and performance.",
          }
        ]
      },

      Why_Choose_as_Web3_Development_Company: {
        title: "Why Choose Us as Your Web3 Development",
        animated_word: " Company",
        description: "",
        list: [
          {
            icon: "forWeb3/badge-dollar-sign.svg",
            title: "Cost efficiency",
            description: "We work closely with you through every stage of the development process, making sure we tackle risks and set your technology investments up for success",
          },
          {
            icon: "forWeb3/target.svg",
            title: "Business focus",
            description: "We support your business from ideation to launch, offering tailored solutions for your projects needs.",
          },
          {
            icon: "forWeb3/shield-check.svg",
            title: "Security",
            description: "We implement security measures during the software development process to ensure that the software can withstand attacks.",
          }
        ]
      },

      FaqsData: {
        title: "Web3 Software Development",
        animated_word: "FAQ",
        
        faqs: FAQs.list
      },

    }
  },

  head() {
    return {
      title: 'Web3 Software Development Services & Solutions | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Unleash Web 3 Potential: Vodworks - Your Partner in Innovative Web3 Software Development for the Next Generation of Online Experiences.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'web3 development, web3 development company, web 3 development, web3 development company, web3 services, web 3 agency, web3 game development company, web3 software, web 3 company, web 3.0 developer, web3 development services, web 3 developers, web 3.0 development, web3 development agency, web3 solutions, web3 digital assets management, web3 payments, web3 nfts'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Web3 Software Development Services & Solutions | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Unleash Web 3 Potential: Vodworks - Your Partner in Innovative Web3 Software Development for the Next Generation of Online Experiences.",
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
    