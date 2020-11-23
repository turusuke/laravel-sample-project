require('../../utils/bootstrap')

window.Vue = require('vue')

Vue.component('Top', require('./Top.vue').default)

new Vue({
  el: '#app'
})
