import Vue from 'vue'


import inViewportDirective from 'vue-in-viewport-directive'
// inViewportDirective.defaults.margin = '-100px 0px'
Vue.directive('in-viewport', inViewportDirective)