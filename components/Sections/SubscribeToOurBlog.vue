<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
        <div class="mx-auto container">

            <div class="text-center mx-auto md:max-w-3/5">
                <h2 class="heading-1">Subscribe to our blog</h2>
                <div class=" mx-auto md:max-w-4/5">
                    <div id="blogSubscriptionForm" class="w-full mt-8 lg:mt-12">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
  
<script>


export default {
    name: 'SubscribeToOurBlog',

    mounted() {
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/v2.js";
        document.body.appendChild(script);

        script.addEventListener("load", () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "1873794",
                    formId: "19f7d7c4-7d7f-4733-9e52-3473df7b78a5",
                    target: "#blogSubscriptionForm",
                })
            }
        });


    },
}
</script>
