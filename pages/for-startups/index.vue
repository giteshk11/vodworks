<template>
  <div>
    <PageHeroWithAnimatedTitle :data="{
      title: 'Software Development',
      animated_word: 'for Startups',
      description: 'Our expert team collaborates closely with startups, helping them navigate the technical landscape, build scalable and market-ready software, and bring their vision to life.',
    }" />




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
        title: "Startup Software Development",
        animated_word: "Services & Solutions",
        description: "",
        list: [
          {
            icon: "forStartUp/mvp.svg",
            alt: "Icon",
            title: "MVP & Rapid POC's",
            description: "At our core, we began as a trusted consultancy partner, helping startups navigate the intricacies of requirements, R&D, development plans, and delivery timelines. After a decade of experience with clients and its own products, Vodworks is now developing MVPs & POCs for startups across diverse sectors, from gaming and streaming to banking and anti-money laundering, and beyond.",
          },
          {
            icon: "forStartUp/pie-chart.svg",
            alt: "Icon",
            title: "Investment & Incubation",
            description: "Following the creation of tailored technology solutions for your project, our dedicated team will assist you in the establishment of a fully operational open-source project. Vodworks is committed to being your trusted software development partner, and with our tech expertise and resources, taking your startup to the next, investment stage.",
          },
          {
            icon: "forStartUp/gallery-horizontal-end.svg",
            alt: "Icon",
            title: "Mobile & Web App Development",
            description: "Our mission is to develop web and mobile apps that align seamlessly with the unique requirements of your project, catering to a diverse spectrum of platforms and devices. Vodworks team is committed to delivering a tailor-made approach and transforming your ideas into polished, user-friendly applications that resonate with your target audience.",
          },
          {
            icon: "forStartUp/users-2.svg",
            alt: "Icon",
            title: "Team Augmentation",
            description: "Building a full-time team from scratch can be time-consuming, and often lacking benefits for your project's requirements. Bringing experts on a project-by-project basis guarantees the right skills and industry expertise for your unique needs. Vodworks tech experts will seamlessly integrate and complement your existing team, and deliver exceptional results.",
          },
          {
            icon: "forStartUp/network.svg",
            alt: "Icon",
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
            icon: "forStartUp/user-book.svg",
            alt: "icon",
            title: "Achieve Business Objectives",
            description: "Our team is committed to being your trusted software development partner, and with our tech expertise and resources, reaching your project goals",
          },
          {
            icon: "forStartUp/binary.svg",
            alt: "icon",
            title: "Cut Development Expenses",
            description: "Dedicated team works closely with you through every stage of the startup development process, tackling risks and setting your technology investments up for success.",
          },
          {
            icon: "forStartUp/user-check-2.svg",
            alt: "icon",
            title: "Tap into Industry Experts",
            description: "With more than 150 highly-skilled developers and a global network of experts, we guarantee the right technical talent for your industry needs.",
          },

        ]
      },


      FaqsData: {
        title: "Startup Software",
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
      title: 'Software Development for Startups | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Nurturing startup dreams: Vodworks - your partner in bespoke startup software development tailored for success. Know more about key expertise now!",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'software development for startups, startup software, startup software development, custom software development for startups, software development services for startups, startup outsource software development, startup software development companies, software development startup companies, startup software development company, software development startup company, software development services for startup, software development companies for startups, software development company for startups'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Software Development for Startups | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Nurturing startup dreams: Vodworks - your partner in bespoke startup software development tailored for success. Know more about key expertise now!",
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
    