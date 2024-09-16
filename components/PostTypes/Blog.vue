<template>
  <div class="tracking-tight">
    <!-- end header -->
<!--    :style="{ backgroundImage: `url(${getFeaturedImage})` }"-->
    <section
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
      class="lg:py-24 py-20 items-center bg-no-repeat bg-cover bg-center single-post relative"
    >
      <div class="mx-auto max-w-4/5 text-white container relative z-10">
        <h1
          class="text-2xl md:text-3xl lg:text-4xl font-arial-black"
        >
          {{ blok.title }}
        </h1>

        <!-- author -->
        <div class="flex mt-8">
          <!-- image -->
          <div
            class="w-12 h-12 rounded-full bg-no-repeat bg-cover bg-center mr-2 bg-x-blue"
          ></div>

          <div>
            <!-- name -->
            <p class="font-bold">{{ blok.author }}</p>

            <!-- time -->
            <p class="mt-1 text-sm text-white opacity-80">
              {{ getPublishDate }} - {{ blok.read_time }} min read
            </p>
          </div>
        </div>
      </div>

    </section>


    <section class="lg:py-16 py-10 blog-description">
        <!-- text -->
        <div
          id="text"
          class="lg:w-3/5 w-4/5 container mx-auto"
          v-html="$md.render(blok.content)"
        >
        </div>
    </section>



<!--    &lt;!&ndash; section 1: title, description, author &ndash;&gt;-->
<!--    <div class="py-20 text-lg">-->
<!--      <div class="lg:w-3/5 w-4/5 mx-auto">-->
<!--        &lt;!&ndash; title &ndash;&gt;-->
<!--        <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">-->
<!--          {{ blok.title }}-->
<!--        </h2>-->

<!--        &lt;!&ndash; description &ndash;&gt;-->
<!--        <p class="text-h-gray mt-4 text-lg">-->
<!--          {{ blok.description }}-->
<!--        </p>-->

<!--        &lt;!&ndash; image &ndash;&gt;-->
<!--        <div v-if="blok.featured_image" class="lg:px-32 px-3">-->
<!--          <img :src="getFeaturedImage" class="mx-auto w-full" />-->
<!--        </div>-->
<!--      </div>-->



<!--      &lt;!&ndash; text &ndash;&gt;-->
<!--      <div-->
<!--        class="lg:w-3/5 w-4/5 mx-auto mt-20 prose xl:prose-xl"-->
<!--        id="text"-->
<!--        v-html="$md.render(blok.content)"-->
<!--      >-->
<!--        -->
<!--      </div>-->
<!--    </div>-->
    <!-- end content -->
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
  methods:{
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  }
}
</script>
