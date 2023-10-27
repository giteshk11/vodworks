<template>
  <div>

    <PageHeroWithAnimatedTitle :data="{ title: 'How we', animated_word: 'work', description: '' }" />


    <section class="lg:py-32 py-14">
      <div class="mx-auto container">

        <div class="md:max-w-4/5 mx-auto">
          <p class="mb-4 lg:mb-6 text-big">Vodworks provides end-to-end software and product engineering services,
            including consulting, outsourcing, and augmented teams. We help companies who do not have the skills,
            resources or time to solve their deepest technical challenges, to adopt and implement new technology or
            explore emerging developments in technology.
          </p>
          <p class="mb-4 lg:mb-6 text-big">
            Our vision is to create a world where technology is designed around human needs and in harmony with the
            planet, rather than the other way around.
          </p>
          <p class="text-big">We have more than 150 highly-skilled technical staff working for and with us globally. If we
            do not yet have the talent in house, we have a strong network to hire quickly and globally based on the
            client’s needs.</p>

          <div class="mt-4 mb-4 lg:mt-12 lg:mb-12 zoom-in overflow-hidden">
            <img class="w-full" src="~/assets/img/how-we-work-thumbnail.jpg" alt="" />
          </div>


          <p class="mb-4 lg:mb-6 text-big">On the first stages of software development cycle we assist our valued clients
            in the
            process of requirement gathering and defining. What drives us is a profound commitment to harness our
            knowledge and initiative to develop products that genuinely interest us and that we, ourselves, are eager to
            use. When we find such a project, our development team takes the lead with initiative and enthusiasm.</p>
          <p class="mb-4 lg:mb-6 text-big">Our involvement in the outcomes of projects distinguishes us. Instead of solely
            relying on
            clients for requirements, we actively engage and contribute, being a partner rather than just a vendor,
            embracing this principle as an integral part of our team's ethos and DNA.</p>
          <p class="mb-4 lg:mb-6 text-big">We use flexible approaches and methodologies that best align with each unique
            project and
            the client's working style. While we don’t impose any particular approach on our clients, we do offer
            well-considered recommendations.</p>
          <p class="mb-4 lg:mb-6 text-big">Our approach is built around small, dedicated teams, each focusing on a
            singular project at
            a time. We never switch teams, which ensures that resources are never shared across multiple projects.</p>
          <p class="text-big">To maintain a high standard of quality, we have our own quality assurance processes and
            independent teams. They operate autonomously from our development team, ensuring that quality management
            involves not just a single group but every project member.</p>

        </div>
      </div>
    </section>

    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <div class="text-center">
          <h2 v-in-viewport class="mx-auto">Agile <span class="bgFill"><span
                class="textClip color-white">processes</span></span>
          </h2>
          <img class="mt-8 lg:mt-16 mx-auto" src="~/assets/img/Iteration.svg" alt="Agile Process" />
        </div>
      </div>
    </section>

    <!--------------------------- Custom Software for Your Business---------------------->
    <CustomSoftwareForYourBusiness />
    <!----------------------------------------------------------------------------------->

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
      resolve_relations: 'case-studies-container.case_studies,case-studies.category,testimonial-container.testimonials_list',
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
  components: {

  },
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
      isLightBoxVisible: false,
      story: { content: {} },
    }
  },
  head() {
    return {
      title: 'Be Smart - Operate Seamlessly With Team Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We love to solve complex business problems using technology. We have built innovative products in the sphere of media, OTT, navigations, blockchain, and fintech.',
        },
      ],
    }
  },

  computed: {

    getCaseStudiesData() {
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
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  },
}
</script>
