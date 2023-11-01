<template>
  <footer :style="resolveBackground('/img/footer-bg-logo.svg')" class="bg-no-repeat">


    <div class="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto container color-white">
      <!-- logo -->
      <div class="logo">
        <img src="~/assets/img/footer-logo.svg" alt="VW logo" />
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
        <h4 class="uppercase font-medium mb-4 lg:mb-8">Contact us</h4>
        <form class="mb-4 lg:mb-8 hidden md:inline-block">
            <input class="form-control" type="email" placeholder="Your email" />
        </form>
        <div class="social-icon">
          <a class="hvr-top inline-block" href="https://www.linkedin.com/company/vodworks" target="_blank"><img src="~assets/img/icons/linkedin-icon-light.svg" alt="linkedin-icon" /></a>
        </div>
      </div>
    </div>

    <!-- Cookies consent -->
    <div>
      <client-only>
        <CookieControl>
          <template #bar>
            <h3>Cookies</h3>
            <p class="cookies-description">This website uses cookies to ensure you get the best experience on our
              website. Find out <NuxtLink to="/privacy-policy" active-class="bg-transparent">more</NuxtLink>.</p>
          </template>

        </CookieControl>
      </client-only>
    </div>

  </footer>
</template>

<script>

import ClientOnly from 'vue-client-only'
import AllRoutes from '~/static/routes'
export default {
  components: {
    ClientOnly
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
