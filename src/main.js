import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes';
import {store} from './store/store'

Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trader-5ab7a.firebaseio.com/position.json';

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
