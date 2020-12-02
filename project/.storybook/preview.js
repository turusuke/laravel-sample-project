import Vue from 'vue'
import vuetify from '../resources/js/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'; // all the css for components

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  () => ({
    vuetify: vuetify,
    template: '<v-app><v-main><story/></v-main></v-app>'
  })
]
