<template>
  <div>

    <IndustriesHeroSection :industries="getIndustriesData" :page="getPageDetails" :button="{
      btnURL: false
    }" />

    <!---------------------------------------------------------------------------------------------------->
    <IndustriesSolutionCardsSection :data="{
      SingleIndustrySolutionData,
      gridlayout: 'four-cols'
    }" />
    <!---------------------------------------------------------------------------------------------------->



    <!--------------------------------------------------------------------------------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">

        <div class="text-center mx-auto w-full lg:w-3/5">
          <h2 v-in-viewport>{{ Our_Journey_in_Web3.title }} <span class="bgFill"> <span class="textClip">{{
            Our_Journey_in_Web3.animated_word }}</span></span></h2>
          <p class="mt-4 lg:mt-8">{{ Our_Journey_in_Web3.description }}</p>
        </div>

        <div class="mt-8 lg:mt-16">

          <div class="web3-journey-wrapper">

            <template v-for="(journey, i) in Our_Journey_in_Web3.list">
              <div :key="i" class="journey hvr-top">
                <div class="year">
                  <h5 class="color-primary-red bgColor-white">{{ journey.year }}</h5>
                </div>
                <h6 class="color-primary-red">{{ journey.title }}</h6>
                <p class="text-small mt-2">{{ journey.description }}</p>
              </div>
            </template>

          </div>

        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------------->



    <!--------------------------------Our Success Stories---------------------------------->
    <CaseStudiesSection :data="{
      title: 'Web3 Development Case Studies',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->


    <!----------------------------------------- Blog ----------------------------------------------------->
    <ArticlesSections :data="{
      title: 'Related Web3 Development Blog Posts ',
      animated_word: '',
      getBlogData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->





    <!------------------------------------------------------------------------------------------>
    <Web3ExpertsSection :data="{
      title: 'Meet Our',
      animated_word: 'Web3 Experts',
      description: 'We work with diverse clients, spanning from startups to large enterprises in various industries. Our adaptable team excels in tailoring solutions to unique working styles and needs, driving innovation with new technologies.',
      getDataExpertsData,
      isDarkMode: true
    }" />

    <!------------------------------------------------------------------------------------------>

    <!-------------------------------------------FAQs----------------------------------------------------->
    <section class="lg:py-32 py-14">
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
      title: 'What Our Clients',
      animated_word: 'Say',
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------------->




    <!-------------------------------------- About Vodworks ---------------------------------------->
    <AboutVodworks :data="{
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------->


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
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allCasesRes, allArticlesRes, dataTeamRes, allTestimonialsRes] = await Promise.all([

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
      // Core:       24d738a4-ad30-45f7-9ec6-3584eb0ddbe0
      // Data:       87a4dfac-ca7d-4605-92d1-b95a7bee0a85
      // Consulting: 6e27734f-2f09-4108-9292-b27bd8a17870
      // Web3: 09d71ae5-67eb-4d4b-b250-3a69421b527f
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'teams/',
        resolve_relations: 'teams-container.teams',
        'filter_query[teams_categories][exists]': '09d71ae5-67eb-4d4b-b250-3a69421b527f'
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
      dataTeam: dataTeamRes.data,
      allTestimonials: allTestimonialsRes.data,
    }

  },


  data() {
    return {
      story: { content: {} },
      SingleIndustrySolutionData: {
        title: "Web3 Development Solutions",
        animated_word: "We Provide",
        list: [
          {
            icon: "wallet.svg",
            alt: "wallet icon",

            title: "Web3 Strategy Consulting",
            description: "Working closely with your team, we consider your industry and business to identify opportunities where we can integrate web3 solutions to improve operational efficiency and drive sustainable growth",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "Backend Development.svg",
            alt: "laptop icon",

            title: "Custom Web3 Software Development",
            description: "Building on our knowledge and application web3 technologies, we develop tailored solutions using web3 technology to meet your unique business needs",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "clipboard.svg",
            alt: "clipboard icon",

            title: "dApp Development",
            description: "We design and build decentralised applications (dApps) based on your needs. We use blockchain technology to create secure, efficient, and user-friendly dApps.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "scalable-app.svg",
            alt: "scalable-app icon",

            title: "Web3 Wallets",
            description: "We design and build secure and user-friendly digital wallets that seamlessly integrate with blockchain applications. We prioritize safety and accessibility of your digital assets within the web3 ecosystem",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "lending.svg",
            alt: "lending icon",

            title: "Web3 AML and Compliance",
            description: "We ensure your blockchain-based operations meet regulatory requirements. We offer robust tools and strategies to facilitate Anti-Money-Laundering (AML) compliance within the web3 ecosystem",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "security.svg",
            alt: "security icon",

            title: "Web3 Gaming Integration",
            description: "We enable the transformation of web3 games into web3 experience, allowing your business to reap the benefits of blockchain technology. We focus on making the adoption of web3 features as seamless as possible, benefiting your gaming ecosystem",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db-with-spark.svg",
            alt: "db-with-spark icon",

            title: "Content Monetisation and Asset Management",
            description: "We have developed a customizable web3 digital asset managment platform that can be leveraged across industries and empowers businesses to harness the benefits of web3. Our platform offers new unique ways to use digital assets to engage audiences, create revenue, and stay safe and compliant in the web3 ecosystem",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "wallet-cards.svg",
            alt: "wallet-cards icon",

            title: "Rights Management",
            description: "Being specilised in the video industry, we have developed a unique solutions that transforms user rights into digital assets, allowing your business greater access to audiences and have better security against piracy and password sharing",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          }
        ]
      },

      FaqsData: {
        title: "FAQ About Web3 ",
        animated_word: "Development",
        faqs: [
          {
            id: "1",
            isOpen: false,
            question: "Do you collaborate with startups for software development projects?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "2",
            isOpen: false,
            question: "Is on-demand developer availability among your offerings in software development?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "3",
            isOpen: false,
            question: "Who owns the IP of my application code/will I own the source code?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "4",
            isOpen: false,
            question: "In what industries can Web3 technology be implemented?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "5",
            isOpen: false,
            question: "How do you overcome challenges of Web3 as it's still emerging?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ]
      },

      Our_Journey_in_Web3: {
        title: "Our Journey in",
        animated_word: "Web3",
        description: "Since 2018, our team at Vodworks has been passionately working on numerous groundbreaking projects in the fields of blockchain and Web3. Our primary focus has been on exploring alternative applications, eliminating friction that hinders mass adoption, and revolutionizing the game industry.",
        list: [
          {
            year: "2018",
            under_dev: false,
            title: "First blockchain PoC (Fair Dice Game)",
            description: "Exploring alternative use-cases for blockchain other then crypto"
          },
          {
            year: "2020",
            under_dev: false,
            title: "Seamless fiat to crypto onramp",
            description: "Exploring alternative use-cases for blockchain other then crypto"
          },
          {
            year: "2021",
            under_dev: false,
            title: "DeFi platform to production",
            description: "Built a product that used the benefits of DeFi for access to liquidity (product was taken to market)"
          },
          {
            year: "2022 H1",
            under_dev: false,
            title: "Consulting and development for Web3 DeFi game",
            description: "Consulted and developed a web3 DeFi game for a client"
          },
          {
            year: "2022 H2",
            under_dev: true,
            title: "Kumocore product starts development",
            description: "Building an in-house content monetisation platform for web3"
          }
        ]

      },


    }
  },

  head() {
    return {
      title: 'Web3 Software Development Company & Services | Vodworks',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Empowering the Future: Vodworks - Your Premier Web3 Software Partner for Innovative Development & Services. Talk to our Web3 experts TODAY!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'web3 development, web 3 development, web3 development company, web3 services, web 3 agency, web 3 company, web 3.0 developer, web3 development services, web 3 developers, web 3.0 development, web3 development agency, web3 app development, web3 software, web3 solutions'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Web3 Software Development Company & Services | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Empowering the Future: Vodworks - Your Premier Web3 Software Partner for Innovative Development & Services. Talk to our Web3 experts TODAY!',
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
    getDataExpertsData() {
      return this.dataTeam
    },
    getTestimonialsData() {
      return this.allTestimonials
    },

  }

}
</script>
  
