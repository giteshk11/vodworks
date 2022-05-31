<template>
  <div>
    <!-- Careers at Vodworks start -->
    <section
      class="lg:py-24 py-10 bg-no-repeat bg-cover bg-center"
      :style="resolveBackground('/img/home/home-hero-bg.jpg')"
    >

      <div
        class="relative grid md:grid-cols-12 gap-2 mx-auto max-w-4/5 items-center container"
      >
        <div class="relative my-8 md:col-span-7 md:my-0">
          <h1
            class="text-white text-3xl md:text-4xl lg:text-5xl font-arial-black"
          >
            {{ story.content.body[0].title }}
          </h1>
          <p class="text-white mt-4 lg:text-lg lg:pr-24">
            {{ story.content.body[0].description_1 }}
          </p>

          <p class="text-white mt-4 lg:text-lg lg:pr-24">
            {{ story.content.body[0].description_2 }}
          </p>
          <div class="mt-8">
            <a
              :href="story.content.body[0].button_url"
              class="py-4 px-6 bg-white text-h-red rounded-md font-bold uppercase inline-block"
              target="_blank"
            >
              {{ story.content.body[0].button }}
            </a>
          </div>

        </div>
        <!-- image -->
        <div class="justify-self-center  md:col-span-5 md:pl-16 lg:pl-32 my-8 md:my-0">
          <!-- image -->
          <img
            :src="story.content.body[0].image.filename"
            class="rounded-2xl mx-auto hvr-left"
            :alt="story.content.body[0].image.alt"
          />
        </div>
      </div>

    </section>
    <!-- Careers at Vodworks End -->




    <!-- benefits -->
    <section class="lg:py-24 py-10 max-w-4/5 container mx-auto" >
      <!-- text -->
      <div class="mx-auto md:max-w-4/5 text-center">
        <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
          {{ story.content.body[1].title }}
        </h2>
        <p class="text-h-gray mt-4 text-lg">
          {{ story.content.body[1].description }}
        </p>
      </div>

      <!-- card list -->
      <div
        class="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="{ backgroundImage: `url(${story.content.body[1].card_1_image.filename})` }"

          ></div>
          <p class="font-bold text-xl mt-4"> {{ story.content.body[1].card_1_title }}</p>
          <p class="text-h-gray mt-2">
            {{ story.content.body[1].card_1_description }}
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="{ backgroundImage: `url(${story.content.body[1].card_2_image.filename})` }"
          ></div>
          <p class="font-bold text-xl mt-4"> {{ story.content.body[1].card_2_title }}</p>
          <p class="text-h-gray mt-2">
            {{ story.content.body[1].card_2_description }}
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="{ backgroundImage: `url(${story.content.body[1].card_3_image.filename})` }"
          ></div>
          <p class="font-bold text-xl mt-4"> {{ story.content.body[1].card_3_title }}</p>
          <p class="text-h-gray mt-2">
            {{ story.content.body[1].card_3_description }}
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="{ backgroundImage: `url(${story.content.body[1].card_4_image.filename})` }"
          ></div>
          <p class="font-bold text-xl mt-4"> {{ story.content.body[1].card_4_title }}</p>
          <p class="text-h-gray mt-2">
            {{ story.content.body[1].card_4_description }}
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="{ backgroundImage: `url(${story.content.body[1].card_5_image.filename})` }"
          ></div>
          <p class="font-bold text-xl mt-4"> {{ story.content.body[1].card_5_title }}</p>
          <p class="text-h-gray mt-2">
            {{ story.content.body[1].card_5_description }}
          </p>
        </div>

        <!-- card -->
        <div class="text-center bgColor-grey p-2 pb-4 rounded-xl hvr-top">
          <div
            class="bg-cover bg-no-repeat bg-center h-44 w-full rounded-tr-xl rounded-tl-xl"
            :style="{ backgroundImage: `url(${story.content.body[1].card_6_image.filename})` }"
          ></div>
          <p class="font-bold text-xl mt-4"> {{ story.content.body[1].card_6_title }}</p>
          <p class="text-h-gray mt-2">
            {{ story.content.body[1].card_6_description }}
          </p>
        </div>
      </div>
    </section>
    <!-- end benefits -->

    <!-- values -->
    <section
      class="lg:py-24 py-10 items-center bg-no-repeat bg-cover bg-center"
      :style="resolveBackground('/img/product-bg.jpg')"
    >
      <div class="max-w-4/5 mx-auto container">
        <!-- text -->
        <div class="text-white text-center mx-auto max-w-4/5">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-arial-black">
            {{ story.content.body[2].title }}
          </h2>
          <p class="mt-4 lg:text-lg opacity-80">
            {{ story.content.body[2].description }}
          </p>
        </div>
        <!-- card list -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <!-- card -->
          <div class="bg-b-dark-gray p-2 pb-4 rounded-xl hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-xl rounded-tl-xl"
              :style="{ backgroundImage: `url(${story.content.body[2].card_1_image.filename})` }"
            ></div>

            <!-- text -->
            <p class="text-white text-center mt-4 font-bold text-xl">
              {{ story.content.body[2].card_1_title }}
            </p>
          </div>

          <!-- card -->
          <div class="bg-b-dark-gray p-2 pb-4 rounded-xl hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-xl rounded-tl-xl"
              :style="{ backgroundImage: `url(${story.content.body[2].card_2_image.filename})` }"
            ></div>

            <!-- text -->
            <p class="text-white text-center mt-4 font-bold text-xl">
              {{ story.content.body[2].card_2_title }}
            </p>
          </div>

          <!-- card -->
          <div class="bg-b-dark-gray p-2 pb-4 rounded-xl hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-xl rounded-tl-xl"
              :style="{ backgroundImage: `url(${story.content.body[2].card_3_image.filename})` }"
            ></div>

            <!-- text -->
            <p class="text-white text-center mt-4 font-bold text-xl">
              {{ story.content.body[2].card_3_title }}
            </p>
          </div>

          <!-- card -->
          <div class="bg-b-dark-gray p-2 pb-4 rounded-xl hvr-top">
            <!-- image -->
            <div
              class="w-full h-56 bg-no-repeat bg-cover bg-center rounded-tr-xl rounded-tl-xl"
              :style="{ backgroundImage: `url(${story.content.body[2].card_4_image.filename})` }"
            ></div>

            <!-- text -->
            <p class="text-white text-center mt-4 font-bold text-xl">
              {{ story.content.body[2].card_4_title }}
            </p>
          </div>
        </div>
      </div>

    </section>
    <!-- end values -->

    <!-- Is This You section start -->
    <section class="lg:py-24 py-10">
      <div class="grid md:grid-cols-2 gap-12 items-center max-w-4/5 container mx-auto">
        <!-- text -->
        <div class="my-8 md:my-0">
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
            {{ story.content.body[3].title }}
          </h2>
          <p class="text-lg text-h-gray mt-4">
            {{ story.content.body[3].description_1 }}
          </p>
          <p class="text-lg text-h-gray mt-4">
            {{ story.content.body[3].description_2 }}
          </p>
        </div>

        <!-- image -->
        <div class="">
          <img
            :src="story.content.body[3].image.filename"
            class="rounded-2xl lg:w-4/5 mx-auto hvr-right"
            :alt="story.content.body[3].image.alt"
          />
        </div>

      </div>

    </section>
    <!-- Is This You section end -->

    <!-- join our team start-->
    <section class="lg:py-24 py-10 bgColor-grey">

      <div class="grid md:grid-cols-2 items-center gap-8 mx-auto max-w-4/5 container">
        <!-- team -->
        <div class="overflow-x-hidden rounded-full order-2 lg:order-none">
          <img
            class="w-80 mx-auto md:m-0 hvr-right"
            :src="story.content.body[4].image.filename"
            :alt="story.content.body[4].image.alt"
          />
        </div>
        <div class="my-8 lg:my-0">
          <!-- text -->
          <h2 class="color-black text-3xl md:text-4xl lg:text-5xl font-arial-black">
            {{ story.content.body[4].title }}
          </h2>

          <p class="text-lg text-h-gray mt-4">
            {{ story.content.body[4].description }}
          </p>
          <a
            :href="story.content.body[4].button_url"
            class="inline-block mt-8 py-4 px-6 button-red rounded-md text-white font-bold uppercase"
            target="_blank"
          >
            {{ story.content.body[4].button }}
          </a>
        </div>
      </div>

    </section>
    <!-- join our team End-->



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
        resolve_relations: 'career',
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
        title: 'Join Us Today - We\'re The Right Place For You',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'We\'re looking for great people to join our growing team. Connect with our HR team to find the right fit for your career growth - Let\'s talk!',
          },
        ],
      }
    },
    computed:{
      getHero(){
        return this.story.content.body[0]
      },
      getBenefits(){
        return this.story.content.body[1]
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

    methods: {
      resolveBackground(path) {
        return `background-image: url(${require('~/assets' + path)});`
      },

    },
  }
</script>
