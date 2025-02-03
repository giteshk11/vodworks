<template>
  <div>


    <!------------------------------------- Services/Consulting Hero -------------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">
        <div class="text-center mx-auto md:max-w-3/5">
          <h1 class="color-white">Software Consulting Services</h1>
          <p class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white">Our software consulting services focus on helping
            clients make well-informed technology investments. Leveraging the expertise of our experts, we ensure your
            software project is customised to your unique needs, minimising risk and maximising return the return on your
            technology investments
          </p>

          <div v-scroll-to="'#GetInTouchWithUs'" class="btn-primary btn-lg inline-block cursor-pointer">
            Consult our experts
          </div>
        </div>

        <div class="text-center mx-auto md:max-w-4/5 mt-8 lg:mt-16">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-2 md:gap-4 lg:gap-6">
            <template v-for="(card, i) in getConsultingServiceData.service_consulting_details">
              <ServiceCtaCard :key="i" :data="card" />
            </template>
          </div>
        </div>

      </div>
    </section>
    <!------------------------------------------------------------------------------------------>


    <!---------------------------- Services/Consulting details Cards (larg Cards) ------------------------>
    <section v-if="getConsultingServiceData" class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="text-center">

          <h2 v-in-viewport>{{ getConsultingServiceData.title }} <span class="bgFill"><span class="textClip">{{
            getConsultingServiceData.animated_word }}</span></span></h2>

          <div class="mx-auto md:max-w-4/5  mt-4 lg:mt-12">

            <template v-for="(card, i) in getConsultingServiceData.service_consulting_details">
              <ServiceLargeCard :key="i" :data="card" :button="{ text: `Let's Talk`, btnURL: 'isStatic' }" />
            </template>

          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!--------------------------------- Our Consulting Approach --------------------------------->
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
      <div class="mx-auto container">

        <div class="text-center mx-auto md:max-w-3/5 ">
          <h2 class="color-white">{{ consulting_approach.title }}</h2>
          <p class="mt-4 lg:mt-8 text-big color-white">{{ consulting_approach.description }}</p>
        </div>

        <div class="mt-8 lg:mt-16 color-white">
          <div class="consulting_timeline grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-4">

            <template v-for="(approach, i) in consulting_approach.approaches">

              <div :key="i" class="approach_wrapper">

                <div class="approach_heading">
                  <img :src="`${require('~/assets/img/icons/' + approach.icon)}`" alt="icon" />
                  <h3 class="mt-0 lg:mt-2 line-clamp-1">{{ approach.title }}</h3>
                </div>

                <div class="steps_wrapper">
                  <template v-for="(step, index) in approach.steps">
                    <div :key="index" class="approach_step hvr-top">
                      <span>{{ step.count }}</span>
                      <h6 class="color-pink">{{ step.title }}</h6>
                      <p class="text-xsmall mt-2">{{ step.description }}</p>
                    </div>
                  </template>
                </div>

              </div>
            </template>

          </div>
        </div>

      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!---------------------------------General CTA (Light) --------------------------->
    <GeneralCTA :data="{
      title: 'Discuss your project with us!',
      btnText: 'Book a consultation',
      btnURL: '/contact/',
      isNavigatingToContactPage: false,
      darkMode: false,
      col_1: 'md:col-span-6',
      col_2: 'md:col-span-6',
    }" />
    <!------------------------------------------------------------------------------------------>



    <MeetOurTeamSection :data="{
      title: 'Meet Our',
      animated_word: 'Consulting Experts',
      description: '',
      getTeamsData,
      scrollToSection:true,
      btnText: 'Book a consultation',
      btnURL: '#GetInTouchWithUs',
      isDarkMode: true
    }" />



    <!----------------------------- Get in Touch with us--------------------------------->
    <GetInTouchWithUs :data="{
      title:'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!----------------------------------------------------------------------------------->

  </div>
</template>



<script>

export default {

  async asyncData(context) {
    const path = context.route.path === '/' ? '/home' : context.route.path
    const [pageDataRes, allTeamRes] = await Promise.all([

      context.app.$storyapi.get(`cdn/stories/${path}`, {
        version: 'published',
        resolve_relations: 'service_consulting_details_container.service_consulting_details,teams-container.teams'
      }),

      // Core:       24d738a4-ad30-45f7-9ec6-3584eb0ddbe0
      // Data:       87a4dfac-ca7d-4605-92d1-b95a7bee0a85
      // Consulting: 6e27734f-2f09-4108-9292-b27bd8a17870
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'teams/',
        resolve_relations: 'teams-container.teams',
        // Consulting Team Here...
        'filter_query[teams_categories][exists]': '6e27734f-2f09-4108-9292-b27bd8a17870'
      }),

    ])
    return {
      pageData: pageDataRes.data,
      ConsultingTeam: allTeamRes.data,
    }

  },

  data() {
    return {
      consulting_approach: {
        title: "Our Consulting Approach",
        description: "Combining commercial and technical expertise, we have a unique approach to technical consulting. We prioritize your budget, time, and tech needs, delivering proven tailored plans.",

        approaches: [

          {
            icon: "cog.svg",
            title: "Discovery",
            steps: [
              {
                count: "01",
                title: "Sharing Ideas",
                description: "It all starts with a conversation to understand your vision, goals, and objectives.  We share ideas, discuss issues, and identify your needs"
              },
              {
                count: "02",
                title: "Deeper Understanding",
                description: "We dig deeper, asking more questions about your business, culture, and strategy. We understand your timelines, budgets, resources, and much more"
              },
              {
                count: "03",
                title: "Data Gathering",
                description: "We gather more data as required to fully understand the situation, problem, or task at hand"
              }
            ]
          },
          {
            icon: "refresh-ccw-dot.svg",
            title: "Solution Shaping & Testing",
            steps: [
              {
                count: "04",
                title: "Analysis",
                description: "Using data and insights gathered, we thoroughly assess the project by looking at the current situation, identifying key issues and opportunities"
              },
              {
                count: "05",
                title: "Solution Shaping",
                description: "We work closely with you to develop and refine potential solutions that address the identified issues and opportunities"
              },
              {
                count: "06",
                title: "Testing & Validation",
                description: "We put the proposed solution to the test using prototype or PoC to ensure it functions as intended"
              },
              {
                count: "07",
                title: "Feedback & Review",
                description: "We gather feedback and data from the previous step to assess effectiveness and feasibility, making necessary adjustments before moving to implementation"
              }
            ]
          },
          {
            icon: "pencil-ruler.svg",
            title: "Implementation",
            steps: [
              {
                count: "08",
                title: "Development",
                description: "We develop the recommended solution by executing a detailed plan. We continue to monitor and report progress, working closely with you "
              },
              {
                count: "09",
                title: "Deployment",
                description: "We work closely with you to roll out the solution to a wider audience, ensuring all components are functioning as intended"
              },
              {
                count: "10",
                title: "Recalibration",
                description: "Based on feedback and data, we revisit and fine-tune the implemented solution as necessary to help sustain long-term success"
              }
            ]
          }

        ]
      }
    }
  },

  head() {
    return {
      title: 'IT Consulting | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Empower your business with Vodworks' expert Software Consulting Services. Trust our consultants to drive growth and innovation.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'it consulting, technology consulting, it consulting services, software consultant, tech consulting, it consulting service, software consulting, it security consulting, software development consulting, software development consultant, it support consulting, software engineering consulting, consulting software, software consulting services, software testing consulting'
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'IT Consulting | Vodworks',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Empower your business with Vodworks' expert Software Consulting Services. Trust our consultants to drive growth and innovation.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.getConsultingServiceData.service_consulting_details[0].content.thumbnail.filename}`,
        },
        // For Twitter
        {
          hid: 't-type',
          name: 'twitter:card',
          content: `${this.getConsultingServiceData.service_consulting_details[0].content.thumbnail.filename}`,
        },
      ],
    }
  },

  computed: {
    getConsultingServiceData() {
      return this.pageData.story.content.Services_Detailed_Content.find(function (obj) {
        return obj.component === 'service_consulting_details_container';
      })
    },
    getConsultingExpertsData() {
      return this.ConsultingTeam
    },

    getTeamsData() {
      return this.ConsultingTeam
    },


  },



}
</script>
