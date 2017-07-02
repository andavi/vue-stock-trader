<template>
    <div>
        <div v-if="companies.length">
            <app-position v-for="company in companies" :company="company"> 0"></app-position>
        </div>
        <div class="panel panel-warning" v-else>
            <div class="panel-heading text-center">
                <div class="panel-title">
                    You do not own any stocks! Go buy some from the Stocks page.
                </div>
            </div>
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

<style scoped>
    .panel {
        margin-right: 10%;
        margin-left: 10%;
    }
</style>