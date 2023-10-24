<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div style="display:contents">

        <div class="default-card card-utilities hvr-effect">
            <img class="hvr-top" :src="data.content.service_icon.filename" :alt="data.content.service_icon.alt" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ data.content.service_title }}</h3>
            <p class="text-card flex-grow-1">{{ data.content.service_description }}</p>

            <NuxtLink :to="data.full_slug" class="btn-text mt-8 inline-block">
                Read More
            </NuxtLink>
        </div>

    </div>
</template>
  
<script>


export default {
    name: 'ServiceCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    },

}
</script>
  
  