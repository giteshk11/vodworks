<template>
    <div class="faqs">
        <template  v-for="faq in faqs">
            <Faq v-if="faq.categories.indexOf(category) !== -1" :key="faq.id" :faq="faq" @toggle-answer="toggleAnswer" />
        </template>
    </div>
</template>
  
<script>


export default {
    name: 'Accordion',
    props: {
        payload: {
            type: Object,
            default: null
        },
        category: {
            type: String,
            default: null
        },

    },
    data() {
        return {
            faqs: this.payload.faqs
        }
    },
    computed: {

    },
    methods: {
        toggleAnswer(id) {

            this.faqs = this.faqs.map(faq => faq.isOpen && faq.id !== id ? { ...faq, isOpen: false } : faq)

            this.faqs = this.faqs.map(faq => faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq)
        },
    }
}
</script>


  