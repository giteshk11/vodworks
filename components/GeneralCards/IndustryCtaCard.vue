<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="cta-card" :class="{ active: $route.path === '/industries/' + data.slug }" @click="gotoIndustries(data.slug)">
        <img :src="data.content.icon.filename" :alt="data.content.icon.alt" />

        <p class="text-card mt-3 font-medium">
            {{ data.content.title }}
        </p>
    </div>
</template>
  
<script>



export default {
    name: 'IndustryCtaCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    },

    methods: {
        gotoIndustries(slug) {
            this.$router.push({
                path: '/industries/' + slug,
            })
        },
    }
}
</script>
  
  