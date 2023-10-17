<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black">
        <div class="mx-auto max-w-4/5 container color-white">

            <div class="text-center">
                <h2>{{ data.title }}</h2>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto gap-8 mt-8 lg:mt-16">

                <template v-for="(card, i) in data.list">
                    <div :key="i" class="my-4 lg:my-4 text-center md:text-left">
                        <h3 v-in-viewport class="mb-4 inline-block capitalize"> <span class="bgFill"><span
                                    class="textClip color-white">{{ card.title }}</span></span> </h3>
                        <p class="color-white text-regular">{{ card.description }}</p>
                    </div>
                </template>

            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: 'FeaturedCards3sInRow',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>
  
  
  