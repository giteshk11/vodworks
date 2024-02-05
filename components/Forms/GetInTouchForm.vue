<template>
    <div>
        <div>
            <div id="hubspotForm" class="w-full mt-8 lg:mt-12">
            </div>
        </div>

        <div class="overlay cursor-pointer" @click="closeSuccess"></div>
        <div class="success">
            <div class="text-center">
                <h2>Thank You!</h2>
                <p class="mt-4">Thank you for contacting us, we will get back to you as soon as possible.</p>
                <div class="block mt-8">
                    <button class="btn-primary btn-md cursor-pointer" @click="closeSuccess">
                        Close
                    </button>
                </div>
               
            </div>

        </div>
    </div>
</template>
  
<script>

export default {

    name: 'GetInTouchForm',

    mounted() {
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/v2.js";
        document.body.appendChild(script);

        script.addEventListener("load", () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "1873794",
                    formId: "e7440546-49d4-48e1-9252-ea8fd906931b",
                    target: "#hubspotForm",

                    // onFormReady($form) {
                    //     // Stuff to do on after form is loaded             
                    // },
                    onFormSubmit($form, data) {
                        const el = document.querySelector(".success");
                        const el2 = document.querySelector(".overlay");
                        el.classList.add("show");
                        el2.classList.add("show");
                    }
                })
            }
        });
        

        window.addEventListener('message', event => {
            if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "1873794",
                    formId: "e7440546-49d4-48e1-9252-ea8fd906931b",
                    target: "#hubspotForm" // Add the element class where you need to create the form again
                });
            }
        });
    },

    methods: {
        closeSuccess() {
            const el = document.querySelector(".success");
            const el2 = document.querySelector(".overlay");
            el.classList.remove("show");
            el2.classList.remove("show");
        }
    },

}
</script>
