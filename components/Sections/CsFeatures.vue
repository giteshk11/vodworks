<template>
    <section v-if="data" class="lg:py-32 py-14 bgColor-normal-grey">
        <div class="mx-auto container">
            <div class="mx-auto">
                <div class="text-center">
                    <h2 v-in-viewport.once><span class="bgFill"><span class="textClip">{{ data.title
                                }}</span></span>
                    </h2>
                </div>
                <div class="center-two-ele-in-grid mx-auto mt-8 lg:mt-16 gap-4">
                    <template v-for="(card, i) in data.cards">
                        <div :key="i" class="default-card card-utilities hvr-effect item">
                            <img v-if="card.image.filename" class="mb-4" :src="card.image.filename" :alt="card.image.alt" />
                            <h3>{{ card.title }}</h3>
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