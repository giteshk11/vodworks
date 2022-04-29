<template>

    <div>
      <section
        :style="resolveBackground('/img/home/home-hero-bg.jpg')"
        class="lg:py-32 py-20 items-center bg-no-repeat bg-cover bg-center"
      >
        <div class="mx-auto max-w-4/5 xl:max-w-3/5 text-white text-center">
          <h1
            class="text-3xl md:text-4xl lg:text-5xl font-arial-black"
          >
            {{ this.story.content.title }}
          </h1>
          <p class="mt-4 lg:text-lg lg:px-8">
            {{ this.story.content.description }}
          </p>
        </div>
      </section>

       <div class="sp-container">
         <section
           v-for="(project, i) in socialProjects" :key="i"
           class="lg:py-32 py-20 items-center"
         >
           <div class="mx-auto max-w-4/5 container">
             <div class="grid md:grid-cols-2 gap-8 ">
               <div>
                 <div class="w-full flex items-center">
                   <img
                     :src="project.project_icon.filename"
                     :alt="project.project_icon.alt"
                     class="w-16 object-contain"
                   />
                   <div class="px-4">
                     <h6 class="lg:text-lg font-bold color-grey">{{ project.project_city }}</h6>
                     <h4 class="font-arial-black text-2xl md:text-3xl lg:text-4xl">{{ project.project_name }}</h4>
                   </div>
                 </div>
                 <p class="my-8 text-lg text-h-gray">{{ project.description }}</p>

                 <div
                      class="social-content text-lg text-h-gray"
                      v-html="$md.render(project.features)"
                 ></div>

                 <div class="mt-8">
                   <img
                     :src="project.technologies.filename"
                     :alt="project.technologies.alt"
                   />
                 </div>
               </div>
               <div class="mt-8 md:my-auto">
                 <img
                   :src="project.thumbnail.filename"
                   :alt="project.thumbnail.alt"
                   class="w-full mx-auto hvr-right "
                 />
               </div>
             </div>
           </div>
         </section>
       </div>


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
        resolve_relations: '',
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
        title: 'Be our partner to reach a wider customer base.',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'We are passionate about technology and are open to working with other companies to resell their products, develop together, build teams and provide investments.' ,
          },
        ],
      }
    },
    computed: {
      socialProjects(){
        return this.story.content.body
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
    },
    methods:{
      resolveBackground(path){
        return `background-image:url(${require('~/assets' + path)})`
      }
    }
  }
</script>

<style scoped>
  .sp-container section:nth-child(even){
      background-color: #F4F4F4;
  }
  .sp-container section:nth-child(even) .grid>div:first-child{
    order: 2;
  }

  @media only screen and (max-width: 767px) {
    .sp-container section:nth-child(even) .grid>div:first-child{
      order: inherit;
    }
  }
</style>
