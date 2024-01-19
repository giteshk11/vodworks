<template>
    <div class="faq py-4">
        <div class="header flex items-center justify-between gap-8 cursor-pointer" @click="() => handleClick(faq.id)">
            <div class="question">
                <h4 class="font-bold">{{ faq.question }}</h4>
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



<style scoped>
.faq {
    border-bottom: 1px solid #000;
}

.faq img {
    width: 24px;
}

.faq .question {
    width: 90%;
}

.faq .header .faq-icon {
    transition: transform 0.5s;
}

.faq .header .faq-icon.open {
    transform: rotate(45deg);
}

.faq .answer {
    -webkit-transition: max-height 0.4s;
    -moz-transition: max-height 0.4s;
    -ms-transition: max-height 0.4s;
    -o-transition: max-height 0.4s;
    transition: max-height 0.4s;
    overflow: auto;
    max-height: 0;
}

.faq .answer::-webkit-scrollbar {
    width: 4px;
}

.faq .answer::-webkit-scrollbar-track {
    appearance: none;
    background-color: transparent;
}

.faq .answer::-webkit-scrollbar-thumb {
    width: 4px;
    background-color: #e8d2b6;
    border-radius: 50px;
}

.faq .answer.open {
    max-height: 600px;
    padding-bottom: 32px;
}</style>
