<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div class="case-study-card zoom-in overflow-hidden cursor-pointer" @click="gotoSingleCaseStudy(data.slug)">
        <div class="cs-thumbnail-wrapper">
            <img class="lazyload" :src="data.content.thumbnail.filename" :alt="data.content.thumbnail.alt" />
        </div>
        <div class="cs-content p-4 text-center">
            <h4>{{ data.content.title }}</h4>
            <p class="line-clamp-4">{{ data.content.description }}</p>
        </div>
    </div>
</template>
  
<script>


export default {
    name: 'CaseStudyCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    },

    methods: {
        gotoSingleCaseStudy(slug) {
            /* eslint-disable no-console */
            // console.log("SLug is:", slug)
            this.$router.push({
                path: '/cases/' + slug,
            })
        },
    }

}
</script>
  
  