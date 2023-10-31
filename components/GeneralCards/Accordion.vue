<template>
    <div class="faqs">
        <Faq v-for="faq in faqs" :key="faq.id" :faq="faq" @toggle-answer="toggleAnswer" />
    </div>
</template>
  
<script>


export default {
    name: 'Accordion',
    props: {
        payload: {
            type: Object,
            default: null
        }
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


  