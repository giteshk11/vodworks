<template>
  <div class="header bgColor-light-grey py-4 md:py-2">


    <header class="flex flex-row items-center justify-between mx-auto max-w-4/5 container">

      <!-- logo -->
      <NuxtLink to="/" class="lg:justify-self-end mr-5 cursor-pointer" active-class="bg-transparent">
        <img src="~/assets/img/vw-logo.svg" alt="logo" />
      </NuxtLink>

      <!-- Main Navigation bar -->
      <ul class="hidden md:inline-block">

        <li v-for="(item, index) in Navigations.navigationItems" :key="index" class="relative color-primary-black" 
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



      <ul v-show="showMenu" class="text-h-font md:hidden flex flex-col items-start px-8 py-8">

        <!------------------------------------------Services----------------------------------->
        <li>
          <NuxtLink to="/services" class="py-2 flex gap-2 items-center" :class="isServicesActive ? 'isActive' : ''"
            @click.native="isServicesActive = !isServicesActive"
            >
          Services
          <TiltedArrow />
          </NuxtLink>

          <ul v-show="isServicesActive" class="px-4">
            <li>
              <NuxtLink to="/services/consulting" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                Consulting
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/engineering" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                Engineering
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/data" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                Data
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/teams" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                Teams
              </NuxtLink>
            </li>
          </ul>


        <li>

        <!------------------------------------------Industries----------------------------------->
        <li>
          <NuxtLink to="/industries" class="py-2 flex gap-2 items-center" :class="isIndustriesActive ? 'isActive' : ''"
            @click.native="isIndustriesActive = !isIndustriesActive"
          >
          Industries
          <TiltedArrow />
          </NuxtLink>

          
          <ul v-show="isIndustriesActive" class="px-4">
            <li>
              <NuxtLink to="/industries/media-and-entertainment" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                Media & Entertainment
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/industries/telecommunication" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                Telecommunication
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/industries/gaming" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                Gaming
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/industries/finance-and-fintech" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                Finance And Fintech
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/industries/compliance-and-Security" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                COMPLIANCE AND SECURITY
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/industries/ecommerce-and-retail" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                ECOMMERCE & RETAIL
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/industries/web3" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                WEB3
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/industries/sustainability" class="py-2 rounded-md px-4 inline-block" @click.native="showMenu = false">
                SUSTAINABILITY
              </NuxtLink>
            </li>
            
          </ul>
        </li>



        <li>
          <NuxtLink to="/case-studies" class="py-2 flex gap-2 items-center" @click.native="showMenu = false">
            Case Studies
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="blog/" class="py-2 flex gap-2 items-center" @click.native="showMenu = false">
            Blog
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/company" class="py-2 flex gap-2 items-center" @click.native="showMenu = false">
            Company
            <TiltedArrow />
          </NuxtLink>
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
      isIndustriesActive: false,
      isCompanyActive: false,

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

