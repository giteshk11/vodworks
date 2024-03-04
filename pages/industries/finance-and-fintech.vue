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
    <CaseStudiesSection :data="{
      // title: 'Our Finance and Fintech Case Studies',
      title:'Our Case Studies',
      animated_word: '',
      description: '',
      getCasesData,
      isDarkMode: true,
    }" />
    <!------------------------------------------------------------------------------------->


    <!------------------------------------------------------------->
    <FeaturedCards3sInRow :data="{
      content: why_choose_vodworks,
      isDarkMode: false
    }" />
    <!----------------------------------------------------------------------------------->


    <!------------------------------------Featured CTA Version-1 ----------------------------------------->
    <div class="bgColor-normal-grey">
      <FeaturedCTA :data="{
        title: `Consult with our Fintech Industry Expert!`,
        btnText: 'Get in touch',
        btnURL: '/contact',
        imgSrc: 'jaffer.png',
        col_1: 'md:col-span-7',
        col_2: 'md:col-span-4',

      }" />
    </div>
    <!---------------------------------------------------------------------------------------------------->


    <!----------------------------------------- Blog ----------------------------------------------------->
    <ArticlesSections :data="{
      title: 'Vodworks Related Blog ',
      animated_word: 'Insights',
      getBlogData,
      isDarkMode: false
    }" />
    <!---------------------------------------------------------------------------------------------------->


    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
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
        per_page: 10,
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
            icon: "Backend-Development.svg",
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
      why_choose_vodworks: {
        title: "Why Choose Vodworks?",
        list: [
          {
            title: "Strong industry expertise",
            description: "With strong experience in the financial industry, our team speaks your language and can quickly translate your requirements into a tailored product that perfectly meets your needs"
          },
          {
            title: "Security and compliance focused",
            description: "We prioritise security and compliance in our software systems, ensuring full adherence to your organisation's and jurisdiction's regulations to protect both you and your customers"
          },
          {
            title: "End-to-end development",
            description: "We provide full support throughout your development journey, guiding you from inception to completion and ensuring you stay informed about the quickly-changing financial landscape"
          }
        ]
      }
    }
  },

  head() {
    return {
      title: 'Financial Software Development Technology | Vodworks',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Vodworks excels in Financial Software Development & RegTech. Elevate financial operations with our advanced solutions right NOW!'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'financial technology, regulatory technology, financial software development, financial software development company, financial software developers, software financial services, fintech software development,financial software development services, fintech software development company, financial services software development, fintech development services, fintech solutions for banks,fintech software development services, banking software developers, fintech software solutions, regtech software solutions, financial services software solutions'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Financial Software Development Technology | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Vodworks excels in Financial Software Development & RegTech. Elevate financial operations with our advanced solutions right NOW!',
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