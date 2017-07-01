<template>
    <div class="row">
        <div class="col-sm-12">
            <app-position v-for="company in companies" :company="company"></app-position>
        </div>
    </div>
</template>

<script>
    import Position from './Position.vue';

    export default {
        computed: {
            companies() {
                return this.$store.getters.companies.filter(company => {
                    return company.quantity > 0 && company.price > 0;
                });
            }
        },
        components: {
            appPosition: Position
        }
    }
</script>