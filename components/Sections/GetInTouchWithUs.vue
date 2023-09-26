<template>
    <!-- Get in Touch with us-->
    <section class="py-0 bgColor-normal-grey">

        <div class="mx-auto max-w-4/5 container">

            <div class="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0 lead-collection">
                <div class="md:col-span-7">
                    <div class="bgColor-grey p-8 lg:p-16">
                        <h2 class="">Get in Touch with us</h2>
                        <form class="w-full mt-8 lg:mt-12">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                                <div class="w-full">
                                    <label class="block color-secondary-black text-xsmall mb-2">
                                        Your first name<sup class="text-red-500">*</sup>
                                    </label>
                                    <input
                                        class="appearance-none block w-full focus:outline-none focus:bg-white form-control"
                                        type="text">
                                </div>
                                <div class="w-full">
                                    <label class="block color-secondary-black text-xsmall mb-2">
                                        Your last name<sup class="text-red-500">*</sup>
                                    </label>
                                    <input
                                        class="appearance-none block w-full focus:outline-none focus:bg-white form-control"
                                        type="text">
                                </div>
                                <div class="w-full">
                                    <label class="block color-secondary-black text-xsmall mb-2">
                                        Your email<sup class="text-red-500">*</sup>
                                    </label>
                                    <input
                                        class="appearance-none block w-full focus:outline-none focus:bg-white form-control"
                                        type="email">
                                </div>
                                <div class="w-full">
                                    <label class="block color-secondary-black text-xsmall mb-2">
                                        Your phone number<sup class="text-red-500">*</sup>
                                    </label>
                                    <input
                                        class="appearance-none block w-full focus:outline-none focus:bg-white form-control"
                                        type="number">
                                </div>
                            </div>
                            <div class="w-full my-4 md:my-8">
                                <label class="block color-secondary-black text-xsmall mb-2" for="grid-state">
                                    What is Your Budget?
                                </label>
                                <div class="relative">
                                    <select
                                        class="appearance-none block w-full focus:outline-none focus:bg-white form-control font-bold">
                                        <option>***Select Your Budget*** </option>
                                        <option>$1000 - $5000</option>
                                        <option>$5000 - $10,000</option>
                                        <option>$10,000 - $20,000</option>
                                        <option>$20,0000 - $30,000</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <label class="block color-secondary-black text-xsmall mb-2" for="grid-state">
                                    Message
                                </label>
                                <textarea rows="5" class="form-control w-full"
                                    placeholder="Tell us a little more about your project. Are you starting a new software project or do you need help with an existing one? Do you already have a list of requirements and features or are you starting from scratch?"></textarea>
                            </div>
                            <button class="btn-primary btn-lg inline-block mt-10 lg:mt-16 ">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div class="md:col-span-5">
                    <div class="p-6 lg:p-16 bgColor-light-grey h-full">
                        <h2 class="">Our Next Steps</h2>
                        <ul class="mt-8 lg:mt-12">
                            <li class="mb-4 lg:mb-6 flex items-center gap-4">
                                <img src="~assets/img/icons/square-list.svg" alt="" />
                                Our team reaches out to you within one business day
                            </li>
                            <li class="mb-4 lg:mb-6 flex items-center gap-4">
                                <img src="~assets/img/icons/square-list.svg" alt="" />
                                We begin with an initial conversation to understand your needs
                            </li>
                            <li class="mb-4 lg:mb-6 flex items-center gap-4">
                                <img src="~assets/img/icons/square-list.svg" alt="" />
                                Our analysts and developers evaluate the scope and propose a path forward
                            </li>
                            <li class="mb-4 lg:mb-6 flex items-center gap-4">
                                <img src="~assets/img/icons/square-list.svg" alt="" />
                                We initiate the project, working towards successful software delivery
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>
  
<script>

export default {
    name: 'GetInTouchWithUs',
}
</script>
  
  