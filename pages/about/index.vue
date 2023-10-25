<template>
  <div>

    <PageHeroWithAnimatedTitle :data="{ title: 'Welcome to', animated_word: 'Vodworks' }" />


 
    <!--------------------------- About Us ---------------------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>About Us</h2>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16">
          <div>
            <p class="mb-4 lg:mb-6 text-big">We are a global provider of end-to-end software development
              services. We help clients across the world use modern technology to transform challenges into lasting
              business value, operational efficiency, and revenue growth. With an international team of over 200 tech
              experts, we offer tech consulting, engineering, data, and team augmentation services. Since our inception in
              2012, we have worked with numerous industry leaders and innovative startups, creating value across diverse
              sectors like media, telecommunications, gaming, fintech, and beyond. As a company, we are driven by a
              passion for advancing society through technology. We therefore also invest heavily in research and
              development and collaborate closely with entrepreneurs and startups to build innovative tech solutions to
              life.
            </p>
          </div>
          <div>
            <img class="w-full" src="~/assets/img/about-thumbnail.jpg" alt="About thumbnail" />
          </div>
        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------->



    <!-- Meet Our Team -->
    <section v-if="getTeamsData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">
          <h2 v-in-viewport>Meet Our <span class="bgFill"><span class="textClip">Team</span></span></h2>

          <p class="mt-4 lg:mt-8 text-big mx-auto md:max-w-3/5">
            Meet our dynamic leadership team, a group of tech industry veterans with extensive experience across
            industries and regions. Their combined expertise drives innovation and passion at the heart of our company.
          </p>
        </div>

        <!-- card list -->
        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-4 mt-8 lg:mt-16">


          <template v-for="(card, i) in getTeamsData.teams">
            <div :key="i" class="bgColor-white card-utilities hvr-effect h-full">

              <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0 h-full">

                <div class="md:col-span-4 expert-avatar-wrapper">
                  <img :src="card.content.Avatar.filename" :alt="card.content.Avatar.alt" />
                </div>

                <div class="md:col-span-8 expert-content p-4 lg:px-8 lg:py-8">
                  <div class="flex items-center gap-4 justify-between">
                    <div>
                      <h4 class="text-regular font-bold color-primary-black">{{ card.content.Name }}</h4>
                      <p class="color-secondary-black font-medium text-regular line-clamp-1">{{ card.content.Designation }}</p>
                    </div>
                    <a target="_blank" :href="card.content.Linkedin_Url"><img src="~assets/img/icons/Linkedin-icon.svg" alt="Lnkedin-icon" /></a>
                  </div>
                  <p class="mt-4 lg:mt-8 color-primary-black text-small team-descr">{{ card.content.Description }}</p>
                </div>

              </div>
            </div>
          </template>




        </div>



      </div>
    </section>
    <!----------------------------------------------------------------------------------->


    <!--------------------------- Our Story ---------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-4/5">
          <h2 class="color-white">Our Story</h2>
          <p class="mt-4 lg:mt-8 text-big color-white">
            Our mission is simple yet profound: we aim to revolutionise the world by building technology that improves
            lives and safeguards the planet. What sets us apart is our commitment to authenticity and embracing innovation
            without any pretense. We take pride in our inclusive team, working as one across departments, countries,
            cultures, and clients. With a true customer-centric approach, we're not just developers, but partners in your
            software success.
          </p>
        </div>

        <div class=" mt-8 lg:mt-16">
          <img class="w-full" src="~/assets/img/our-story.png" alt="Our Story Timeline" />
        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------->



    <!--------------------------- Our Values ---------------------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>{{ our_values.title }}</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4 mt-8 lg:mt-16">
          <template v-for="(card, i) in our_values.list">
            <div :key="i" class="default-card card-utilities hvr-effect">
              <img class="hvr-top" src="~/assets/img/icons/cog.svg" alt="icon">
              <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h3>
              <p class="text-card flex-grow-1">{{ card.description }}</p>
            </div>
          </template>
        </div>
      </div>
    </section>
    <!---------------------------------------------------------------------------------------------->



    <!--------------------------- Our Offices ---------------------------------------->
    <section class="lg:py-32 py-14 overflow-hidden	vw-map  bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2>Our Offices</h2>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto gap-8 lg:gap-16 mt-8 lg:mt-16 relative">

          <div class="text-center lg:text-left position-relative z-10	">
            <p class="mb-4 lg:mb-6 text-big">We operate from offices spanning the globe, our major hubs are strategically
              located in the UK, Ukraine, Romania, Pakistan, and Cambodia. This allows us to serve clients across
              time-zones and across budget requirements.
            </p>
          </div>

          <div>
            <img class="locations-map" src="~/assets/img/map.png" alt="" />
          </div>

        </div>

      </div>
    </section>
    <!---------------------------------------------------------------------------------------------->


    <!--------------------------- Join Our Team ---------------------------------------->
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
    <!---------------------------------------------------------------------------------------------->






    <!-- What Our Clients Say -->
    <section v-if="getTestimonialsData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">
          <h2 v-in-viewport>{{ getTestimonialsData.title }} <span class="bgFill"><span class="textClip">{{
            getTestimonialsData.animated_word }}</span></span></h2>
        </div>
      </div>
      <TestimonialsConatiner :data="getTestimonialsData" />
    </section>
    <!----------------------------------------------------------------------------------->



    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: false
    }" />
    <!------------------------------------------------------------------------------------------>


    





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
      resolve_relations: 'teams-container.teams,testimonial-container.testimonials_list',
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

      our_values: {
        title: "Our Values",
        list: [
          {
            icon: "",
            alt: "icon",

            title: "Keep it real",
            description: "We’re all about honesty, integrity, and transparency here. No fancy talk or hidden agendas, just straight-up truthfulness in everything we do. We believe in treating others as we would like to be treated ourselves, with respect and authenticity."
          },
          {
            icon: "",
            alt: "icon",

            title: "Embrace the new",
            description: "We’re always pushing boundaries, challenging ourselves, and exploring new ideas. We believe that innovation comes from curiosity and a willingness to learn, grow, and adapt. So, we never stop listening and learning, and we never stop striving to be better."
          },
          {
            icon: "",
            alt: "icon",

            title: "Tech enthusiasts at heart",
            description: "We’re passionate about technology, and we believe it has the power to change the world. We love nothing more than getting stuck into the latest trends, exploring new tools and techniques, and helping our clients stay ahead of the game."
          },
          {
            icon: "",
            alt: "icon",

            title: "Teamwork makes the dream work",
            description: "We’re a diverse and inclusive bunch, spread across departments, countries, and cultures. But no matter where we are or what we do, we’re united by a common goal: to support each other and work together to achieve great things."
          },
          {
            icon: "",
            alt: "icon",

            title: "Come together as a community",
            description: "We believe people are the backbone of any great community. We take our commitment to our communities very seriously, both inside and outside of our company, and we do whatever we can to support our communities."
          },
          {
            icon: "",
            alt: "icon",

            title: "Customers first, always",
            description: "We’re customer-focused to our core, and we believe the delivering quality work and building strong relationships is key to success. We never lose sight of our clients’ needs and priorities, and we’re always looking for ways to exceed their expectations and earn their trust."
          }
        ]
      }
    }
  },
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'About Us',
        },
      ],
    }
  },

  computed: {
    getTeamsData() {
      return this.story.content.body[0]
    },

    getTestimonialsData() {
      return this.story.content.body[1]
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
    

<style scoped>

section{
    display: none;
}
section:first-child{
    display: block;
}
</style>