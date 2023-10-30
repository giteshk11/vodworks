<template>
    <div class="">
        <h2>API testing Component</h2>


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
            resolve_relations: 'testimonial-container.testimonials_list',
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
        const path = context.route.path === '/' ? '/home' : '/testimonials-neww'

        // Load the JSON from the API
        return loadData({
            version,
            api: context.app.$storyapi,
            errorCallback: context.error,
            path
        })
    },
    data() {
        return {
            story: { content: {} },
            //   testimonials:[],

        }
    },

    computed: {
        getTestimonialsData() {
            return this.story.content.body[0]

        }
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
  },


}
</script>
  



<!-- <script>

export default {
    data() {
        return {
            posts: []
        };
    },
    created() {
        fetch('https://api.storyblok.com/v2/cdn/stories/reviews/?token=LSAGJFizpCbsp7rpxXMcRgtt&version=published')
            .then((res) => res.json())
            .then((posts) => {
                // store the posts in the reactive state
                this.posts = posts;
            });
    }

    data() {
        return {
            testimonials: [],
            story: { content: {} },
        }
    },
    async fetch() {
        this.testimonials = await fetch(
            'https://api.storyblok.com/v2/cdn/stories/testimonials-new?token=LSAGJFizpCbsp7rpxXMcRgtt&version=published'
        ).then(res => res.json())

    },

    computed: {
       
    }




};

</script> -->