import Vue from 'vue'

import Markdown from '~/components/Sections/Markdown.vue'
import Page from '~/components/PostTypes/Page.vue'
import WebinarContainer from '~/components/Sections/WebinarContainer.vue'
import BlogContainer from '~/components/Sections/BlogContainer.vue'
import WorkContainer from '~/components/Sections/WorkContainer.vue'
import Webinar from '~/components/PostTypes/Webinar.vue'
import Blog from '~/components/PostTypes/Blog.vue'




// import ServiceCard from '~/components/Services/ServiceCard.vue'
import ServiceCard from '~/components/GeneralCards/ServiceCard.vue'

import CaseStudyCard from '~/components/GeneralCards/CaseStudyCard.vue'
import TestimonialCard from '~/components/GeneralCards/TestimonialCard.vue'

import TestimonialsConatiner from '~/components/Sections/TestimonialsConatiner.vue'
import CaseStudiesContainer from '~/components/Sections/CaseStudiesContainer.vue'

import GetInTouchWithUs from '~/components/Sections/GetInTouchWithUs.vue'


Vue.component('ServiceCard', ServiceCard)
Vue.component('CaseStudyCard', CaseStudyCard)
Vue.component('TestimonialCard', TestimonialCard)
Vue.component('TestimonialsConatiner', TestimonialsConatiner)
Vue.component('CaseStudiesContainer', CaseStudiesContainer)
Vue.component('GetInTouchWithUs', GetInTouchWithUs)




Vue.component('Markdown', Markdown)
Vue.component('Page', Page)
Vue.component('WebinarContainer', WebinarContainer)
Vue.component('BlogContainer', BlogContainer)
Vue.component('WorkContainer', WorkContainer)
Vue.component('Webinar', Webinar)
Vue.component('Blog', Blog)