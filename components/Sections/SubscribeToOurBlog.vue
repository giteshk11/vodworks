<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <section class="lg:py-32 py-14 bgColor-tertiary-black color-white">
        <div class="mx-auto container">

            <div class="text-center">
                <!--<form class="blog-subscription-form">
                    <h2 class="heading-1">Subscribe to our blog</h2>
                    <input id="email" name="email-address" type="email" placeholder="Your email"
                        class="appearance-none block w-full focus:outline-none focus:bg-white form-control mt-8 lg:mt-12  mb-8 lg:mb-12"
                        required />
                    <button type="button" class="btn-primary btn-lg inline-block">
                        Subscribe
                    </button>
                </form>
                -->

                <div id="mc_embed_shell">
                    <!-- <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css"> -->


                    <div id="mc_embed_signup">
                        <h2 class="heading-1">Subscribe to our blog</h2>

                        <form autocomplete="off"
                            action="https://vodworks.us14.list-manage.com/subscribe/post?u=94e39ce3ae8526c7c6078b57d&amp;id=c1d1d4679c&amp;f_id=00e152e0f0"
                            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                            target="_self" novalidate="">
                            <div id="mc_embed_signup_scroll">

                                <div class="mc-field-group">
                                    <input ref="email" v-model="email_p" type="email" name="EMAIL" class="required email"
                                        id="mce-EMAIL" required="" value="" @keyup="validateMail">
                                    <p v-show="!isButtonEnabled" class="text-left mt-2 mb-4" style="color:red !important;">
                                        {{ errorMessage }}</p>
                                </div>
                                <div hidden="">
                                    <input type="hidden" name="tags" value="8439029">
                                </div>
                                <div id="mce-responses" class="clear">
                                    <div class="response" id="mce-error-response" style="display: none;"></div>
                                    <div class="response" id="mce-success-response" style="display: none;"></div>
                                </div>
                                <div aria-hidden="true" style="position: absolute; left: -5000px;">
                                    <input type="text" name="b_94e39ce3ae8526c7c6078b57d_c1d1d4679c" tabindex="-1" value="">
                                </div>

                                <div class="clear">
                                    <input :disabled="!isButtonEnabled" type="submit" name="subscribe"
                                        id="mc-embedded-subscribe" class="button btn-primary btn-lg w-80 cursor-pointer"
                                        value="Subscribe">
                                </div>
                            </div>
                        </form>
                    </div>

                </div>



            </div>

        </div>
    </section>
</template>
  
<script>


export default {
    name: 'SubscribeToOurBlog',
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            isSuccessPopupOpened: false,
            isButtonEnabled: false,
            email_p: '',
            errorMessage: '',
        };
    },

    // watch: {
    //     email(value) {
    //         // binding this to the data value in the email input
    //         this.email = value;
    //         this.validateEmail(value);
    //     },

    // },
    methods: {
        // validateEmail(email) {
        //     // eslint-disable-next-line no-useless-escape
        //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        //         this.errorMessage = ''
        //     } else {
        //         this.errorMessage = 'Invalid Email'
        //     }
        // },

        validateMail(value) {
            const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (value.target.value.match(mailformat)) {
                this.isButtonEnabled = true
                this.errorMessage = ''
            } else {
                this.errorMessage = 'Enter a valid email'
                this.isButtonEnabled = false
            }
        },


        // formSubmit() {
        //     if (this.errorMessage !=="") {
        //         this.$router.push('/thanks')
        //     }
        // }
    },


    // methods: {
    //     formSubmit() {
    //         if (this.EMAIL) {
    //             this.$router.push('/thanks')
    //         }
    //     }
    // }



}
</script>

<style>
input[disabled='disabled'] {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
  
  