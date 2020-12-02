// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'vuetify/dist/vuetify.min.css'

// Imports
import Vue from 'vue'
import vuetify from '../../../plugins/vuetify'
import Top from './Top'

new Vue({
  vuetify,
  render: h => h(Top)
}).$mount('#app')
