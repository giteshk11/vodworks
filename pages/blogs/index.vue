<template>
  <div class="">

    <PageHeroWithAnimatedTitle :data="{
      title: 'Get in Touch',
      animated_word: 'with Us',
      description: 'Stay up-to-date with our team updates, industry insights, tech guides and more!'
    }" />





    <section class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="">
          <ul class="cats">
            <li v-for="(cat, index) in blog_cats" :key="index" class="text-regular bgColor-light-grey color-primary-black"
              :class="{ active: currentFilter === cat }" @click="setFilter(cat)">
              {{ cat }}
            </li>
          </ul>
        </div>

        <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 lg:gap-8 mt-8 lg:mt-16">

          <div class="md:col-span-12 articles mx-auto max-w-3/4">
            <div class="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap">

              <template v-for="(blog, index) in getBlogData">
                <article :key="index" class="zoom-in overflow-hidden cursor-pointer mb-8">

                  <div v-if="getFeaturedImage(blog)" class="blog-thumbnail-wrapper">
                    <img :src="getFeaturedImage(blog).filename" class="scaleable-img" :alt="getFeaturedImage(blog).alt" />
                  </div>

                  <div class="article-content">
                    <p class="text-sm color-dark-grey font-medium mt-4 mb-2 ctas_wrapper">
                      <template v-for="(cat, catIndex) in blog.content.categories">
                        <span :key="catIndex">{{ cat.content.name }}<span>, </span></span>
                      </template>
                    </p>

                    <h4 class="line-clamp-2">
                      {{ blog.content.title }}
                    </h4>
                    <!--
                      <h4 class="line-clamp-2">
                      <NuxtLink :to="`/${blog.full_slug}`">
                        {{ blog.content.title }}
                      </NuxtLink>
                    </h4>
                     -->

                    <p class="btn-text mt-4 inline-block">Read More</p>
                  </div>

                </article>
              </template>

            </div>
          </div>

          <!--
            <aside class="md:col-span-4 px-4 py-8 bgColor-light-grey h-full">
              <h4>Popular</h4>
            </aside>
           -->

        </div>
      </div>
    </section>


    <section class="lg:py-16 py-10 max-w-4/5 mx-auto container hidden">

      <template v-for="(blog, index) in getBlogData">
        <div :key="index"
          class="bgColor-grey grid md:grid-cols-7 hvr-right w-full lg:px-6 px-3 lg:py-8 py-4 mt-6 rounded-xl text-left">
          <div class="md:col-span-5 pr-6 lg:pr-24">
            <!-- author -->
            <div class="flex items-center">
              <div class="h-4 w-4 bg-x-blue rounded-full mr-2"></div>
              <p class="text-sm text-x-grayText">
                {{ blog.content.author }}
              </p>
            </div>

            <!-- title -->
            <h4 class="font-arial font-bold text-2xl mt-4">
              <NuxtLink :to="`/${blog.full_slug}`">
                {{ blog.content.title }}
              </NuxtLink>
            </h4>

            <!-- description -->
            <p class="text-h-gray mt-2">
              {{ blog.content.description }}
            </p>

            <!-- time -->

            <p v-if="blog.content.published_date" class="mt-5 text-sm">
              {{ getPublishDate(blog) }} - {{ blog.content.read_time }} minutes
            </p>
          </div>

          <!-- image -->
          <div v-if="getFeaturedImage(blog)"
            class="col-span-2 self-center rounded-lg inline-flex w-full h-auto md:h-full mt-8 md:mt-0">
            <img :src="getFeaturedImage(blog).filename" class="object-cover mx-auto items-center rounded-lg"
              :alt="getFeaturedImage(blog).alt" />
          </div>
        </div>
      </template>
    </section>


    <div id="app" class="mx-auto container py-16 hidden">
      <div class="title-container">
        <div>
          <h3 class="title">
            Our Projects
          </h3>
        </div>
        <div class="filters">
          <span class="filter" :class="{ active: currentFilter === 'ALL' }" @click="setFilter('ALL')">ALL</span>
          <span class="filter" :class="{ active: currentFilter === 'ART' }" @click="setFilter('ART')">ART</span>
          <span class="filter" :class="{ active: currentFilter === 'WORKSHOPS' }"
            @click="setFilter('WORKSHOPS')">WORKSHOPS</span>
          <span class="filter" :class="{ active: currentFilter === 'FUN' }" @click="setFilter('DOODLES')">DOODLES</span>
        </div>
      </div>

      <div class="flex gap-8">
        <template v-for="project in projects">

          <div v-if="currentFilter === project.category || currentFilter === 'ALL'" :key="project.title" class="project">
            <div class="project-image-wrapper">
              <img class="project-image" :src="project.image">
              <div class="gradient-overlay"></div>
              <div class="circle">
                <span class="project-title">{{ project.title }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>

    </div>


    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">

        <div class="text-center">
          <form class="blog-subscription-form">
            <h2 class="heading-1">Subscribe to our blog</h2>
            <input id="email" name="email-address" type="email" placeholder="Your email"
              class="appearance-none block w-full focus:outline-none focus:bg-white form-control mt-8 lg:mt-12  mb-8 lg:mb-12"
              required />
            <button type="button" class="btn-primary btn-lg inline-block">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </section>

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      isDarkSectionAtTop: true
    }" />
    <!------------------------------------------------------------------------------------------>

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
      resolve_relations: 'blog-container.blogs,blog.categories',
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
      story: { content: {} },
      blog_cats: ['All', 'Business', 'Inside Look', 'Lifehacks', 'News', 'Techlogy', 'Trends', 'Uncategoized'],

      posts: [],

      filteredPosts: [],
      currentFilter: 'All',

      projects: [
        { title: "Artwork", image: "https://picsum.photos/g/200?image=122", category: 'ART' },
        { title: "Charcoal", image: "https://picsum.photos/g/200?image=116", category: 'ART' },
        { title: "Sketching", image: "https://picsum.photos/g/200?image=121", category: 'DOODLES' },
        { title: "Acrillic", image: "https://picsum.photos/g/200?image=133", category: 'WORKSHOPS' },
        { title: "Pencil", image: "https://picsum.photos/g/200?image=134", category: 'DOODLES' },
        { title: "Pen", image: "https://picsum.photos/g/200?image=115", category: 'ART' },
        { title: "Inking", image: "https://picsum.photos/g/200", category: 'WORKSHOPS' },
      ]

    }
  },
  head() {
    return {
      title: 'Read our exclusive collection of the latest tools, ideas, technologies, and innovations. ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Browse through to read our compilation of articles on startups, Agile best practices,  NFTs, blockchain, Artificial Intelligence (AI), Business Intelligence, and the Internet of Things (IoT).',
        },
      ]
    }
  },
  computed: {

    getBlogData() {
      return this.story.content.body[0].blogs
    },
    // getAllCats() {
    //   return this.story.content.body[0].blogs.map(function (obj) {
    //     return obj.content.categories
    //   })
    // }


    // isBlogDataAvailable() {
    //   return this.story.content.body.find(function (obj) {
    //     return obj.component === 'blog-container';
    //   })
    // },



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
    });


    this.posts = this.story.content.body[0].blogs;


  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },

    getPublishDate(blog) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(blog.content.published_date.split(' ')[0]).toLocaleString(
        'en-US',
        options
      )
    },
    getFeaturedImage(blog) {
      return blog.content.featured_image
    },

    filterPosts(event) {
      if (event === '') {
        this.filteredPosts = this.posts
      } else {
        this.filteredPosts = this.posts.filter(e => {
          return e.category === event.target.value
        })
      }
    },

    setFilter(filter) {
      this.currentFilter = filter;
    }


  },

}
</script>

<style scoped>
.hidden {
  display: none;
}
</style>