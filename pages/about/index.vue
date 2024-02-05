<template>
  <div>

    <PageHeroWithAnimatedTitle :data="{ title: 'Welcome to', animated_word: 'Vodworks' }" />

    <!-------------------------------- About Us -------------------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>{{ about_us.title }}</h2>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16">
          <div>
            <p class="text-big">{{ about_us.description }}</p>
          </div>
          <div>
            <div class="zoom-in overflow-hidden">
              <img class="w-full" :src="`${require('~/assets/img/' + about_us.image)}`" :alt="about_us.alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-------------------------------------------------------------------------------->

    <!---------------------------------- Meet Our Team ------------------------------->
    <section v-if="getTeamsData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">
          <h2 v-in-viewport>Meet Our <span class="bgFill"><span class="textClip">Core Team</span></span></h2>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-4 mt-8 lg:mt-16">

          <template v-for="(card, i) in getTeamsData.stories">
            <div :key="i" class="bgColor-white card-utilities hvr-effect h-full">

              <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0 h-full">

                <div class="md:col-span-4 expert-avatar-wrapper">
                  <img :src="card.content.Avatar.filename" :alt="card.content.Avatar.alt" />
                </div>

                <div class="md:col-span-8 expert-content p-4 lg:px-8 lg:py-8">
                  <div class="flex items-center gap-4 justify-between">
                    <div>
                      <h4 class="font-bold color-primary-black">{{ card.content.Name }}</h4>
                      <p class="color-intense-grey font-medium text-regular">{{ card.content.Designation
                      }}</p>
                    </div>
                    <a target="_blank" :href="card.content.Linkedin_Url"><img src="~assets/img/icons/Linkedin-icon.svg"
                        alt="Lnkedin-icon" /></a>
                  </div>
                  <p class="mt-4 color-primary-black text-small team-descr">{{ card.content.Description }}</p>
                </div>

              </div>
            </div>
          </template>
        </div>

      </div>
    </section>
    <!-------------------------------------------------------------------------------->

    <!--------------------------- Our Story ------------------------------------------>
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-4/5">
          <h2 class="color-white">{{ our_story.title }}</h2>
          <p class="mt-4 lg:mt-8 text-big color-white">
            {{ our_story.description }}
          </p>
        </div>

        <div class=" mt-8 lg:mt-16">
          <img class="w-full hidden md:inline-block" :src="`${require('~/assets/img/' + our_story.image_web)}`"
            :alt="our_story.alt" />
          <img class="w-full md:hidden" :src="`${require('~/assets/img/' + our_story.image_mob)}`" :alt="our_story.alt" />
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------->

    <!------------------------------------  Our Values ------------------------------>
    <ThreeCardsSections :data="{
      sectionData: our_values,
      backgroundColor: 'bgColor-normal-grey',
    }" />
    <!------------------------------------------------------------------------------>

    <!--------------------------- Our Partners ---------------------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">

        <div class="text-center mx-auto md:max-w-3/5">
          <h2>{{ our_partners.title }}</h2>
          <p class="mt-4 lg:mt-8 text-big">{{ our_partners.description }}
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-between mx-auto md:max-w-3/5  mt-8 lg:mt-16">
          <template v-for="(partner, i) in our_partners.partners">
            <div :key="i" class="tools_and_techs text-center mb-8 md:mb-0">
              <h3 v-in-viewport> <span class="bgFill"><span class="textClip font-semibold">{{
                partner.title
              }}</span></span></h3>
              <div class="techs-stacks mt-8 md:mt-0">
                <template v-for="(logo, index) in partner.list">
                  <img :key="index" class="mx-auto md:my-10 hvr-top"
                    :src="`${require('~/assets/img/partners/' + logo.image)}`" :alt="logo.alt" />
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <!-------------------------------------------------------------------------------->

    <!--------------------------- Our Offices ---------------------------------------->
    <!-- Note: This same section is also on Industries (telecom.) -->
    <section class="lg:py-32 py-14 overflow-hidden	vw-map  bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>{{ our_offices.title }}</h2>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16 relative">

          <div class="text-center lg:text-left position-relative z-10	gap-y">
            <p class="mb-4 lg:mb-6 text-big">{{ our_offices.description1 }}</p>
            <p class="mb-4 lg:mb-6 text-big">{{ our_offices.description2 }}</p>
          </div>

          <div>
            <img class="locations-map" :src="`${require('~/assets/img/' + our_offices.image)}`" :alt="our_offices.alt" />
          </div>

        </div>

      </div>
    </section>
    <!-------------------------------------------------------------------------------->

    <!--------------------------- Join Our Team -------------------------------------->
    <section class="bgColor-tertiary-black color-white">
      <div class="hero">
        <div class="grid items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-0 md:gap-8">
          <div class="py-8 order-2 lg:order-1 content">
            <h2 class="heading-1 capitalize">Join Our Team</h2>

            <NuxtLink to="/contact" class="btn-primary btn-lg mt-16 inline-block cursor-pointer">
              Get in touch with us
            </NuxtLink>
          </div>
          <div class="order-1 lg:order-2">
            <img src="~/assets/img/group-people-working-out-business-plan-office.jpg" alt="Image" class="w-full">
          </div>
        </div>
      </div>
    </section>
    <!-------------------------------------------------------------------------------->

    <!----------------------------- What Our Clients Say ----------------------------->
    <WhatOurClientsSay :data="{
      title: 'Reviews',
      animated_word: '',
      getTestimonialsData,
      isDarkMode: false
    }" />
    <!--------------------------------------------------------------------------------->

    <!------------------------------- Get in Touch with us----------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: false
    }" />
    <!--------------------------------------------------------------------------------->

  </div>
</template>
  
  
<script>

export default {

  async asyncData(context) {

    const [allTeamRes, allTestimonialsRes] = await Promise.all([



      // Core:       24d738a4-ad30-45f7-9ec6-3584eb0ddbe0
      // Data:       87a4dfac-ca7d-4605-92d1-b95a7bee0a85
      // Consulting: 6e27734f-2f09-4108-9292-b27bd8a17870
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'teams/',
        resolve_relations: 'teams-container.teams',
        // Core Team Here...
        'filter_query[teams_categories][exists]': '24d738a4-ad30-45f7-9ec6-3584eb0ddbe0'
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'testimonials/',
        resolve_relations: 'testimonial-container.testimonials_list',
      }),


    ])
    return {
      allTeam: allTeamRes.data,
      allTestimonials: allTestimonialsRes.data,
    }

  },


  data() {
    return {
      story: { content: {} },

      about_us: {
        title: "About Us",
        description: "We are a global provider of end-to-end software development services. We help clients across the world use modern technology to transform challenges into lasting business value, operational efficiency, and revenue growth. With an international team of over 200 tech experts, we offer tech consulting, engineering, data, and team augmentation services. Since our inception in 2012, we have worked with numerous industry leaders and innovative startups, creating value across diverse sectors like media, telecommunications, gaming, fintech, and beyond. As a company, we are driven by a passion for advancing society through technology. We therefore also invest heavily in research and development and collaborate closely with entrepreneurs and startups to build innovative tech solutions to life.",
        image: "about-vw-thumbnail.jpg",
        alt: "team Members in a Group",
      },

      our_story: {
        title: "Our Story",
        description: "Our mission is simple yet profound: we aim to revolutionise the world by building technology that improves lives and safeguards the planet. What sets us apart is our commitment to authenticity and embracing innovation without any pretense. We take pride in our inclusive team, working as one across departments, countries, cultures, and clients. With a true customer-centric approach, we're not just developers, but partners in your software success.",
        image_web: "our-story.png",
        image_mob: "our-story-mobile.png",
        alt: "Vodworks' Roadmap illustration",
      },

      our_values: {
        title: "Our Values",
        list: [
          {
            icon: "about/crown.svg",
            alt: "icon",

            title: "Keep it real",
            description: "We’re all about honesty, integrity, and transparency here. No fancy talk or hidden agendas, just straight-up truthfulness in everything we do. We believe in treating others as we would like to be treated ourselves, with respect and authenticity."
          },
          {
            icon: "about/check-circle.svg",
            alt: "icon",

            title: "Embrace the new",
            description: "We’re always pushing boundaries, challenging ourselves, and exploring new ideas. We believe that innovation comes from curiosity and a willingness to learn, grow, and adapt. So, we never stop listening and learning, and we never stop striving to be better."
          },
          {
            icon: "about/server-crash.svg",
            alt: "icon",

            title: "Tech enthusiasts at heart",
            description: "We’re passionate about technology, and we believe it has the power to change the world. We love nothing more than getting stuck into the latest trends, exploring new tools and techniques, and helping our clients stay ahead of the game."
          },
          {
            icon: "about/users-2.svg",
            alt: "icon",

            title: "Teamwork makes the dream work",
            description: "We’re a diverse and inclusive bunch, spread across departments, countries, and cultures. But no matter where we are or what we do, we’re united by a common goal: to support each other and work together to achieve great things."
          },
          {
            icon: "about/user-plus.svg",
            alt: "icon",

            title: "Come together as a community",
            description: "We believe people are the backbone of any great community. We take our commitment to our communities very seriously, both inside and outside of our company, and we do whatever we can to support our communities."
          },
          {
            icon: "about/user-check.svg",
            alt: "icon",

            title: "Customers first, always",
            description: "We’re customer-focused to our core, and we believe the delivering quality work and building strong relationships is key to success. We never lose sight of our clients’ needs and priorities, and we’re always looking for ways to exceed their expectations and earn their trust."
          }
        ]
      },

      our_partners: {
        title: "Our Partners",
        description: "Vodworks unique partnership program focuses on utilizing partner strengths to uplevel what we can provide to our own clients as well as our partners.",

        partners: [
          {
            title: "Technology",
            list: [
              {
                image: "technology/Nagra.svg",
                alt: "partner logo",
              },
              {
                image: "technology/Aws.svg",
                alt: "partner logo",
              },
              {
                image: "technology/Xroad-Media.svg",
                alt: "partner logo",
              },
              {
                image: "technology/A.svg",
                alt: "partner logo",
              }
            ]
          },
          {
            title: "Web3",
            list: [
              {
                image: "web3/youtube.svg",
                alt: "partner logo",
              },
              {
                image: "web3/stair.svg",
                alt: "partner logo",
              },
              {
                image: "web3/Eth.svg",
                alt: "partner logo",
              },
              {
                image: "web3/w.svg",
                alt: "partner logo",
              }
            ]
          },
          {
            title: "Consulting",
            list: [
              {
                image: "consulting/wonder-14.svg",
                alt: "partner logo",
              },
              {
                image: "consulting/tap-effect.svg",
                alt: "partner logo",
              },
              {
                image: "consulting/impact-hub.svg",
                alt: "partner logo",
              },
              {
                image: "consulting/cleverchain.svg",
                alt: "partner logo",
              }
            ]
          }
        ]
      },

      our_offices: {
        title: "Our Offices",
        description1: "We operate from offices spanning the globe, our major hubs are strategically located in the UK, Ukraine, Romania, Pakistan, and Cambodia. This allows us to serve clients across time-zones and across budget requirements.",
        description2: "We have more than 150 highly-skilled technical staff working for and with us globally. If we do not yet have the talent in house, we have a strong network to hire quickly and globally based on the client’s needs.",
        image: "map.png",
        alt: "Offices location illustration",
      }
    }
  },

  head() {
    return {
      title: 'About us | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Get to know our team and Vodworks story in software development industry.",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'About us | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Get to know our team and Vodworks story in software development industry.",
        },
      ],
    }
  },

  computed: {

    getTeamsData() {
      return this.allTeam
    },
    getTestimonialsData() {
      return this.allTestimonials
    },

  },

}
</script>
    


    

