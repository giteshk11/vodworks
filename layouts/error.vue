<template>
    <div class="fixed z-50 top-0 h-screen w-screen flex justify-center items-center">
      <div class="text-center flex-col items-center justify-center bgColor-grey w-screen h-screen flex">
          <div v-if="error.statusCode === 404">
            <img class="image404" src="~/assets/img/404.svg" alt="404 illustration" />
            <h1 class="font-arial-black text-2xl lg:text-3xl mt-8">Oops!!! Page Not Found</h1>
            <NuxtLink to="/" class="mt-8 py-4 px-6 button-red rounded-md inline-block text-white font-bold uppercase">Back to Home</NuxtLink>
          </div>
          <div v-else>
            <h1 class="font-arial-black text-2xl lg:text-3xl">
              An error occurred - {{ error.statusCode }}
            </h1>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    layout: 'error',
    props: {
      error: {
        type: Object,
        required: true
      }
    },

    head(){
      return{
        title:"Page not found",
      }
    }

  }
</script>
<style scoped>
  .image404{
    max-width: 80%;
    margin: 0 auto;
  }
</style>

