<template>
    <!-- Note: action="thank-you.html"-->
    <form name="Contact_Form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
        class="w-full mt-8 lg:mt-12">

        <input type="hidden" name="form-name" value="Contact_Form" />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            <div class="w-full">
                <label for="fname" class="block color-secondary-black text-xsmall mb-2">
                    Your first name<sup class="text-red-500">*</sup>
                </label>
                <input id="fname" name="first_name" type="text"
                    class="appearance-none block w-full focus:outline-none focus:bg-white form-control" required />
            </div>
            <div class="w-full">
                <label for="lname" class="block color-secondary-black text-xsmall mb-2">
                    Your last name<sup class="text-red-500">*</sup>
                </label>
                <input id="lname" name="last_name" type="text"
                    class="appearance-none block w-full focus:outline-none focus:bg-white form-control" required />
            </div>
            <div class="w-full">
                <label for="email" class="block color-secondary-black text-xsmall mb-2">
                    Your email<sup class="text-red-500">*</sup>
                </label>
                <input id="email" name="email-address" type="email"
                    class="appearance-none block w-full focus:outline-none focus:bg-white form-control" required />
            </div>
            <div class="w-full">
                <label for="ph" class="block color-secondary-black text-xsmall mb-2">
                    Your phone number<sup class="text-red-500">*</sup>
                </label>
                <input id="ph" name="phone_number" type="number"
                    class="appearance-none block w-full focus:outline-none focus:bg-white form-control" required />
            </div>
        </div>
        <div class="w-full my-4 md:my-8">
            <label for="budgetID" class="block color-secondary-black text-xsmall mb-2">
                What is Your Budget?
            </label>
            <div class="relative">
                <select id="budgetID" name="budget"
                    class="appearance-none block w-full focus:outline-none focus:bg-white form-control font-bold">
                    <option disabled selected value="">***Select Your Budget*** </option>
                    <option value="$50-100K">$50-100K</option>
                    <option value="$100-200K">$100-200K</option>
                    <option value="$200K+">$200K+</option>

                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="w-full">
            <label for="details" class="block color-secondary-black text-xsmall mb-2">
                Message
            </label>
            <textarea id="details" name="message" rows="8" class="form-control w-full"
                placeholder="Tell us a little more about your project. Are you starting a new software project or do you need help with an existing one? Do you already have a list of requirements and features or are you starting from scratch?"></textarea>
        </div>

        <div v-if="isUrlContact">
            <div class="custom-checkbox mt-6">
                <input id="RequestNDA" type="checkbox" name="RequestNDA" value="Yes Request NDA" />
                <span class="checkbox"></span>
                <label for="RequestNDA">Request NDA</label>
            </div>

        </div>

        <div>
            <button type="submit" class="btn-primary btn-lg inline-block mt-10 lg:mt-16 w-80">
                Submit
            </button>
        </div>
    </form>
</template>
  
<script>

export default {

    name: 'GetInTouchForm',

    computed: {
        isUrlContact() {
            return this.$route.path === '/contact'
        }
    },
    watch: {
        isUrlContact() {
            return this.$route.path === '/contact'
        }
    }


}
</script>
  
  