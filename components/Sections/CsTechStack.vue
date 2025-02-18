<template>
    <section v-if="data" class="lg:py-32 py-14 single-cs bgColor-tertiary-black">
        <div class="mx-auto container">
            <div class="mx-auto md:max-w-4/5">
                <div class="text-center color-white">
                    <h3>{{ data.content.title }}</h3>
                </div>
                <div class="logos mt-8 lg:mt-16" :class="data.layout">
                    <template v-for="(item, index) in data.content.block">
                        <div :key="index" class="item my-0 md:my-4">
                            <img class="hvr-top" :src="item.image.filename" :alt="item.image.alt" />
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'CsTechStack',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>