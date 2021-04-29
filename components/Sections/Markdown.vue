<template>
  <div
    v-editable="blok"
    class="relative items-center justify-center w-full h-auto p-4 mx-auto prose bg-white justify-left lg:prose-xl max-w-7xl"
    v-html="$md.render(blok.body)"
  />
</template>

<script>
export default {
  name: 'BlokMarkdown',
  props: { blok: { type: Object, required: true } },
}
</script>
