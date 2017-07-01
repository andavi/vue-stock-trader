<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <div class="panel-title">
                    <span style="font-weight: 500">{{ company.name }}</span>
                    <span style="font-size: 60%">(Price: {{ company.price }} | Quantity: {{ company.quantity }})</span>
                </div>
            </div>
            <div class="panel-body">
                <form class="form-inline">
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
                    </div>
                    <button
                            type="submit"
                            class="btn btn-danger pull-right"
                            :disabled="disabled"
                            @click.prevent="sell({company: company, quantity: quantity, reset: reset})"
                    >Sell</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

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
