<template>
  <div>

    <!------------------------------Hero section ---------------------------->
    <PageHeroWithAnimatedTitle :data="{
      title: 'Blog',
      animated_word: '',
      description: 'Stay up-to-date with our team updates, industry insights, tech guides and more!'
    }" />
    <!----------------------------------------------------------------------------->

    <!------------------------------ Posts Listing ---------------------------->
    <section class="lg:py-32 py-14">
      <div class="mx-auto container">

        <div>
          <ul class="cats">
            <li v-for="(cat, index) in blog_cats" :key="index" class="text-regular bgColor-light-grey color-primary-black"
              :class="{ active: currentFilter === cat }" @click="setFilter(cat)">
              {{ cat }}
            </li>
          </ul>
        </div>


        <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 lg:gap-8 mt-8 lg:mt-16">
          <div class="md:col-span-12 articles">
            <div class="grid lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-8">

              <template v-for="(blog, index) in getBlogData">
                <article v-if="currentFilter === blog.content.categories[0].name || currentFilter === 'All'" :key="index"
                  class="zoom-in overflow-hidden cursor-pointer mb-8">

                  <div @click="gotoSingleBlogPost(blog.full_slug)">
                    <div v-if="getFeaturedImage(blog)" class="blog-thumbnail-wrapper">
                      <img :src="getFeaturedImage(blog).filename" class="scaleable-img"
                        :alt="getFeaturedImage(blog).alt" />
                    </div>
                    <div class="article-content">
                      <p class="text-sm color-intense-grey font-medium mt-4 mb-2 ctas_wrapper">
                        <template v-for="(cat, catIndex) in blog.content.categories">
                          <span :key="catIndex">{{ cat.content.name }}<span>, </span></span>
                        </template>
                      </p>
                      <h4 class="line-clamp-3">
                          {{ blog.content.title }}
                      </h4>

                      <p class="btn-text mt-4 inline-block">Read More</p>

                    </div>
                  </div>
                </article>
              </template>
            </div>
          </div>

          <!--
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
          -->

        </div>
      </div>
    </section>
    <!----------------------------------------------------------------------------->

    <!------------------------------- Subscribe To Our Blog-------------------------------------->
    <SubscribeToOurBlog />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title: `Let's strategize`,
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
      currentFilter: 'All',
      blog_cats: ['All', 'Business', 'News', 'Technology'],
    }

  },

  head() {
    return {
      title: 'Blog | Vodworks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Explore articles about advanced technologies, newest industry events and Vodworks company news.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ''
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Blog | Vodworks',
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: "Explore articles about advanced technologies, newest industry events and Vodworks company news.",
        },
      ],
    }
  },


  computed: {
    getBlogData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.allArticles.stories.sort((a, b) => new Date(b.content.published_date) - new Date(a.content.published_date))
    },
    getPopularArticlesData() {
      return this.popularArticles
    },
    // sortedItems() {
    //   this.allArticles.stories.sort( ( a, b) => {
    //         return new Date(a.content.published_date) - new Date(b.content.published_date);
    //     });
    //     return this.this.allArticles;
    // },


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

    setFilter(filter) {
      this.currentFilter = filter;
    },

    gotoSingleBlogPost(slug) {
      this.$router.push({
        path: slug,
      })
    },


    // filterPosts(event) {
    //   if (event === '') {
    //     this.filteredPosts = this.allArticles.stories
    //   } else {
    //     this.filteredPosts = this.allArticles.stories.filter(e => {
    //       return e[0].content.categories[0].name === event.target.value
    //     })
    //   }
    // },


  },

}
</script>
