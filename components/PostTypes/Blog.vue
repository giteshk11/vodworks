<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="single-post">
    <!--    :style="{ backgroundImage: `url(${getFeaturedImage})` }"-->
    <section
      class="lg:py-32 py-14 bgColor-tertiary-black color-white">

      <div class="mx-auto container">
        <h1 class="heading-2 font-bold">
          {{ blok.title }}
        </h1>

        <div class="flex mt-8">
          <div class="w-12 h-12 rounded-full bg-no-repeat bg-cover bg-center mr-2 bg-x-blue"></div>
          <div>
            <p class="font-bold">{{ blok.author }}</p>
            <p class="mt-1 text-small opacity-80">
              {{ getPublishDate }} - {{ blok.read_time }} min read
            </p>
          </div>
        </div>

      </div>

    </section>


    <section class="lg:py-16 py-10 blog-description">
      <div class="lg:w-3/5 w-4/5 container mx-auto single-post-featured-img">
        <img :src="getFeaturedImage" class="rounded-lg" alt="Featured Image" />
      </div>

      <div id="single-blog-post" ref="details" class="lg:w-3/5 w-4/5 container mx-auto" v-html="$md.render(blok.content)">
      </div>

    </section>


    <!------------------------------- Subscribe To Our Blog-------------------------------------->
    <SubscribeToOurBlog />
    <!------------------------------------------------------------------------------------------>


    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: true
    }" />
    <!------------------------------------------------------------------------------------------>

  </div>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    blok: Object,
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
  })
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  }
}
</script>
