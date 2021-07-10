<template>
  <div class="bg-h-black">
    <header class="flex flex-row justify-between px-6 py-4">
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
        <div class="text-h-font self-center hidden lg:inline-block">
          <NuxtLink
            to="/services"
            class="mr-3 hover:bg-h-gray py-2 px-3 rounded-md"
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="/work"
            class="mr-3 hover:bg-h-gray py-2 px-3 rounded-md"
          >
            Work
          </NuxtLink>
          <NuxtLink
            to="/blogs-and-webinars"
            class="mr-3 hover:bg-h-gray py-2 px-3 rounded-md inline"
          >
            Blog
          </NuxtLink>
          <NuxtLink to="/contact" class="hover:bg-h-gray py-2 px-3 rounded-md">
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
        <div class="bg-l-red inline-block py-4 px-6 rounded-md">Log In</div>
      </NuxtLink>
      <!-- icon menu -->
      <img
        v-show="!showMenu"
        src="~/assets/img/icon/menu.png"
        class="self-center justify-self-end lg:hidden cursor-pointer"
        @click="showMenu = true"
      />
      <div v-show="showMenu" @click="showMenu = false">
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
      class="text-h-font md:hidden flex flex-col items-start px-6"
    >
      <NuxtLink
        to="/services"
        class="mr-3 hover:bg-h-gray py-2 px-3 rounded-md"
      >
        Services
      </NuxtLink>
      <NuxtLink to="/work" class="mr-3 hover:bg-h-gray py-2 px-3 rounded-md">
        Work
      </NuxtLink>
      <NuxtLink
        to="/blogs-and-webinars"
        class="mr-3 hover:bg-h-gray py-2 px-3 rounded-md inline"
      >
        Blog
      </NuxtLink>
      <NuxtLink to="/contact" class="hover:bg-h-gray py-2 px-3 rounded-md">
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
