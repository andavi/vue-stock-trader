<template>
    <div class="row">
        <div class="col-sm-12">
            <app-stock v-for="company in companies" :company="company"></app-stock>
        </div>
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