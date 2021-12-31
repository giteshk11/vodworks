<template>
  <div v-if="isContent">
    <!-- list webinars -->
    <!-- card -->
    <template v-if="details.content.component === 'webinar'">
      <div
        class="bgColor-grey grid md:grid-cols-7 hvr-right w-full xl:px-6 px-3 xl:py-8 py-4  mt-6 rounded-lg text-left"
      >
        <div class="md:col-span-5 pr-6 lg:pr-24">
          <!-- author -->
          <div class="flex items-center">
            <div class="h-4 w-4 bg-x-blue rounded-full mr-2"></div>
            <p class="text-sm text-x-grayText">
              {{ details.content.author }}
            </p>
          </div>

          <!-- title -->
          <h4 class="font-arial font-bold text-2xl mt-4">
            <NuxtLink :to="slug">
              {{ details.content.title }}
            </NuxtLink>
          </h4>

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
          class="col-span-2 self-center rounded-lg inline-flex w-full h-auto md:h-full mt-8 md:mt-0"
        >
          <img
            :src="getFeaturedImage.filename"
            class="object-cover mx-auto items-center rounded-lg"
            alt=""
          />
        </div>
      </div>
    </template>

    <div v-else class="h-full">
      <!-- card-1 -->
      <div class="blog-card p-4 bgColor-grey rounded-xl hvr-top h-full">
        <!-- image -->
        <div v-if="getFeaturedImage">
          <img
            :src="getFeaturedImage.filename"
            class="mx-auto w-full h-full rounded-lg"
            alt=""
          />
        </div>

        <!-- descript -->
        <div class="lg:mt-8 mt-6">
          <!-- author -->
          <div class="flex items-center mb-4">
            <div class="h-4 w-4 bg-x-blue rounded-full mr-4"></div>
            <p class="text-x-grayText text-sm">
              {{ details.content.author }}
            </p>
          </div>

          <!-- title -->
          <NuxtLink
            :to="details.full_slug"
            class="font-arial font-bold text-xl mt-4"
          >
            {{ details.content.title }}
          </NuxtLink>

          <!-- description -->
          <p class="text-h-gray mt-2 truncate-3-lines">
            {{ details.content.description }}
          </p>

          <!-- time -->
          <div class="lg:w-1/2 flex mt-8 text-h-gray text-sm">
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
  props: ['details'],
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
    isContent() {
      return !!this.details?.content
    },
    truncateDescLines() {
      return this.details.content.description.split('.')[0]
    },
  },
}
</script>
