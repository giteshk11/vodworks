<template>
    <div class="faqs">
        <template v-for="faq, i in faqs">
            <div :key="i" class="faq py-4">
                <div class="flex items-center justify-between gap-8 cursor-pointer" @click="() => toggleAnswer(faq.id)">
                    <div class="question">
                        <h4 class="font-medium">{{ faq.content.question }}</h4>
                    </div>
                    <div :class="['faq-icon', { open: faq.isOpen }]">
                        <img src="~/assets/img/icons/faq-arrow.svg" alt="arrow" />
                    </div>
                </div>
                <div :class="['answer', { open: faq.isOpen }]">
                    <div class="mt-4" v-html="$md.render(faq.content.answer)"></div>

                    <NuxtLink :to="faq.content.btn_url" class="btn-text mt-4 lg:mt-6 inline-block cursor-pointer">{{
                        faq.content.btn_txt }}
                    </NuxtLink>
                </div>
            </div>
        </template>
    </div>
</template>

<script>


export default {
    name: 'AccordionNew',
    props: {
        payload: {
            type: Array,
            default: null
        },
    },
    data() {
        return {
            faqs: this.payload,
        }
    },

    head() {
        return {
            script: [
                {
                    type: 'application/ld+json',
                    json: this.generateFaqSchema(),
                },
            ],
        }
    },

    computed: {

    },
    methods: {
        toggleAnswer(currentClickedId) {
            // close others who does not clicked but already opened
            this.faqs = this.faqs.map(faq => faq.isOpen && faq.id !== currentClickedId ? { ...faq, isOpen: false } : faq)
            // open and close current faq using this one
            this.faqs = this.faqs.map(faq => faq.id === currentClickedId ? { ...faq, isOpen: !faq.isOpen } : faq)
        },
        generateFaqSchema() {
            return {
                "@context": "https://schema.org",
                "@type": "FAQPage",

                "mainEntity": this.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.content.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.content.answer
                    }
                }))
            };
        }
    },


}
</script>