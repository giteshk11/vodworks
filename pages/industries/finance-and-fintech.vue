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


    <!--------------------------------Our Success Stories---------------------------------->
    <section v-if="getCaseStudiesData" class="lg:py-32 py-14 bgColor-tertiary-black color-white">
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


    <!------------------------------------------------------------->
    <FeaturedCards3sInRow :data="{
      content: why_choose_vodworks,
      isDarkMode:false
    }" />
    <!----------------------------------------------------------------------------------->


    <!----------------------------General CTA (Dark)---------------------------------------->
    <GeneralCTA :data="{
      title: 'Consult with our Fintech Industry Expert!',
      btnText: 'Get in touch',
      btnURL: '/contact',
      isNavigatingToContactPage: true,
      darkMode: true,
      col_1: 'md:col-span-7',
      col_2: 'md:col-span-5',
    }" />
    <!------------------------------------------------------------------------------------------>


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
        title: "Finance and Fintech Industry",
        animated_word: "Solutions",
        list: [
          {
            icon: "wallet.svg",
            alt: "wallet icon",

            title: "Custom Payment Apps and Wallets",
            description: "We build secure, user-friendly payment apps and web3 wallets, guaranteeing smooth transactions and improved user experiences, and unleashing the potential of blockchain-based financial services.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "Backend Development.svg",
            alt: "laptop icon",

            title: "AML Applications",
            description: " We develop Anti Money Laundering (AML) apps with advanced features for detecting and preventing money laundering, aiding financial institutions in bolstering compliance and preventing fraud",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "clipboard.svg",
            alt: "clipboard icon",

            title: "End-to-end Invoice Approval Systems",
            description: "With our expertise, we create bespoke invoice approval systems that streamline the process, enhancing efficiency, precision, and transparency for your business",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "scalable-app.svg",
            alt: "scalable app icon",

            title: "Insurance and Pension Apps",
            description: " We design secure and scalable applications tailored to the insurance and pension sectors, improving customer engagement, automating processes, and facilitating seamless policy and claims management",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "lending.svg",
            alt: "Lending Icon",

            title: "Lending Apps",
            description: "We develop lending apps that streamline secure and efficient loan management, covering everything from origination to repayment tracking. Our solutions empower financial institutions to optimise lending operations and elevate customer experiences",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "security.svg",
            alt: "security icon",

            title: "Cyber Security Solutions",
            description: "Our team develops security solutions that safeguard sensitive financial data, defend against cyber threats, and ensure industry regulations compliance",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db-with-spark.svg",
            alt: "Data and BI icon",

            title: "Data and BI Solutions",
            description: "We provide secure, compliant, and optimised data services for financial institutions and fintech players, offering your business invaluable insights to enhance operations and make informed decisions.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "wallet-cards.svg",
            alt: "wallet-cards icon",

            title: "Web3 Payment Solutions",
            description: "We develop fully compliant and tailored software solutions for both custodial and non-custodial Fiat-to-Crypto and Crypto-to-Fiat transactions, enabling your business to leverage the advantages of the web3 ecosystem",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          }
        ]
      },
      why_choose_vodworks:{
        title:"Why Choose Vodworks?",
        list:[
          {
            title:"Strong industry expertise",
            description:"With strong experience in the financial industry, our team speaks your language and can quickly translate your requirements into a tailored product that perfectly meets your needs"
          },
          {
            title:"Security and compliance focused",
            description:"We prioritise security and compliance in our software systems, ensuring full adherence to your organisation's and jurisdiction's regulations to protect both you and your customers"
          },
          {
            title:"End-to-end development",
            description:"We provide full support throughout your development journey, guiding you from inception to completion and ensuring you stay informed about the quickly-changing financial landscape"
          }
        ]
      }
    }
  },
  head() {
    return {
      title: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
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