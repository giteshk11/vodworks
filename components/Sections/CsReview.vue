<template>
    <section v-if="data" class="lg:py-32 py-14 single-cs bgColor-tertiary-black">
        <div class="mx-auto container">
            <div class="review relative md:max-w-4/5 mx-auto">
                <img class="quote-img" :src="data.icon.filename" :alt="data.icon.alt" />
                <div class="content">
                    <h4 class="color-white leading-8">{{ data.review_text }}</h4>

                    <div class="flex items-center gap-6 mt-8">
                        <img v-if="data.reviewer_image?.filename" class="reviewer_image"
                            :src="data.reviewer_image.filename" :alt="data.reviewer_image.alt || 'Reviewer Image'" />
                        <h6 class="color-primary-red">{{ data.review_by }}</h6>
                    </div>

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