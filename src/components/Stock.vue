<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">

                    <div class="panel-title pull-left h3">
                        {{ company.name }}
                        <small>(Price: {{ company.price }})</small>
                    </div>
                    <div class="panel-title pull-right h3"><small>Shares: {{ company.quantity }}</small></div>
                    <div class="clearfix"></div>
            </div>
            <div class="panel-body">
                <div class="pull-left">

                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model.number="quantity"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-success"
                            @click.prevent="buy({company: company, quantity: quantity, reset: reset})"
                            :disabled="disabled"
                    >Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        props: ['company'],
        data() {
            return {
                quantity: ''
            }
        },
        computed: {
            disabled() {
                return this.quantity <= 0 || (this.quantity * this.company.price) > this.$store.getters.funds;
            }
        },
        methods: {
            ...mapMutations([
                'buy'
            ]),
            reset() {
                this.quantity = '';
            }
        }
    }
</script>

<style>
    .panel-heading h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
        width: 75%;
        padding-top: 8px;
    }
</style>
