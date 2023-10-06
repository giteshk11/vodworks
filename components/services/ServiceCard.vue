<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <div style="display:contents">
        <template v-for="(card, i) in data">
            <div :key="i" class="default-card card-utilities hvr-effect">
                <img class="hvr-float" :src="'/icons/' + card.icon" :alt="card.alt" />
                <h3 class="mt-4 lg:mt-8 mb-4 lg:mb-4">{{ card.title }}</h3>
                <p class="text-card flex-grow-1">{{ card.description }}</p>

                <NuxtLink :to="card.ctaURL" class="btn-text mt-8 inline-block">
                    {{ card.ctaText }}
                </NuxtLink>
            </div>
        </template>
    </div>
</template>
  
<script>


export default {
    name: 'ServiceCard',
    props: {
        data: {
            type: Array,
            default: null
        }
    }



}
</script>
  
  