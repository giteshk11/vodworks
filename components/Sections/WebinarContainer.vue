<template>
  <div class="lg:px-60 px-5 lg:py-24 py-20 overflow-hidden">
    <!-- title -->
    <div class="lg:text-center pb-10 px-2 lg:px-0">
      <h1 class="font-arial-black text-4xl lg:text-5xl">Webinars</h1>
      <p class="text-h-gray mt-4">
        Knowledge share is core to our business model. Learn from industry
        experts, check out our webinars, or take a peek at our culture!
      </p>
      <template v-for="webinar in blok.webinars">
        <recent-posts :key="webinar.id" :details="webinar"></recent-posts>
      </template>
    </div>
    <NuxtLink to="/webinars" class="title inline-block mt-8">
      See more
    </NuxtLink>
  </div>
</template>

<script>
import RecentPosts from '~/components/Sections/RecentPosts'

export default {
  name: 'WebinarContainer',
  components: {
    RecentPosts,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
