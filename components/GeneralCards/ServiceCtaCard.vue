<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div v-scroll-to="'#' + `${data.content.ScrollToID}`" class="cta-card">
        <img :src="data.content.service_icon.filename" :alt="data.content.service_icon.alt" />

        <p class="text-card mt-3 color-white">
            {{ data.content.service_title }}
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
  
  