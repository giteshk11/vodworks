<template>
    <section v-if="data" class="single-cs bgColor-tertiary-black color-white">
        <div class="hero relative">
            <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mx-auto">
                <div class="md:col-span-7 hero-content py-8 lg:py-4">
                    <h1 class="cs-title">{{ data.content.cs_title }} </h1>
                    <div v-if="data.content.cs_overview" class="mt-8"
                        v-html="$md.render(data.content.cs_overview)"></div>
                </div>
                <div class="md:col-span-5">
                    <img class="w-full featured-img" :src="data.content.hero_featured_image.filename"
                        :alt="data.content.hero_featured_image.alt" />
                </div>
            </div>

            <div class="container mx-auto">
                <div class="hero-cards">
                    <template v-for="card, i in data.content.links">
                        <div :key="i" class="item flex gap-6 align-items-center justify-center" :class="data.hasMorePadding ? 'p-8': 'px-8 py-2'">
                            <img :src="card.icon.filename" alt="icon" />
                            <div class="my-auto" v-html="$md.render(card.description)"></div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { data } from 'jquery';


export default {
    name: 'CsHero',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>