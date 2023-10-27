<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
        <div class="mx-auto container">
            <div class="text-center">
                <h1 v-in-viewport class="w-full md:max-w-3/5 mx-auto">{{ data.title }} <span class="bgFill"><span class="textClip color-white">{{ data.animated_word }}</span></span>
                </h1>
                <p v-if="data.description" class="mt-4 lg:mt-8 mb-8 lg:mb-12 text-big color-white max-auto md:max-w-3/5">{{ data.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>


export default {

    name: 'PageHeroWithAnimatedTitle',

    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>
  
  
  