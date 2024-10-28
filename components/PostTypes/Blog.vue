<!-- eslint-disable vue/no-v-html -->
<template>
  <!------------------------------- Blog Detailed Hero -------------------------------->
  <div class="single-post">
    <!--    :style="{ backgroundImage: `url(${getFeaturedImage})` }"-->
    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
      <div class="mx-auto container">
        <h1 class="heading-2 font-bold">
          {{ blok.title }}
        </h1>

        <!-- If We have author -->
        <div v-if="blok.author !== ''" class="flex mt-8 author-summary">
          <div class="w-12 h-12 rounded-full mr-4 overflow-hidden">
            <img :src="blok.author.content.short_img.filename" alt="Author Avatar" />
          </div>
          <div>
            <p class="font-bold">
              <NuxtLink to="/about"><span>{{ blok.author.content.Name }}</span></NuxtLink>
            </p>
            <p class="mt-1 text-small opacity-80">
              {{ getPublishDate }} - {{ blok.read_time }} min read
            </p>
          </div>
        </div>

        <!--  Defautl Author -->
        <div v-else class="flex mt-8 author-summary">
          <div class="w-12 h-12 rounded-full mr-4 overflow-hidden">
            <img src="~/assets/img/vw-icon.png" alt="Author Avatar" />
          </div>
          <div>
            <p class="font-bold">
              <NuxtLink to="/about"><span>Vodworks</span></NuxtLink>
            </p>
            <p class="mt-1 text-small opacity-80">
              {{ getPublishDate }} - {{ blok.read_time }} min read
            </p>
          </div>
        </div>


      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Blog Detailed Description -------------------------------->
    <section class="lg:py-16 py-10 blog-description">
      <div class="lg:w-3/5 w-4/5 container mx-auto single-post-featured-img">
        <img :src="getFeaturedImage" class="rounded-lg" alt="Featured Image" />
      </div>
      <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-8 px-8">
        <div class="md:col-span-3">
          <div class="blog-leftsidebar">
            <nav class="toc">
              <ul>
                <li v-for="section in sections" :key="section.id">
                  <span :class="{ active: activeSection === section.id }" @click="scrollToSection(section.id)">
                    {{ section.text }}
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="md:col-span-6">
          <div id="single-blog-post" ref="details" class="" v-html="$md.render(blok.content)">
          </div>
          <!--About the Author -->
          <div>
            <!-- If We have author -->
            <div v-if="blok.author && blok.author.content" class="about-author mt-16 bgColor-normal-grey p-4">
              <div class="flex py-8 author-summary">
                <div class="rounded-full mr-4 avatar">
                  <img class="rounded-full" :src="blok.author.content.Avatar.filename" alt="Author Avatar" />
                </div>
                <div>
                  <h3>About the Author</h3>
                  <div class="flex items-center gap-4">
                    <p class="font-bold text-big mt-4">{{ blok.author.content.Name }}</p>
                    <a class="inline-block mt-4" target="_blank" :href="blok.author.content.Linkedin_Url">
                      <img src="~/assets/img/icons/Linkedin-icon.svg" alt="Linkedin-icon" />
                    </a>
                  </div>
                  <p class="mt-1">
                    {{ blok.author.content.Description }}
                  </p>
                </div>
              </div>
            </div>
            <!--  Defautl Author -->
            <div v-else>
            </div>
          </div>
        </div>

        <div class="md:col-span-3">
          <div class="cs-cta">
            <img src="~/assets/img/case-bg.png" alt="img" />
            <div class="content">
              <a href="/cases" target="_blank" rel="noopener noreferrer" class="btn-primary btn-md block mt-4">More Case
                Studies</a>
            </div>
          </div>
          <div class="blog-rightsidebar">
            <div class="wrapper">
              <img src="~/assets/img/dev-partner.jpg" alt="img" />
              <div class="content">
                <h4 class="color-white">Accelerate Your Projects With Our On-Demand Developers</h4>
                <a href="/contact" target="_blank" rel="noopener noreferrer" class="btn-primary btn-md block mt-4">Let's
                  Talk</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!--------------Featured CTA  -------------------------------------------------------------->
    <section class="lg:py-24 py-14">
      <div class="mx-auto container bgColor-tertiary-black color-white p-8 rounded-lg">
        <div
          class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 items-center gap-4 md:gap-16 text-center md:text-left">
          <div class="md:col-span-8">
            <h2 class="heading-2 col-start-1 col-end-3 lg:py-8">Talent Shortage Holding You Back? Scale Fast With Us
            </h2>
          </div>
          <div class="md:col-span-4 text-center">
            <NuxtLink to="/contact" class="btn-primary inline-block btn-lg mt-8 md:mt-0">
              Get Started Today
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!----------------------Frequently Asked Questions------------------------------------------>
    <section class="lg:py-32 py-14 bgColor-normal-grey">
      <div class="mx-auto container">
        <div class="mx-auto w-full lg:w-3/5">
          <div class="text-center">
            <h2 v-in-viewport>Frequently Asked <span class="bgFill"><span class="textClip">Questions</span></span></h2>
          </div>
          <div class="mt-8 lg:mt-16">
            <AccordionNew :payload="filteredFAQs" />
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Subscribe To Our Blog-------------------------------------->
    <SubscribeToOurBlog />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Related Articles-------------------------------------->
    <ArticlesSections :data="{
      title: 'Related Posts',
      animated_word: '',
      getBlogData,
      isDarkMode: false
    }" />
    <!------------------------------------------------------------------------------------------>

    <!------------------------------- Get in Touch with us-------------------------------------->
    <GetInTouchWithUs :data="{
      title: 'Get in Touch with us',
      isDarkSectionAtTop: true
    }" />
    <!------------------------------------------------------------------------------------------>

  </div>
</template>

<script>


export default {
  name: 'Blog',
  props: {
    blok: {
      type: Object,
      default: null
    },
    faqsdata: {
      type: Object,
      default: null
    },
    getBlogData: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      sections: [],
      activeSection: null,
    };
  },

  computed: {
    getPublishDate() {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(this.blok.published_date.split(' ')[0]).toLocaleString(
        'en-US',
        options
      )
    },
    getFeaturedImage() {
      return this.blok.featured_image.filename
    },
    filteredFAQs() {
      return this.faqsdata.stories.filter(function (faq) {
        return faq.content.isPublishedForBlogPost === true
      })
    }

  },

  mounted() {

    // Adding target = "_blank" in the all anchors
    const collections = this.$refs.details.querySelectorAll('a')
    collections.forEach((anchor) => {
      anchor.target = "_blank"
      anchor.rel = "noopener noreferrer nofollow"
    });

    const headingElements = this.$refs.details.querySelectorAll('h2')
    headingElements.forEach((element) => {
      element.id = element.innerText.replace(/\s+/g, '-').toLowerCase()
    });
    this.sections = Array.from(headingElements).map((heading) => ({
      text: heading.innerText,
      id: heading.id || heading.innerText.replace(/\s+/g, '-').toLowerCase(),
    }));

    this.observeSections();

  },


  methods: {

    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
    observeSections() {
      const options = {
        root: null,
        rootMargin: '0px', // No root margin needed for this approach
        threshold: 0.5,
      };
      const observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
      this.sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    },

    handleIntersect(entries) {
      entries.forEach(entry => {
        // Check if the entry is intersecting and within the offset range
        const rect = entry.boundingClientRect;
        if (entry.isIntersecting && rect.top <= window.innerHeight) {
          this.activeSection = entry.target.id;
        }
      });
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const sectionTop = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: sectionTop, // Adjust this as needed
          behavior: 'smooth',
        });
      }
    },

  }
}
</script>
