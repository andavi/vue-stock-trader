<template>
    <div class="col-sm-6">
        <div class="panel" :class="[company.price > 0 ? 'panel-success' : 'panel-danger']">
            <div class="panel-heading">
                <div class="panel-title">
                    <span style="font-weight: 500">{{ company.name }}</span> <span style="font-size: 60%">(Price: {{ company.price }})</span>
                </div>
            </div>
            <div class="panel-body">
                <form class="form-inline" v-if="company.price > 0">
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
                    </div>
                    <button
                            type="submit"
                            class="btn btn-success pull-right"
                            :disabled="disabled"
                            @click.prevent="buy({ company: company, quantity: quantity, reset: reset })"
                    >Buy</button>
                </form>
                <form class="form-inline" v-else>
                    <div class="form-group">
                        <input type="number" id="deadinput" class="form-control bg-danger" placeholder="Bankrupt" disabled>
                    </div>
                    <button
                            type="submit"
                            class="btn btn-danger pull-right"
                            disabled="disabled"
                            @click.prevent="buy({ company: company, quantity: quantity, reset: reset })"
                    >Closed</button>
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
