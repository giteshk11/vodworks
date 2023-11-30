<template>
  <div class="">

    <PageHeroWithAnimatedTitle :data="{
      title: 'Blog',
      animated_word: '',
      description: 'Stay up-to-date with our team updates, industry insights, tech guides and more!'
    }" />



    <div id="app" class="mx-auto container py-16">
      <div class="title-container mb-8">
        
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

          <div class="md:col-span-8 articles">
            <div class="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-8">

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
                      <br />
                      <span>{{ getPublishDate(blog) }}</span>
                    </p>


                    <h4 class="line-clamp-3">
                      {{ blog.content.title }}
                    </h4>

                    <!--
                     <h4 class="line-clamp-2">
                      <NuxtLink :to="`/${blog.full_slug}`">
                        {{ blog.content.title }}
                      </NuxtLink>
                    </h4>
                     -->

                    <NuxtLink :to="`/${blog.full_slug}`" class="btn-text mt-4 inline-block">Read More</NuxtLink>
                  </div>

                </article>

              </template>


            </div>
          </div>

          <aside class="md:col-span-4">

            <div class="px-4 py-8  bgColor-light-grey">

              <h4 class="mb-8">Popular</h4>

              <template v-for="(blog, index) in getPopularArticlesData.stories">

                <article :key="index"
                  class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 overflow-hidden cursor-pointer mb-8 ">

                  <div v-if="getFeaturedImage(blog)" class="blog-thumbnail-wrapper popular-blog-wrapper md:col-span-4">
                    <img :src="getFeaturedImage(blog).filename" class="scaleable-img" :alt="getFeaturedImage(blog).alt" />
                  </div>

                  <div class="md:col-span-8 article-content">
                    <p class="text-sm color-dark-grey font-medium mt-2 mb-2 ctas_wrapper">
                      <template v-for="(cat, catIndex) in blog.content.categories">
                        <span :key="catIndex" class="color-primary-red">{{ cat.content.name }}<span>, </span></span>
                      </template>

                    </p>

                    <h6 class="line-clamp-2">
                      {{ blog.content.title }}
                    </h6>

                  </div>

                </article>

              </template>
            </div>

          </aside>

        </div>
      </div>
    </section>



    <!--
  
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
    
  -->

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


  async asyncData(context) {

    const [allArticlesRes, popularArticlesRes] = await Promise.all([

      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'blogs/',
        per_page: 100,
        resolve_relations: 'blog-container.blog,blog.categories',
      }),
      context.app.$storyapi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'blogs/',
        per_page: 12,
        resolve_relations: 'blog-container.blog,blog.categories',
      }),

    ])
    return {
      allArticles: allArticlesRes.data,
      popularArticles: popularArticlesRes.data,
    }

  },


  data() {
    return {
      story: { content: {} },
      blog_cats: ['All', 'Business', 'Inside Look', 'Lifehacks', 'News', 'Technology', 'Trends', 'Uncategoized'],

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
      ],

      array: [
        {
          id: 1,
          date: 'Mar 12 2012 10:00:00 AM '
        },
        {
          id: 2,
          date: 'Mar 8 2012 08:00:00 AM '
        }

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

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.allArticles.stories.sort((a, b) => new Date(b.content.published_date) - new Date(a.content.published_date))


    },

    // sortedItems() {
    //   this.allArticles.stories.sort( ( a, b) => {
    //         return new Date(a.content.published_date) - new Date(b.content.published_date);
    //     });
    //     return this.this.allArticles;
    // },

    getPopularArticlesData() {
      return this.popularArticles
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