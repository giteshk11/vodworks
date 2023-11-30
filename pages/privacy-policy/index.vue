<template>
  <div>


    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <div class="text-center">
          <h1>
            {{ story.content.title }}
          </h1>
        </div>
      </div>
    </section>


    <section id="single-blog-post" class="lg:py-16 py-10 blog-description">
      <div id="text" ref="privacyPolicyContent" class="lg:w-3/5 w-4/5 container mx-auto"
        v-html="$md.render(getContent.Privacy_Policy_Content)">
      </div>
    </section>




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
      resolve_relations: 'privacy-policy',
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
    }
  },
  
  head() {
    return {
      title: 'Privacy Policy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Privacy Policy',
        },
      ],
    }
  },

  computed: {
    getContent() {
      return this.story.content.body[0]
    },
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
    })

    const collections = this.$refs.privacyPolicyContent.querySelectorAll('a')
    // eslint-disable-next-line no-return-assign
    collections.forEach((anchor) => anchor.target = "_blank")
  },

}
</script>
