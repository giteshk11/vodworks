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
      resolve_relations: 'industries-container.industries,testimonial-container.testimonials_list,case-studies-container.case_studies',
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
        title: "Web3 Development Solutions",
        animated_word: "We Provide",
        list: [
          {
            icon: "webcam.svg",
            alt: "",

            title: "Web3 Strategy Consulting",
            description: "Working closely with your team, we consider your industry and business to identify opportunities where we can integrate web3 solutions to improve operational efficiency and drive sustainable growth",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Custom Web3 Software Development",
            description: "Building on our knowledge and application web3 technologies, we develop tailored solutions using web3 technology to meet your unique business needs",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "dApp Development",
            description: "We design and build decentralised applications (dApps) based on your needs. We use blockchain technology to create secure, efficient, and user-friendly dApps.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Web3 Wallets",
            description: "We design and build secure and user-friendly digital wallets that seamlessly integrate with blockchain applications. We prioritize safety and accessibility of your digital assets within the web3 ecosystem",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Web3 AML and Compliance",
            description: "We ensure your blockchain-based operations meet regulatory requirements. We offer robust tools and strategies to facilitate Anti-Money-Laundering (AML) compliance within the web3 ecosystem",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Web3 Gaming Integration",
            description: "We enable the transformation of web3 games into web3 experience, allowing your business to reap the benefits of blockchain technology. We focus on making the adoption of web3 features as seamless as possible, benefiting your gaming ecosystem",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Content Monetisation and Asset Management",
            description: "We have developed a customizable web3 digital asset managment platform that can be leveraged across industries and empowers businesses to harness the benefits of web3. Our platform offers new unique ways to use digital assets to engage audiences, create revenue, and stay safe and compliant in the web3 ecosystem",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "webcam.svg",
            alt: "",

            title: "Rights Management",
            description: "Being specilised in the video industry, we have developed a unique solutions that transforms user rights into digital assets, allowing your business greater access to audiences and have better security against piracy and password sharing",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
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
    getTestimonialsData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'testimonial-container';
      })
    },
    getCaseStudiesData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'case-studies-container';
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
  
