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



    <!------------------------------ Why Choose Vodworks?-------------------------------->
    <FeaturedCards3sInRow :data="{
      content: why_choose_vodworks,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------->


    <!----------------------------------------------------------------------------------->
    <FeaturedDetailedCtaSection :data="benefits" />
    <!----------------------------------------------------------------------------------->

    <!----------------------------------------------------------------------------------->

    <div class="bgColor-normal-grey">
      <ArticlesSections :data="{
        getArticlesData,
        isDarkMode: false
      }" />
    </div>

    <!----------------------------------------------------------------------------------->


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
        title: "Ecommerce Software & Retail Services",
        animated_word: "We Offer",
        list: [

          {
            icon: "locate-fixed.svg",
            alt: "locate-fixed icon",

            title: "Platform Implementation",
            description: "We select and implement the best eCommerce platform for your business, with focus on driving revenue growth and improving online customer engagement. We also provide ongoing support and security measures to ensure continued success and compliance with industry standards",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "users-2.svg",
            alt: "users icon",

            title: "Custom Enterprise Solutions",
            description: "We build custom enterprise solutions for eCommerce and retail, whether you require an end-user application or internal business tool. Our solutions are designed to meet your needs, optimising efficiency and improving customer experience",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "scan-face.svg",
            alt: "scan-face icon",

            title: "Custom Loyalty Applications",
            description: "With strong knowledge and experience in loyalty applications and gamification, our team creates engaging solutions that will help drive your customer loyalty and build lasting engagement.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "integration.svg",
            alt: "integration icon",

            title: "System Integration",
            description: "We provide end-to-end system integration services, seamlessly integrating various software and systems to ensure smooth data flow, process automation and improving operational efficiency of your eCommerce and retail business",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "web3-assets.svg",
            alt: "web3-assets icon",

            title: "Web3 Asset Management and Monetisation",
            description: "By leveraging the power of web3 technology, we build solutions for businesses to manage and monetise your digital assets, driving innovation and revenue growth",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          },
          {
            icon: "db.svg",
            alt: "db icon",

            title: "Data and BI Solutions",
            description: "We provide secure, compliant, and optimised data services for eCommerce and retail players, offering your business invaluable insights to enhance operations and make informed decisions.",

            btnText: "Let's talk",
            btnURL: "#GetInTouchWithUs",
          }
        ]
      },
      why_choose_vodworks: {
        title: "Why Choose Vodworks?",

        list: [
          {
            title: "Proven Track Record",
            description: "Our comprehensive experience in eCommerce and Retail will help deliver a revenue-driven solution that is both aligned with industry regulations, and has a seamless user experience."
          },
          {
            title: "Innovative Custom Software Solutions",
            description: "Committed to innovation, constant industry research and technology advancements, our team ensures your project stands out in the market and meets your needs."
          },
          {
            title: "Cutting-Edge Tech Stack",
            description: "With knowledge of a broad range of tools and technologies, team of Vodworks experts  will carefully select the appropriate tools and tech stack to ensure we deliver on time and within budget."
          }
        ]
      },
      benefits: {
        title: "Get in Touch with Our Team",

        list: [
          {
            intial_title: 'Stay competitive',
            remaning_title: "by leveraging our specialised knowledge"
          },
          {
            intial_title: 'Reduce development time and cost',
            remaning_title: "by avoiding the hiring overhead "
          },
          {
            intial_title: 'Build scalable, adaptable software',
            remaning_title: "that meets your evolving business needs"
          },
        ]
      },

      FaqsData: {
        title: "FAQ About Retail & Ecommerce",
        animated_word: "Software Development",
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
            question: "Do you provide Proof of Concepts (PoCs) during software development?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "3",
            isOpen: false,
            question: "What is the estimated timeline for creating a Minimum Viable Product (MVP)?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "4",
            isOpen: false,
            question: "Do you have experience with e-commerce compliance?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: "5",
            isOpen: false,
            question: "How do you manage and accommodate change requests in software development?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ]
      },

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