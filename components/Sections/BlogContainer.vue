<template>
  <!-- section 3: blogs -->
  <div
    class="lg:w-4/6 px-5 lg:px-0 mx-auto border-t border-gray-300 py-10 overflow-hidden"
  >
    <!-- title -->
    <div class="lg:text-center">
      <h1 class="font-arial-black text-4xl lg:text-5xl">Blogs</h1>
      <p class="text-h-gray mt-4">
        Stay up-to-date with our latest projects, team updates, and more!
      </p>
    </div>
    <template v-for="blog in blok.blogs">
      <recent-posts :key="blog.id" :details="blog"></recent-posts>
    </template>
    <NuxtLink to="/blogs" class="title inline-block mt-8"> See more </NuxtLink>
  </div>
</template>

<script>
import RecentPosts from '~/components/Sections/RecentPosts'

export default {
  name: 'BlogContainer',
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
