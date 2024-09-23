<template>
    <section v-if="data" class="lg:py-32 py-14">
        <div class="mx-auto container">
            <div class="text-center">
                <h2>{{ data.content.title }}</h2>
            </div>
            <div class="grid mx-auto gap-4 mt-8 lg:mt-16" :class="data.layout">
                <template v-for="(card, i) in data.content.cards">
                    <div :key="i" class="left-icon-card card-utilities hvr-effect">
                        <img class="card-icon hvr-top lazyload" :src="card.image.filename" :alt="card.image.alt" />
                        <h3>{{ card.title }}</h3>
                    </div>
                </template>
            </div>
            <div class="text-center">
                <NuxtLink :to="data.content.button_url" class="btn-primary btn-lg mt-16 inline-block">
                    {{ data.content.button_text }}
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'CsServicesWeProvide',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>