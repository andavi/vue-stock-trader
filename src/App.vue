<template>
    <div class="container">
        <app-header></app-header>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Home from './components/Home.vue';
    import Stocks from './components/Stocks.vue';
    import Portfolio from './components/Portfolio.vue';

    export default {
        components: {
            appHeader: Header,
            appHome: Home,
            appStocks: Stocks,
            appPortfolio: Portfolio
        }
    }
</script>

<style>
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for <2.1.8 */ {
        transform: translateY(-10px);
        opacity: 0;
    }

</style>
