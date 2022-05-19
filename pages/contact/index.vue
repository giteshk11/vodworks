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
          {{ story.content.title }}
        </h1>
        <p class="mt-4 lg:text-lg lg:px-8">
          {{ story.content.description }}
        </p>
      </div>
    </section>

    <section class="lg:py-24 py-10 overflow-hidden">
      <div class="max-w-4/5 mx-auto container contact-form">
        <!-- form -->
        <form
          name="Contact_Form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >

          <input type="hidden" name="form-name" value="Contact_Form" />
          <div
            class="lg:w-3/4 rounded-xl mx-auto"
          >
            <div class="grid md:grid-cols-2 gap-6 text-black">
              <input
                name="full_name"
                type="text"
                placeholder="Full name"
                class="p-4 bg-b-gray-form rounded-md outline-none"
                required
              />
              <input
                name="company_name"
                type="text"
                placeholder="Company name"
                class="p-4 bg-b-gray-form rounded-md outline-none"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                class="p-4 bg-b-gray-form rounded-md outline-none"
                pattern="^[a-zA-Z0-9.%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{2,61}$"
                oninvalid="setCustomValidity('Enter your business email address.')"
                onchange="try{setCustomValidity('')}catch(e){}"
                required
              />
              <input
                name="phone_number"
                type="number"
                placeholder="Phone number"
                class="p-4 bg-b-gray-form rounded-md outline-none"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="8"
              class="p-4 bg-b-gray-form w-full mt-6 rounded-md text-black outline-none"
              required
            ></textarea>
            <button
              type="submit"
              class="mt-4 text-white py-4 lg:px-24 px-12 rounded-md font-bold uppercase button-red inline-block float-right"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="lg:py-16 py-10 bgColor-grey">
      <!--  -->
      <div
        class="grid lg:grid-cols-2 max-w-4/5 mx-auto items-center container lg:text-left text-center"
      >
        <div class="lg:border-r lg:border-gray-700 lg:pr-10 pb-10 lg:pb-0">
          <h4 class="font-bold text-2xl lg:text-3xl">{{ story.content.body[0].title }}</h4>
          <p class="text-h-gray mt-2">
            {{ story.content.body[0].description }}
          </p>
        </div>

        <div
          class="grid lg:grid-cols-2 lg:ml-16 pt-10 lg:gap-16 lg:pt-0 lg:w-auto mx-auto border-t lg:border-none border-gray-700"
        >
          <div>
            <h2 class="font-bold text-lg">{{ story.content.body[0].email_title }}</h2>
            <p class="text-h-gray mt-2"><a href="mailto:info@vodworks.com">{{ story.content.body[0].email_value }}</a></p>
          </div>

          <div class="mt-7 lg:mt-0">
            <h2 class="font-bold text-lg">{{ story.content.body[0].contact_number_title }}</h2>
            <p class="text-h-gray mt-2"><a href="tel:+4408432897925">{{ story.content.body[0].contact_number_value }}</a></p>
          </div>
        </div>
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
      resolve_relations: 'contact.need-customer-support',
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
      title: 'Connect With Our Experts Via Email Or Phone',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We’re headquartered in the United Kingdom with offices in South Asia, the Middle East, Canada & Singapore. We\'re focused on building innovative technology solutions for a large number of industries, businesses, entrepreneurs, SMBs, and startups. For queries email us at info@vodworks.com or call us +44 (0) 84 3289 7925.' ,
        },
      ],
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
<style>
.contact-form input, .contact-form textarea{
  border: 1px solid #ccc;
  background-color: transparent;
}

.contact-form input:focus, .contact-form textarea:focus{
  background-color: #f9f9f9;
}
</style>
