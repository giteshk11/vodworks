<template>
  <header class="bg-h-black grid lg:grid-cols-5 grid-cols-2 py-4 px-5 lg:px-0">
    <!-- logo -->
    <NuxtLink to="/" class="lg:justify-self-end mr-5">
      <img src="~/assets/img/logo.png" />
    </NuxtLink>

    <!-- menu -->
    <div class="text-h-font col-span-3 self-center hidden lg:inline-block">
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
        Contact
      </NuxtLink>
    </div>

    <!-- button -->
    <a
      href="/contact"
      class="text-white self-center font-bold hidden lg:inline-block"
    >
      <div class="bg-l-red inline-block py-4 px-6 rounded-md">Get In Touch</div>
    </a>

    <!-- icon menu -->
    <img
      src="~/assets/img/icon/menu.png"
      class="self-center justify-self-end lg:hidden"
    />
  </header>
</template>
