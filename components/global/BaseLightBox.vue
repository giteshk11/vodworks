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
          class="absolute z-50 inset-y-0 right-9 hidden lg:block"
          style="top: 50%; transform: translateY(50%)"
        >
          <div
            class="w-16 h-16 bg-work-contact rounded-full relative cursor-pointer"
            @click="$router.push({ path: '/contact' })"
          >
            <svg
              viewBox="0 0 48 48"
              fill="none"
              class="pl-3 py-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.6887 4.35105C33.4359 3.62759 31.8282 4.05848 31.105 5.31132L27.5292 11.5049H19.8175C19.4723 11.5049 19.1925 11.7848 19.1925 12.1299C19.1925 12.4751 19.4723 12.7549 19.8175 12.7549H26.8075L24.2125 17.2496H9.62527C9.28007 17.2496 9.00025 17.5294 9.00025 17.8746C9.00025 18.2198 9.28007 18.4996 9.62527 18.4996H23.4907L22.0473 20.9997H9.62527C9.28007 20.9997 9.00025 21.2795 9.00025 21.6247C9.00025 21.9698 9.28007 22.2497 9.62527 22.2497H21.7888L21.5195 24.7498H9.62527C9.28007 24.7498 9.00025 25.0296 9.00025 25.3748C9.00025 25.7199 9.28007 25.9998 9.62527 25.9998H21.3848L21.3516 26.3085C21.3251 26.5545 21.4462 26.793 21.6604 26.9167C21.7575 26.9727 21.8653 27.0004 21.9729 27.0004C22.1028 27.0004 22.2323 26.96 22.3417 26.8801L26.3324 23.9647C26.4028 23.9134 26.4615 23.8479 26.505 23.7725L31.3757 15.3364V27.4509C31.3757 28.8513 30.2364 29.9907 28.8359 29.9907H14.3511C14.1278 29.9907 13.9214 30.1098 13.8098 30.3032L11.6243 34.0886L9.43883 30.3032C9.3272 30.1098 9.12088 29.9907 8.89756 29.9907H7.78985C6.38937 29.9907 5.25003 28.8513 5.25003 27.4509V15.2948C5.25003 13.8944 6.38937 12.7549 7.78985 12.7549H14.1924C14.5376 12.7549 14.8175 12.4751 14.8175 12.1299C14.8175 11.7847 14.5376 11.5049 14.1924 11.5049H7.78985C5.70011 11.5049 4 13.205 4 15.2948V27.4509C4 29.5406 5.70011 31.2407 7.78985 31.2407H8.53668L11.0831 35.6512C11.1947 35.8445 11.401 35.9637 11.6243 35.9637C11.8476 35.9637 12.054 35.8445 12.1656 35.6512L14.712 31.2407H28.8359C30.9257 31.2407 32.6258 29.5406 32.6258 27.4509V15.2948C32.6258 14.759 32.5122 14.2297 32.2948 13.7445L35.6491 7.93482C36.3723 6.68204 35.9416 5.07438 34.6887 4.35105V4.35105ZM34.0637 5.43357C34.7196 5.81227 34.9451 6.65392 34.5664 7.30981L34.2093 7.92839L31.8304 6.55491L32.1875 5.93634C32.5662 5.28051 33.4078 5.05506 34.0637 5.43357V5.43357ZM23.021 22.4827L24.8202 23.5215L22.7459 25.0368L23.021 22.4827ZM25.735 22.6063L23.3561 21.2328L31.2054 7.63744L33.5843 9.01091L25.735 22.6063Z"
                fill="white"
              />
              <path
                d="M17.0047 12.7539C17.1691 12.7539 17.3304 12.687 17.4472 12.5708C17.5635 12.4545 17.6304 12.2933 17.6304 12.1289C17.6304 11.9645 17.5635 11.8033 17.4472 11.687C17.3304 11.5708 17.1697 11.5039 17.0047 11.5039C16.8404 11.5039 16.6791 11.5708 16.5629 11.687C16.4466 11.8033 16.3804 11.9645 16.3804 12.1289C16.3804 12.2933 16.4466 12.4545 16.5629 12.5708C16.6797 12.687 16.8404 12.7539 17.0047 12.7539Z"
                fill="white"
              />
            </svg>
          </div>
          <span class="text-white text-sm"> Contact Us </span>
        </div>
        <div
          class="text-white w-12 h-12 xl:w-16 xl:h-16 self-center hidden xl:block xl:ml-10"
        >
          <NuxtLink
            :to="previous"
            class="inline-flex w-full h-full items-center justify-center rounded-full bg-white bg-opacity-10"
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
        <div
          class="text-white w-12 h-12 xl:w-16 xl:h-16 self-center hidden xl:block xl:mr-10"
        >
          <NuxtLink
            :to="next"
            class="inline-flex w-full h-full items-center justify-center rounded-full bg-white bg-opacity-10"
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
