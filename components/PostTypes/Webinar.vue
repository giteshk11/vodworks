<template>
  <div class="font-arial">
    <div class="py-20">
      <div class="lg:w-3/5 w-4/5 mx-auto">
        <!-- title -->
        <h1 class="text-5xl font-arial-black text-center">{{ blok.title }}</h1>

        <!-- description -->
        <p class="text-lg mt-8">
          {{ blok.description }}
        </p>

        <!-- author -->
        <div class="flex my-8">
          <!-- image -->
          <!-- <div
            class="w-12 h-12 rounded-full bg-no-repeat bg-cover bg-center mr-2"
            style="background-image: url(./public/img/img_blog_2.png)"
          ></div> -->

          <div>
            <!-- name -->
            <p class="font-bold">{{ blok.author }}</p>

            <!-- time -->
            <p v-if="blok.published_date" class="text-x-gray text-sm">
              {{ getPublishDate }} - {{ blok.read_time }} min read
            </p>
          </div>
        </div>
      </div>

      <!-- image -->
      <div v-if="blok.featured_image" class="lg:px-32 px-3">
        <img :src="getFeaturedImage" class="mx-auto w-full" />
      </div>
    </div>
    <div
      class="lg:w-3/5 w-4/5 mx-auto mt-20 prose lg:prose-xl"
      v-html="$md.render(blok.content)"
    ></div>
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
}
</script>
