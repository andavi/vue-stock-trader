<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">

                <div class="panel-title pull-left h3">
                    {{ company.name }}
                    <small>(Price: {{ company.price | currency }} | Quantity: {{ company.quantity }})</small>
                </div>
                <div class="panel-title pull-right h3">
                    <small>Position: {{ company.quantity * company.price | currency }}</small>
                </div>
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
                            class="btn btn-danger"
                            @click.prevent="sell({company: company, quantity: quantity, reset: reset})"
                            :disabled="disabled"
                    >Sell
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
                return this.quantity <= 0 || this.quantity > this.company.quantity;
            }
        },
        methods: {
            ...mapMutations([
                'sell'
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