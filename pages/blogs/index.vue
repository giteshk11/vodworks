<template>
  <div class="">

    <PageHeroWithAnimatedTitle :data="{
      title: 'Blog',
      animated_word: '',
      description: 'Stay up-to-date with our team updates, industry insights, tech guides and more!'
    }" />


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

    // filterPosts(event) {
    //   if (event === '') {
    //     this.filteredPosts = this.allArticles.stories
    //   } else {
    //     this.filteredPosts = this.allArticles.stories.filter(e => {
    //       return e[0].content.categories[0].name === event.target.value
    //     })
    //   }
    // },

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