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
    <CaseStudiesSection :data="{
      title: 'Our Case Studies for Compliance and Security',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: false,
    }" />
    <!------------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <div class="bgColor-normal-grey">
      <FeaturedCTA :data="{
        title: `Consult with our Compliance and Security Industry Experts!`,
        btnText: 'Get in touch',
        btnURL: '/contact',
        imgSrc: 'expert.png',
        col_1: 'md:col-span-7',
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


    <!----------------------------------------- Blog ----------------------------------------------------->
    <ArticlesSections :data="{
      title: 'Related Articles',
      animated_word: '',
      getBlogData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->



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
    const [pageDataRes, allCasesRes, allArticlesRes] = await Promise.all([

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
        resolve_relations: 'blog-container.blog',
      }),

    ])
    return {
      pageData: pageDataRes.data,
      allCases: allCasesRes.data,
      allArticles: allArticlesRes.data,
    }

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

  }


}
</script>
