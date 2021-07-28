<template>
  <div class="bg-h-black">
    <header class="flex flex-row justify-between mx-auto max-w-4/5 py-4">
      <!-- logo -->
      <div class="flex">
        <NuxtLink
          to="/"
          class="lg:justify-self-end mr-5 cursor-pointer"
          active-class="bg-transparent"
        >
          <img src="~/assets/img/logo.png" />
        </NuxtLink>

        <!-- menu -->
        <div class="text-h-font self-center hidden md:inline-block space-x-4">
          <NuxtLink
            to="/services"
            class="hover:bg-h-gray py-2 rounded-md px-2 inline-block"
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/work"
            class="hover:bg-h-gray py-2 rounded-md px-2 inline-block"
          >
            Work
          </NuxtLink>
          <NuxtLink
            to="/blogs-and-webinars"
            class="hover:bg-h-gray py-2 rounded-md px-2 inline-block"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="hover:bg-h-gray py-2 rounded-md px-2 inline-block"
          >
            Contact
          </NuxtLink>
        </div>
      </div>

      <!-- button -->
      <NuxtLink
        to="/contact"
        class="text-white self-center font-bold hidden lg:inline-block invisible md:visible"
        active-class="bg-transparent"
      >
        <div class="bg-l-red inline-block py-4 px-6 rounded-md">
          Schedule Demo
        </div>
      </NuxtLink>
      <!-- icon menu -->
      <img
        v-show="!showMenu"
        src="~/assets/img/icon/menu.png"
        class="self-center justify-self-end md:hidden cursor-pointer"
        @click="showMenu = true"
      />
      <div v-show="showMenu" class="cursor-pointer" @click="showMenu = false">
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
    <div
      v-show="showMenu"
      class="text-h-font sm:hidden flex flex-col items-start px-6 pb-4 space-y-4"
    >
      <NuxtLink
        to="/services"
        class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
        @click.native="showMenu = false"
      >
        Services
      </NuxtLink>
      <NuxtLink
        to="/work"
        class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
        @click.native="showMenu = false"
      >
        Work
      </NuxtLink>
      <NuxtLink
        to="/blogs-and-webinars"
        class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
        @click.native="showMenu = false"
      >
        Blog
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="hover:bg-h-gray py-2 px-3 rounded-md inline-block"
        @click.native="showMenu = false"
      >
        Schedule Demo
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader',
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>
