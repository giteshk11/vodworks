<template>
  <div class="font-arial">

    <section
      :style="{ backgroundImage: `url(${getFeaturedImage})` }"
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

    <section class="lg:py-16 py-10">
      <div class="lg:w-3/5 w-4/5 container mx-auto">
        <p class="text-h-gray mb-8 text-lg w-4/5 mx-auto">
          {{ blok.description }}
        </p>
        <div
          class="w-4/5 container mx-auto prose lg:prose-xl"
          v-html="$md.render(blok.content)"
        ></div>
      </div>


    </section>


<!--    <div class="py-20">-->
<!--      <div class="lg:w-3/5 w-4/5 mx-auto">-->
<!--        &lt;!&ndash; title &ndash;&gt;-->
<!--        <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">{{ blok.title }}</h2>-->

<!--        &lt;!&ndash; description &ndash;&gt;-->
<!--        <p class="text-h-gray mt-4 text-lg">-->
<!--          {{ blok.description }}-->
<!--        </p>-->

<!--        &lt;!&ndash; author &ndash;&gt;-->
<!--        <div class="flex my-8">-->
<!--          &lt;!&ndash; image &ndash;&gt;-->
<!--          &lt;!&ndash; <div-->
<!--            class="w-12 h-12 rounded-full bg-no-repeat bg-cover bg-center mr-2"-->
<!--            style="background-image: url(./public/img/img_blog_2.png)"-->
<!--          ></div> &ndash;&gt;-->

<!--          <div>-->
<!--            &lt;!&ndash; name &ndash;&gt;-->
<!--            <p class="font-bold">{{ blok.author }}</p>-->

<!--            &lt;!&ndash; time &ndash;&gt;-->
<!--            <p v-if="blok.published_date" class="text-x-gray text-sm">-->
<!--              {{ getPublishDate }} - {{ blok.read_time }} min read-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; image &ndash;&gt;-->
<!--      <div v-if="blok.featured_image" class="lg:px-32 px-3">-->
<!--        <img :src="getFeaturedImage" class="mx-auto w-full" alt="" />-->
<!--      </div>-->
<!--    </div>-->



  </div>
</template>

<script>
export default {
  name: 'Webinar',

  props: ['blok'],
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

<style scoped>

.lg\:prose-xl > :first-child {
  margin: 0 auto;
  width: 100%;
  border: 2px solid #9e9e9e;
  border-radius: 0.5rem;
  overflow: hidden;
}

@media only screen and (max-width: 767px) {
  .lg\:prose-xl > :first-child {
    height: auto;
  }
}

</style>
