<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div v-scroll-to="'#' + `${data.content.scrollToID}`" class="cta-card">
        <img :src="data.content.icon_light.filename" :alt="data.content.icon_light.alt" />
        <p class="text-card mt-3 color-white">
            {{ data.content.title }}
        </p>
    </div>
</template>
  
<script>


export default {
    name: 'ServiceCtaCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    }
}
</script>
  
  