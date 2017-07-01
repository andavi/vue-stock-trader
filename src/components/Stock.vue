<!--<template>-->
<!--<div class="col-sm-6 col-md-4">-->
<!--<div class="panel" :class="[company.price > 0 ? 'panel-success' : 'panel-danger']">-->
<!--<div class="panel-heading">-->
<!--<h3 class="panel-title">-->
<!--{{ company.name }}-->
<!--<small>(Price: {{ company.price }})</small>-->
<!--</h3>-->
<!--<div class="panel-body">-->
<!--<div class="pull-left">-->
<!--<input type="number">-->
<!--</div>-->
<!---->
<!--&lt;!&ndash;<form class="form-inline" v-if="company.price > 0">&ndash;&gt;-->
<!--&lt;!&ndash;<div class="form-group">&ndash;&gt;-->
<!--&lt;!&ndash;<input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">&ndash;&gt;-->
<!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--&lt;!&ndash;<button&ndash;&gt;-->
<!--&lt;!&ndash;type="submit"&ndash;&gt;-->
<!--&lt;!&ndash;class="btn btn-success pull-right"&ndash;&gt;-->
<!--&lt;!&ndash;:disabled="disabled"&ndash;&gt;-->
<!--&lt;!&ndash;@click.prevent="buy({ company: company, quantity: quantity, reset: reset })"&ndash;&gt;-->
<!--&lt;!&ndash;&gt;Buy&ndash;&gt;-->
<!--&lt;!&ndash;</button>&ndash;&gt;-->
<!--&lt;!&ndash;</form>&ndash;&gt;-->
<!--&lt;!&ndash;<form class="form-inline" v-else>&ndash;&gt;-->
<!--&lt;!&ndash;<div class="form-group">&ndash;&gt;-->
<!--&lt;!&ndash;<input type="number" id="deadinput" class="form-control bg-danger" placeholder="Bankrupt"&ndash;&gt;-->
<!--&lt;!&ndash;disabled>&ndash;&gt;-->
<!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--&lt;!&ndash;<button&ndash;&gt;-->
<!--&lt;!&ndash;type="submit"&ndash;&gt;-->
<!--&lt;!&ndash;class="btn btn-danger pull-right"&ndash;&gt;-->
<!--&lt;!&ndash;disabled="disabled"&ndash;&gt;-->
<!--&lt;!&ndash;@click.prevent="buy({ company: company, quantity: quantity, reset: reset })"&ndash;&gt;-->
<!--&lt;!&ndash;&gt;Closed&ndash;&gt;-->
<!--&lt;!&ndash;</button>&ndash;&gt;-->
<!--&lt;!&ndash;</form>&ndash;&gt;-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->

<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">

                    <div class="panel-title pull-left h3">
                        {{ company.name }}
                        <small>(Price: {{ company.price }})</small>
                    </div>
                    <div class="panel-title pull-right h3"><small>Test</small></div>
                    <div class="clearfix"></div>
                <!--</div>-->
                <!--<div class="pull-right">-->
                    <!--Test-->
                <!--</div>-->
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
