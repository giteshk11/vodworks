<template>
  <div class="py-12 text-center">
    <h2>Services/Data</h2>
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
        title: 'Data',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Data description',
          },
        ],
      }
    },

  }
</script>
  