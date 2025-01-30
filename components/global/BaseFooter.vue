<template>
  <footer :style="resolveBackground('/img/footer-bg-logo.svg')" class="bg-no-repeat">


    <div class="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto container color-white">
      <!-- logo -->
      <div class="logo">
        <NuxtLink to="/">
          <img class="lazyload logo-img" src="~/assets/img/footer-logo.svg" alt="Vodworks Logo" />
        </NuxtLink>
      </div>

      <div class="flex flex-col gap-12 lg:flex-row">
        <!-- Services -->
        <div class="flex flex-col leading-8 mt-4 lg:mt-0">
          <h4 class="uppercase font-medium mb-4 lg:mb-8">Services</h4>

          <ul>
            <li v-for="(item, index) in Navigations.navigationItems[0].list" :key="index" class="block color-white">
              <NuxtLink :to="item.path" active-class="bg-transparent">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>

        </div>

        <!-- Quick Links -->
        <div class="flex flex-col leading-8 mt-4 lg:mt-0">
          <h4 class="uppercase font-medium mb-4 lg:mb-8">Quick Links</h4>
          <ul>
            <li v-for="(item, index) in Navigations.quick_links.list" :key="index" class="block color-white">
              <NuxtLink :to="item.path">
                {{ item.name }}
              </NuxtLink>
            </li>

          </ul>
        </div>

        <!-- Company -->
        <div class="flex flex-col leading-8 mt-4 lg:mt-0">
          <h4 class="uppercase font-medium mb-4 lg:mb-8">Company</h4>
          <ul>
            <li v-for="(item, index) in Navigations.navigationItems[4].list" :key="index" class="block color-white">
              <NuxtLink :to="item.path" active-class="bg-transparent">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-4 lg:mt-0 ">
        <h4 class="uppercase font-medium mb-4 lg:mb-8">Follow Us</h4>
        <div class="social-icon flex flex-nowrap gap-6">
          <a class="hvr-top inline-block" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/company/vodworks"
            target="_blank"><img class="lazyload" src="~/assets/img/icons/linkedin-icon-light.svg" alt="Linkedin icon" /></a>
          <a class="hvr-top inline-block" rel="noopener noreferrer nofollow" href="https://twitter.com/vodworksit"
            target="_blank"><img class="lazyload" src="~/assets/img/icons/twitter-light.svg" alt="X icon" /></a>
          <a class="hvr-top inline-block" rel="noopener noreferrer nofollow" href="https://www.facebook.com/vodworks/"
            target="_blank"><img class="lazyload" src="~/assets/img/icons/facebook-light.svg" alt="Facebook icon" /></a>
        </div>
      </div>

    </div>

     <!-- Cookies consent -->
     <div>
      <CookieConsent/> 
    </div>

  </footer>
</template>

<script>


import AllRoutes from '~/static/routes'
import CookieConsent from '~/components/global/CookieConsent.vue';

export default {
  components: {
    CookieConsent,
  },
  data() {
    return {
      Navigations: AllRoutes,
      cookies: this.$cookies,

    }
  },
  methods: {
    resolveBackground(path) {
      return `background-image: url(${require('~/assets' + path)});`
    },
  }
}
</script>
