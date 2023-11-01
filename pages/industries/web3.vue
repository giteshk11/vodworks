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


    <ArticlesSections :data="{
      getArticlesData,
      isDarkMode: false
    }" />



    <!------------------------------------------------------------------------------------------>
    <Web3ExpertsSection :data="{
      getTeamsData,
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
    <Testimonials :data="{
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
      resolve_relations: 'industries-container.industries,testimonial-container.testimonials_list,case-studies-container.case_studies,teams-container.teams,blog-container.blogs,gaming-faqs-container.faqs',
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

    getTeamsData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'teams-container';
      })
    },


    getTestimonialsData() {
      return this.story.content.body.find(function (obj) {
        return obj.component === 'testimonial-container';
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
  
