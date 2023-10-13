<template>
  <div>


    <div class="py-12 text-center">
      <h2>Contact Us</h2>
      <p>My path is: {{ $route.path }}</p>
    </div>

       


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
      title: 'Contactt Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Contact Us',
        },
      ],
    }
  },

}
</script>
    