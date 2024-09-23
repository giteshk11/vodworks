<template>
    <section v-if="data" class="single-cs">
        <img class="w-full" :src="data.image.filename" :alt="data.image.alt" />
    </section>
</template>

<script>

export default {
    name: 'CsFeaturedImage',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>