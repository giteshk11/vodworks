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
    <section v-if="getCaseStudiesData" class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="text-center">
          <h2>{{ getCaseStudiesData.title }}</h2>
        </div>
        <CaseStudiesContainer :data="getCaseStudiesData" />
        <div class="text-center">
          <NuxtLink to="/" class="btn-primary btn-lg mt-16 inline-block ">
            show all cases
          </NuxtLink>
        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <div class="bgColor-normal-grey">
      <FeaturedCTA :data="{
        title: `Consult with our Compliance and Security Industry Experts!`,
        btnText: 'Get in touch',
        btnURL: '/contact',
        imgSrc: 'expert.png',
        col_1: 'md:col-span-8',
        col_2: 'md:col-span-4',

      }" />
    </div>
    <!---------------------------------------------------------------------------------------------------->


    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <FeaturedCards3sInRow :data="{
      content: why_choose_us,
      isDarkMode: true
    }" />
    <!----------------------------------------------------------------------------------->


    <!----------------------------------------------------------------------------------->
    <ArticlesSections :data="{
      getArticlesData,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------->




    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: false
    }" />
    <!----------------------------------------------------------------------------------->

  </div>
</template>
  

<script>

const loadData = function ({
  api,
  cacheVersion,
  errorCallback,
  version,
  path,
}) {
  return api
    .get(`cdn/stories${path}`, {
      version,
      resolve_links: 'story,url',
      resolve_relations: 'industries-container.industries,testimonial-container.testimonials_list,case-studies-container.case_studies,blog-container.blogs',
      cv: cacheVersion,
    })
    .then((res) => {
      return res.data
    })
    .catch((res) => {
      if (!res.response) {
        errorCallback({
          statusCode: 404,
          message: 'Failed to receive content form api',
        })
      } else {
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data,
        })
      }
    })
}

export default {

  asyncData(context) {
    // Check if we are in the editing mode
    let editMode = true
    if (
      context.query._storyblok ||
      context.isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'))
    ) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1')
        if (window.location === window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode')
        }
      }
      editMode = true
    }
    const version = editMode ? 'draft' : 'published'
    const path = context.route.path === '/' ? '/home' : context.route.path
    // Load the JSON from the API
    return loadData({
      version,
      api: context.app.$storyapi,
      errorCallback: context.error,
      path,
    })
  },
  data() {
    return {
      story: { content: {} },
      SingleIndustrySolutionData: {
        title: "Compliance and Security Industry",
        animated_word: "Solutions",
        list: [
          {
            icon: "db-with-spark.svg",
            alt: "Data and BI icon",

            title: "GDPR and Data Compliance",
            description: "Our team is well-versed in GDPR (General Data Protection Regulation) implementation, ensuring your entire business remains compliant with data protection requirements and the protection of personal data.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "puzzle.svg",
            alt: "puzzle icon",

            title: "e-KYC and AML Implementation",
            description: " We offer identity verification and management solutions that integrate the newest technologies, including facial recognition, password recognition, and multi-factor authentication, to help your business maintain trust and security",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "file-stack.svg",
            alt: "file-stack icon",

            title: "Regulatory Reporting",
            description: " We help you streamline your business reporting processes, automating data collection and analysis to guarantee compliance and operational efficiency across the board",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "screening.svg",
            alt: "screening icon",

            title: "Transaction Monitoring and Screening",
            description: " We design systems for monitoring transactions and conducting screenings for potentially suspicious activities, providing support to help you in your efforts to fight against money laundering and fraudulent behaviour",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db.svg",
            alt: "db icon",

            title: "Data and BI Solutions",
            description: "We provide secure and compliant data services tailored to meet your compliance and security needs, ensuring your business gains access to critical insights that can drive operational efficiency and informed decision-making",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "send-to-back.svg",
            alt: "send-to-back icon",

            title: "Web3 Compliance",
            description: "We offer consulting and implementation services for web3 compliance, ensuring your web3 strategy and execution align with both local and international regulatory requirements",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },

        ]
      },
      why_choose_us: {
        title: "Why Choose Us For Your Project",

        list: [
          {
            title: "Extensive compliance expertise",
            description: "Our team of seasoned cyber security professionals help you to achieve compliance with PCI, HIPAA, SOX, GDPS, and ISO 27001 standards, ensuring your data security and regulatory requirements are met"
          },
          {
            title: "Specilised software security",
            description: "We have +10 years experience building robust and secure software platforms, tailored for clients handling the most  sensitive personal and financial data, guaranteeing the best protection for your critical information"
          },
          {
            title: "Customised solutions following best practices",
            description: "Based on your unique needs, we design and build tailored security solutions that align with your requirements and industry best practices, ensuring comprehensive protection and compliance"
          }
        ]
      }
    }
  },

  head() {
    return {
      // this title needs to be change
      title: 'Compliance and Security Software Development ',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ''
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Compliance and Security Software Development ',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            '',
        },

      ],
    }
  },

  
  computed: {
    getPageDetails() {
      return this.story.content
    },
    getIndustriesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'industries-container';
      })
    },

    getCaseStudiesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'case-studies-container';
      })
    },

    getArticlesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'blog-container';
      })
    },

  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  },

  methods: {

  },
}
</script>
