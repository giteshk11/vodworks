<template>
    <div class="error bgColor-grey">
      <div class="xy-center">
          <div v-if="error.statusCode === 404" class="image">
            <img class="image404" src="~/assets/img/404.svg" alt="404 illustration" />
            <h1 class="my-8">Oops!!! Page Not Found</h1>
            <NuxtLink to="/" class="btn-primary btn-md inline-block ">Back to Home</NuxtLink>
          </div>
          <div v-else class="mx-auto">
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
