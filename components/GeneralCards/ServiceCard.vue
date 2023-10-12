<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div style="display:contents">

        <div class="default-card card-utilities hvr-effect">

            <img class="hvr-float" :src="data.content.icon_colored.filename" :alt="data.content.icon_colored.alt" />
            <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ data.content.title }}</h3>
            <p class="text-card flex-grow-1">{{ data.content.description }}</p>

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
    }



}
</script>
  
  