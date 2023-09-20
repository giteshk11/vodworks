<template>
  <footer class="lg:py-32 py-14 bgColor-tertiary-black overflow-hidden">
    <div class="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-12 mx-auto max-w-4/5 container color-white">
      <!-- logo -->
      <div class="logo columns-">
        <img src="~/assets/img/footer-logo.svg" alt="VW logo" />
      </div>

      <div class="flex flex-col gap-8 lg:flex-row">
        <!-- Services -->
        <div class="flex flex-col leading-8 mt-4 lg:mt-0">
          <h4 class="uppercase mb-4 lg:mb-8">Services</h4>

          <ul>
            <li v-for="(item, index) in RoutesList.services.list" :key="index" class="block color-white">
              <NuxtLink :to="item.path" active-class="bg-transparent">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-col leading-8 mt-4 lg:mt-0">
          <h4 class="uppercase mb-4 lg:mb-8">Quick Links</h4>
          <ul>
            <li v-for="(item, index) in RoutesList.quick_links.list" :key="index" class="block color-white">
              <a :href="item.path" target="_blank">
                {{ item.name }}
              </a>
            </li>

          </ul>
        </div>

        <!-- Company -->
        <div class="flex flex-col leading-8 mt-4 lg:mt-0">
          <h4 class="uppercase mb-4 lg:mb-8">Company</h4>
          <ul>
            <li v-for="(item, index) in RoutesList.company" :key="index" class="block color-white">
              <NuxtLink :to="item.path" active-class="bg-transparent">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="logo columns-">
        <img src="~/assets/img/footer-logo.svg" alt="VW logo" />
      </div>

     
    </div>

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
import Routes from '~/static/routes-list'
export default {
  components: {
    ClientOnly
  },
  data() {
    return {
      RoutesList: Routes,
      cookies: this.$cookies,
    }
  },
}
</script>
