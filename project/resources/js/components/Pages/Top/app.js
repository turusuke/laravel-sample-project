require('../../utils/bootstrap');

window.Vue = require('vue');

Vue.component('Top', require('./Top.vue').default);

const app = new Vue({
    el: '#app',
});
