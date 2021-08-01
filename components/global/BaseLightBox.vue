<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 relative"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
        
    -->

      <div
        class="fixed inset-0 bg-black bg-opacity-80 transition-opacity flex overflow-y-auto"
        aria-hidden="true"
      >
        <div
          class="absolute z-50 inset-y-0 right-4 hidden lg:block"
          style="top: 50%; transform: translateY(50%)"
        >
          <div class="w-16 h-16 bg-work-contact rounded-full"></div>
          <span class="text-white text-sm"> Contact Us </span>
        </div>
        <div
          class="text-white w-12 h-12 self-center hidden md:block rounded-full bg-x-gray"
        >
          <NuxtLink
            :to="previous"
            class="inline-flex w-full h-full items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </NuxtLink>
        </div>
        <!-- <div class="flex-1 mx-auto overflow-y-auto"> -->
        <slot />
        <!-- </div> -->
        <div class="text-white w-6 h-6 self-center hidden md:block">
          <NuxtLink :to="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --></div>
  </div>
</template>

<script>
export default {
  props: {
    next: {
      type: String,
      default: '/work',
    },
    previous: {
      type: String,
      default: '/work',
    },
  },
}
</script>
