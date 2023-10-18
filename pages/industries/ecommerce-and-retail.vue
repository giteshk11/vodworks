<template>
    <div>

      <PageHeroWithAnimatedTitle :data="{ title: 'Ecommerce & Retail', animated_word: '' }" />
      <section class="lg:py-32 py-14">
        <div class="mx-auto max-w-4/5 container">
          <div class="text-center mx-auto md:max-w-3/5 ">
            <h2>Other Content Here</h2>
          </div>
        </div>
      </section>

    </div>
  </template>
  

<script>
export default {
    data() {
        return {
            story: { content: {} },
        }
    },
    head() {
        return {
            title: 'Single Industry',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Single Industry',
                },
            ],
        }
    },

}
</script>
  
