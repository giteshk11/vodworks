<template>
  <div class="py-12 text-center">
    <h2>Services/Consulting</h2>
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
        title: 'Consulting',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Consulting',
          },
        ],
      }
    },

  }
</script>
  