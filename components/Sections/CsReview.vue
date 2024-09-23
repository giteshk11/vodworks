<template>
    <section v-if="data" class="lg:py-32 py-14 single-cs bgColor-tertiary-black">
        <div class="mx-auto container">
            <div class="review relative md:max-w-4/5 mx-auto">
                <img :src="data.icon.filename" :alt="data.icon.alt" />
                <div class="content">
                    <h3 class="color-white leading-8">{{ data.review_text }}</h3>
                    <p class="color-primary-red mt-6 font-bold">{{ data.review_by }}</p>
                </div>
            </div>

        </div>
    </section>
</template>

<script>

export default {
    name: 'CsReview',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>