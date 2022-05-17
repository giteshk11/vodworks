<template>
  <div class="bg-h-black">
    <header class="flex flex-row justify-between mx-auto max-w-4/5 container py-4">
      <!-- logo -->
      <div class="flex">
        <NuxtLink
          to="/"
          class="lg:justify-self-end mr-5 cursor-pointer"
          active-class="bg-transparent"
        >
          <img src="~/assets/img/logo.svg" alt="logo" />
        </NuxtLink>

        <!-- menu -->
        <div class="my-auto">
          <ul class="text-h-font self-center hidden md:inline-block space-x-4">
            <li class="relative dropdown-parent hasDropdown">
              <NuxtLink
                to="/services"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
              >
                Services <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
              </NuxtLink>

              <ul class="dropdown">
                <li
                  v-for="(item, index) in RoutesList.services.list"
                  :key="index"
                >
                  <NuxtLink
                    :to="item.path"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink
                to="/work"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
              >
                Work
              </NuxtLink>
            </li>
            <li class="relative dropdown-parent hasDropdown">
              <NuxtLink
                to="#"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
              >
                Company <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
              </NuxtLink>
              <ul class="dropdown">
                <li>
                  <NuxtLink
                    to="/case-studies"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Case Studies
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/social-projects"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                    @click.native="showMenu = false"
                  >
                    Social Projects
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/career"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Career
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/blogs"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Blog
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/newsletters"
                    class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                  >
                    Newsletters
                  </NuxtLink>
                </li>
              </ul>
            <li>
              <NuxtLink
                to="/webinars"
                class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
              >
                Webinars
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/partner"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
              >
                Partners
              </NuxtLink>
            </li>
          </ul>

        </div>
      </div>

      <!-- button -->
      <NuxtLink
        to="/contact"
        class="text-white self-center font-bold hidden lg:inline-block invisible md:visible"
        active-class="bg-transparent"
      >
        <div class="button-red inline-block py-4 px-6 rounded-md uppercase">
          Get in Touch
        </div>
      </NuxtLink>
      <!-- icon menu -->
      <img
        v-show="!showMenu"
        src="~/assets/img/icon/menu.svg"
        class="self-center justify-self-end md:hidden cursor-pointer hamburger"
        alt="hamburger icon"
        @click="showMenu = true"
      />
      <div v-show="showMenu" class="self-center justify-self-end md:hidden cursor-pointer mr-2" @click="showMenu = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </header>

    <!--Mobile Menus-->
    <div class="header">
      <ul
        v-show="showMenu"
        class="text-h-font md:hidden flex flex-col items-start px-8 py-8 space-y-4"
      >
        <li class="hasDropdown">
          <NuxtLink
            to="#"
            class="py-2 px-3 rounded-md inline-block"
            active-class="bg-transparent"
            :class="isServicesActive ? 'isActive' : ''"
            @click.native="isServicesActive = !isServicesActive"
          >
            Services <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
          </NuxtLink>

          <ul
            v-show="isServicesActive"
            class="p-4 mt-2 rounded-md"
          >
            <li
              v-for="(item, index) in RoutesList.services.list"
              :key="index"
            >
              <NuxtLink
                :to="item.path"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>

        </li>
        <li>
          <NuxtLink
            to="/work"
            class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
            @click.native="showMenu = false"
          >
            Work
          </NuxtLink>
        </li>
        <li class="relative dropdown-parent hasDropdown">
          <NuxtLink
            to="#"
            class="py-2 px-3 rounded-md inline-block"
            active-class="bg-transparent"
            :class="isCompanyActive ? 'isActive' : ''"
            @click.native="isCompanyActive =! isCompanyActive"
          >
            Company <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
          </NuxtLink>
          <ul
            v-show="isCompanyActive"
            class="p-4 mt-2 rounded-md"
           >
            <li>
              <NuxtLink
                to="/case-studies"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Case Studies
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/social-projects"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Social Projects
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/career"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Career
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blogs"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/newsletters"
                class="hover:bg-h-gray py-2 rounded-md px-4 inline-block"
                @click.native="showMenu = false"
              >
                Newsletters
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink
            to="/webinars"
            class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
            @click.native="showMenu = false"
          >
            Webinars
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/partner"
            class="hover:bg-h-gray py-2 rounded-md px-2 inline-block"
            @click.native="showMenu = false"
          >
            Partner
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
            @click.native="showMenu = false"
          >
            Get in Touch
          </NuxtLink>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  import Routes from '~/static/routes-list'

  export default {
    name: 'BaseHeader',
    data() {
      return {
        showMenu: false,
        RoutesList:Routes,
        isServicesActive:false,
        isCompanyActive:false,
      }
    },
    methods:{
      // toggleDropdown(){
      //   this.isDropdownActive = !this.isDropdownActive
      // }
    }
}

</script>

<style scoped>
  .hamburger{
    width: 40px;
  }
  .hasDropdown>a{
    display: inline-flex;
  }
  .hasDropdown svg{
    fill: #fff;
    width: 10px;
    margin-left: 6px;
    -webkit-transition: -webkit-transform .2s ease-in-out;
    -ms-transition: -ms-transform .2s ease-in-out;
    transition: transform .2s ease-in-out;
  }
  .hasDropdown>a.isActive svg{
    -webkit-transform: rotate(-180deg); /* Safari & Chrome */
    -moz-transform: rotate(-180deg); /* Firefox */
    -ms-transform: rotate(-180deg); /* Internet Explorer */
    -o-transform: rotate(-180deg); /* Opera */
    transform: rotate(-180deg); /* W3C */
  }
  .hasDropdown ul{
    background-color: #0A111E;
  }
  .hasDropdown ul li{
    display: block;
  }
  .hasDropdown li a{
    font-size: 14px;
  }
</style>
