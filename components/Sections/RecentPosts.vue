<template>
  <div>
    <!-- list webinars -->
    <!-- card -->
    <template v-if="details.content.component === 'webinar'">
      <div
        class="bg-b-gray w-full lg:px-6 px-3 lg:py-8 py-4 grid lg:grid-cols-7 mt-8 rounded-xl text-left"
      >
        <div class="lg:col-span-5">
          <!-- author -->
          <div class="flex items-center">
            <div class="h-4 w-4 bg-x-blue rounded-full mr-2"></div>
            <p class="text-sm text-x-grayText">
              {{ details.content.author }}
            </p>
          </div>

          <!-- title -->
          <h2 class="font-arial font-bold text-3xl mt-3">
            <NuxtLink :to="slug">
              {{ details.content.title }}
            </NuxtLink>
          </h2>

          <!-- description -->
          <p class="text-h-gray mt-2">
            {{ details.content.description }}
          </p>

          <!-- time -->

          <p v-if="details.content.published_date" class="mt-5 text-sm">
            {{ getPublishDate }} - {{ details.content.read_time }} minutes
          </p>
        </div>

        <!-- image -->
        <div
          v-if="getFeaturedImage"
          class="w-60 h-48 col-span-2 self-center rounded-lg"
        >
          <img :src="getFeaturedImage.filename" />
        </div>
      </div>
    </template>
    <div v-else>
      <!-- card-1 -->
      <div>
        <!-- image -->
        <div v-if="getFeaturedImage" class="lg:px-16">
          <img
            :src="getFeaturedImage.filename"
            class="mx-auto mt-20 w-full h-full lg:rounded-lg rounded-xl"
          />
        </div>

        <!-- descript -->
        <div class="lg:mt-8 mt-6">
          <!-- author -->
          <div class="flex items-center mb-8">
            <div class="h-4 w-4 bg-x-blue rounded-full mr-4"></div>
            <p class="text-x-grayText text-sm">
              {{ details.content.author }}
            </p>
          </div>

          <!-- title -->
          <NuxtLink
            :to="details.full_slug"
            class="font-arial font-bold text-3xl tracking-tight"
          >
            {{ details.content.title }}
          </NuxtLink>

          <!-- description -->
          <p class="mt-2 text-h-gray truncate-3-lines lg:truncate-2-lines">
            {{ details.content.description }}
          </p>

          <!-- time -->
          <div class="lg:w-1/4 flex mt-8 text-h-gray text-sm">
            <p
              v-if="details.content.published_date"
              class="lg:border-r lg:border-gray-300 lg:pr-4"
            >
              {{ getPublishDate }}
            </p>
            <span class="inline-block lg:hidden mx-3">-</span>
            <p class="lg:ml-4">{{ details.content.read_time }} minutes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getPublishDate() {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(
        this.details.content.published_date.split(' ')[0]
      ).toLocaleString('en-US', options)
    },
    getFeaturedImage() {
      return this.details.content.featured_image
    },
    slug() {
      return '/' + this.details.full_slug
    },
  },
}
</script>
