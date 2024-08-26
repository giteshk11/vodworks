<!-- eslint-disable vue/no-v-html -->
<template>
  <!------------------------------- Blog Detailed Hero -------------------------------->
  <div class="single-post">
    <!--    :style="{ backgroundImage: `url(${getFeaturedImage})` }"-->
    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <h1 class="heading-2 font-bold">
          {{ blok.title }}
        </h1>

        <!-- If We have author -->
        <div v-if="blok.author !== ''" class="flex mt-8 author-summary">
          <div class="w-12 h-12 rounded-full mr-4">
            <img :src="blok.author.content.short_img.filename" alt="Author Avatar" />
          </div>
          <div>
            <p class="font-bold">
              <NuxtLink to="/about"><span>{{ blok.author.content.Name }}</span></NuxtLink>
            </p>
            <p class="mt-1 text-small opacity-80">
              {{ getPublishDate }} - {{ blok.read_time }} min read
            </p>
          </div>
        </div>

        <!--  Defautl Author -->
        <div v-else class="flex mt-8 author-summary">
          <div class="w-12 h-12 rounded-full mr-4">
            <img src="~/assets/img/vw-icon.png" alt="Author Avatar" />
          </div>
          <div>
            <p class="font-bold">
              <NuxtLink to="/about"><span>Vodworks</span></NuxtLink>
            </p>
            <p class="mt-1 text-small opacity-80">
              {{ getPublishDate }} - {{ blok.read_time }} min read
            </p>
          </div>
        </div>


      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Blog Detailed Description -------------------------------->
    <section class="lg:py-16 py-10 blog-description">
      <div class="lg:w-3/5 w-4/5 container mx-auto single-post-featured-img">
        <img :src="getFeaturedImage" class="rounded-lg" alt="Featured Image" />
      </div>
      <div id="single-blog-post" ref="details" class="lg:w-3/5 w-4/5 container mx-auto"
        v-html="$md.render(blok.content)">
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>


    <!------------------------------------
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">

        <div class="mx-auto w-full lg:w-3/5">
          <div class="text-center">
            <h2 v-in-viewport>{{ faq_data.title }} <span class="bgFill"><span class="textClip">{{
              faq_data.animated_word }}</span></span></h2>
          </div>

          <div class="mt-8 lg:mt-16">
            <Accordion :payload="faq_data" category="blog-post" />
          </div>
        </div>

      </div>
    </section>
    ----------->

    <!------------------------------- Subscribe To Our Blog-------------------------------------->
    <SubscribeToOurBlog />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!------------------------------------------------------------------------------------------>

  </div>
</template>

<script>


export default {
  name: 'Blog',
  props: {
    blok: {
      type: Object,
      default: null
    },
    // eslint-disable-next-line vue/prop-name-casing
    // faq_data: {
    //   type: Object,
    //   default: null
    // },

  },



  computed: {
    getPublishDate() {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(this.blok.published_date.split(' ')[0]).toLocaleString(
        'en-US',
        options
      )
    },
    getFeaturedImage() {
      return this.blok.featured_image.filename
    },

  },

  mounted() {
    const collections = this.$refs.details.querySelectorAll('a')
    collections.forEach((anchor) => {
      anchor.target = "_blank"
      anchor.rel = "noopener noreferrer nofollow"
    });

    // const headings = this.$refs.details.querySelectorAll('h2')
    // headings.forEach((heading) => {
    //   heading.id = heading.innerHTML.split(/\s/)[0];
    //   /* eslint-disable no-console */
    //   console.log("inner HTML is:", heading.innerHTML)
    // });

  },

  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  }
}
</script>
