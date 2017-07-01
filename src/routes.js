import Home from './components/Home.vue';
import Stocks from './components/Stocks.vue';
import Portfolio from './components/Portfolio.vue';
import Progress from './components/Progress.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/stocks', component: Stocks},
    {path: '/portfolio', component: Portfolio},
    {path: '/progress', component: Progress},
    {path: '*', redirect: '/'}
];