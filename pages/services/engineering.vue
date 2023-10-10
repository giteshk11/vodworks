<template>
  <div class="py-12 text-center">
    <h2>Services/Engineering</h2>
    <p>My path is: {{ $route.path }}</p>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        story: { content: {} },
      }
    },
    head() {
      return {
        title: 'Engineering',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Engineering',
          },
        ],
      }
    },

  }
</script>
  