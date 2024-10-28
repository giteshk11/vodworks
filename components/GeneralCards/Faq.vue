<template>
    <div class="faq py-4">
        <div class="flex items-center justify-between gap-8 cursor-pointer" @click="() => handleClick(faq.id)">
            <div class="question">
                <h4 class="font-medium">{{ faq.question }}</h4>
            </div>
            <div :class="['faq-icon', { open: faq.isOpen }]">
                <img src="~/assets/img/icons/faq-arrow.svg" alt="arrow" />
            </div>
        </div>
        <div :class="['answer', { open: faq.isOpen }]">
            <p class="mt-4"> {{ faq.answer }} </p>
            <div v-if="faq.more">
                <p class="mt-4"> {{ faq.more.title }} </p>
                <ul>
                    <template v-for="(list, i) in faq.more.list">
                        <li :key="i">{{ list.item }}</li>
                    </template>
                </ul>
            </div>
            <NuxtLink :to="faq.btnUrl" class="btn-text mt-4 lg:mt-6 inline-block cursor-pointer">{{ faq.btnText }}
            </NuxtLink>

        </div>
    </div>
</template>

<script>



export default {

    props: {
        faq: {
            type: Object,
            default: null
        },
    },
    methods: {
        handleClick(id) {
            this.$emit('toggle-answer', id);
        }
    }
}

</script>
