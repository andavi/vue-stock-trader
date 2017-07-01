<template>
    <div>
        <app-stock v-for="company in companies" :company="company"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            companies() {
                return this.$store.getters.companies;
            }
        }
    }
</script>