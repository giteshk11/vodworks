
<template>
    <div style="display:contents">

        <template v-for="(card, i) in data">
            <div :key="i" class="case-study-card">
                <div class="cs-thumbnail-wrapper">
                    <img :src="'/images/' + card.thumbnail" :alt="card.alt" />
                </div>
                <div class="cs-content p-4 text-center">
                    <h4>{{ card.title }}</h4>
                    <p class="color-white">{{ card.description }}</p>
                </div>
            </div>
        </template>
    </div>
</template>
  
  
<script>

export default {
    name: 'CasesCard',

    props: {
        data: {
            type: Array,
            default: null
        }
    }

}
</script>
  
  