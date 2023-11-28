<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <article class="zoom-in overflow-hidden cursor-pointer mb-8">
        Blog Post Card is Here
    </article>
</template>
  
<script>


export default {
    name: 'BlogPostCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    }



}
</script>
  
  