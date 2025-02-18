<template>
    <section v-if="data.Features" class="single-cs lg:py-32 py-14 bgColor-normal-grey">
        <div class="mx-auto container">
            <div class="mx-auto">
                <div class="text-center single-cs md:max-w-4/5 mx-auto">
                    <h3>{{ data.Features.title }}</h3>
                    <div v-if="data.Features.description" v-html="$md.render(data.Features.description)"></div>
                </div>
                <div :class="data.layout" class="gap-4 mx-auto mt-8 lg:mt-16">
                    <template v-for="(card, i) in data.Features.cards">
                        <div :key="i" class="default-card card-utilities hvr-effect item">
                            <img v-if="card.image.filename" class="mb-4" :src="card.image.filename"
                                :alt="card.image.alt" />
                            <h4>{{ card.title }}</h4>
                            <p class="text-card mt-3">{{ card.description }}</p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'CsFeatures',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>