<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
        <div class="mx-auto max-w-4/5 container">
            <div class="text-center">
                <h1 v-in-viewport class="w-full md:max-w-3/5 mx-auto">{{ data.title }} <span class="bgFill"><span class="textClip color-white">{{ data.animated_word }}</span></span>
                </h1>
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
  
  
  