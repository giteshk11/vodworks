<template>
  <footer
    class="lg:py-16 py-24 grid lg:grid-cols-3 grid-cols-1 relative px-5 lg:px-0 overflow-hidden mx-auto container"
  >
    <!-- logo -->
    <div class="justify-self-center">
      <img
        src="~/assets/img/logo_black.svg"
        alt="VW logo"
      />

      <!-- dot-->
      <img
        src="~/assets/img/footer_dot_1.png"
        class="absolute lg:top-1/2 lg:left-20 right-2 bottom-2 hidden lg:block"
        alt="Red dots"
      />
    </div>

    <div
      class="lg:col-span-2 flex flex-col lg:gap-20 lg:flex-row text-sm text-x-gray overflow-hidden"
    >
      <!-- dot -->
      <img
        src="~/assets/img/footer_dot_2.png"
        class="absolute bottom-5 right-5 hidden lg:block"
        alt="Black dots vertical"
      />

      <!-- mobile -->
      <img
        src="~/assets/img/footer_dot_3.png"
        class="absolute bottom-1/2 -right-2 hidden lg:hidden"
        alt="Black dots squared"
      />
      <img
        src="~/assets/img/footer_dot_1.png"
        class="absolute top-0 right-2 lg:hidden z-50"
        alt="red dots squared"
      />

      <!-- services -->
      <div class="flex flex-col mr-8 leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Services</h2>
        <!--Services Routes-->
        <p
          v-for="(item, index) in RoutesList.services.list"
          :key="index"
          class="inline-block"
        >
          <NuxtLink
            :to="item.path"
            active-class="bg-transparent"
          >
            {{ item.name }}
          </NuxtLink>
        </p>
      </div>

      <!-- company -->
      <div class="flex flex-col leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Company</h2>
        <!--Company Routes-->
        <p
          v-for="(item, index) in RoutesList.company"
          :key="index"
          class="inline-block"
        >
          <NuxtLink
            :to="item.path"
            active-class="bg-transparent"
          >
            {{ item.name }}
          </NuxtLink>
        </p>
      </div>

      <!-- social -->
      <div class="flex flex-col mr-14 leading-8 mt-12 lg:mt-0">
        <h2 class="font-bold text-lg text-black mb-3">Social</h2>
        <!--Socials Routes-->
        <p
          v-for="(item, index) in RoutesList.socials"
          :key="index"
          class="inline-block"
        >
          <a
            :href="item.path"
            target="_blank"
          >
            {{ item.name }}
          </a>
        </p>
      </div>

    </div>
  </footer>
</template>

<script>
  import Routes from '~/static/routes-list'
  export default {
    data(){
      return{
          RoutesList:Routes
      }
    }
  }
</script>
