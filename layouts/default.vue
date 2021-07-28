<template>
  <div>
    <BaseHeader />
    <Nuxt />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '~/components/global/BaseHeader'
import BaseFooter from '~/components/global/BaseFooter'

export default {
  components: {
    BaseHeader,
    BaseFooter,
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
