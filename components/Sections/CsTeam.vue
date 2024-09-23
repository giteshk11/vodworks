<template>
      <section v-if="data" class="lg:py-32 py-14">
      <div class="mx-auto container">
        <div class="text-center">
          <h2>{{ data.content.title }}</h2>
        </div>
        <div class="grid mx-auto gap-4 mt-8 lg:mt-16" :class="data.layout">
          <template v-for="(card, i) in data.content.cards">
            <div :key="i" class="left-icon-card card-utilities hvr-effect">
              <img class="card-icon hvr-top lazyload" :src="card.image.filename" :alt="card.image.alt" />
              <div v-html="$md.render(card.description)"></div>
            </div>
          </template>
        </div>

      </div>
    </section>
</template>

<script>

export default {
    name: 'CsTeam',
    props: {
        data: {
            type: Object,
            default: null
        },
    }
}
</script>