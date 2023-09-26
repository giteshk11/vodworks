<template>
  <div class="header bgColor-light-grey py-4 md:py-2">


    <header class="flex flex-row items-center justify-between mx-auto max-w-4/5 container">

      <!-- logo -->
      <NuxtLink to="/" class="lg:justify-self-end mr-5 cursor-pointer" active-class="bg-transparent">
        <img src="~/assets/img/vw-logo.svg" alt="logo" />
      </NuxtLink>

      <!-- Main Navigation bar -->
      <ul class="hidden md:inline-block">

        <li v-for="(item, index) in Navigations.navigationItems" :key="index" class="relative"
          :class="item.list ? 'dropdown-parent hasDropdown' : ' '">
          <NuxtLink :to="item.path" class="flex gap-2 items-center">
            {{ item.name }} <div v-if="item.list">
              <TiltedArrow />
            </div>
          </NuxtLink>

          <ul v-if="item.list" class="dropdown bgColor-light-grey">
            <li v-for="(childItem, childIndex) in item.list" :key="childIndex">
              <NuxtLink :to="childItem.path" class="inline-block">
                {{ childItem.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>

      </ul>

      <!-- button -->
      <NuxtLink to="/contact" class="btn-primary btn-md hidden lg:inline-block invisible md:visible">
        Get in touch
      </NuxtLink>

      <!-- icon menu -->
      <img v-show="!showMenu" src="~assets/img/icons/Burger.svg"
        class="self-center justify-self-end md:hidden cursor-pointer hamburger" alt="hamburger icon"
        @click="showMenu = true" />

      <div v-show="showMenu" class="self-center justify-self-end md:hidden cursor-pointer" @click="showMenu = false">
        <img src="~assets/img/icons/x.svg" alt="" />
      </div>

    </header>

    <!--Mobile Menus-->
    <div class="mobileNavigation">





      <ul class="text-h-font hidden md:hidden flex flex-col items-start px-8 py-8 space-y-4">

        <li>
          <NuxtLink to="/webinars" class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
            @click.native="showMenu = false">
            Webinars
          </NuxtLink>
        </li>

        <li class="relative dropdown-parent hasDropdown">

          <NuxtLink to="#" class="py-2 px-3 rounded-md inline-block" active-class="bg-transparent"
            :class="isCompanyActive ? 'isActive' : ''" @click.native="isCompanyActive = !isCompanyActive">
            Company
            <TiltedArrow />
          </NuxtLink>
          <ul v-show="isCompanyActive" class="p-4 mt-2 rounded-md">
            <li>
              <NuxtLink to="/case-studies" class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false">
                Case Studies
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/newsletters" class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false">
                Newsletters
              </NuxtLink>
            </li>
          </ul>

        </li>

      </ul>

    </div>


  </div>
</template>

<script>
import AllRoutes from '~/static/routes'
import TiltedArrow from '@/components/icons/TiltedArrow.vue'

export default {
  name: 'BaseHeader',
  components: {
    TiltedArrow
  },
  data() {
    return {
      showMenu: false,
      isServicesActive: false,
      isCompanyActive: false,
      isIndustriesActive: false,
      Navigations: AllRoutes
    }
  },
  methods: {

    // toggleDropdown(){
    //   this.isDropdownActive = !this.isDropdownActive
    // }
  }
}

</script>

