<template>
    <div class="panel panel-default" style="text-align: center">
        <div class="panel-heading"><h4 class="text-muted">Watch your Progress here</h4></div>
        <div class="panel-body">
            <div class="row">
                <div class="col-sm-4">
                    <div class="panel panel-success">
                        <div class="panel-heading">Your Funds</div>
                        <div class="panel-body">{{ funds | currency }}</div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="panel panel-info">
                        <div class="panel-heading">Your Assets</div>
                        <div class="panel-body">{{ assets | currency }}</div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="panel panel-warning">
                        <div class="panel-heading">Your Net Worth</div>
                        <div class="panel-body">{{ net | currency }}</div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div
                        class="alert alert-success"
                        style="text-align: center"
                        v-if="newHighNet">You've beat the High Score of <strong>{{ lastSavedNet | currency
                    }}</strong>! Save now to set the new high score!
                </div>

                <div
                        class="alert alert-danger"
                        style="text-align: center"
                        v-else-if="net <= 0"
                >It takes money to make money in this world, and you just lost all yours. Better luck next time Champ!
                </div>

                <div
                        class="alert alert-info"
                        style="text-align: center"
                        v-else>You have to make a net worth of over <strong>{{ lastSavedNet | currency
                    }}</strong> to beat the High Score!
                </div>
            </div>

            <div v-if="!newHighNet && !netEqualsHigh">
                <div class="row" style="text-align: center">
                    <div class="col-sm-4"><span class="label label-success">Funds</span></div>
                    <div class="col-sm-4"><span class="label label-info">Assets</span></div>
                    <div class="col-sm-4"><span class="label label-light">Distance to High Score</span></div>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-success" :style="{width: fundsPercentOfHigh + '%'}">
                        {{ fundsPercentOfHigh }}%
                    </div>
                    <div class="progress-bar progress-bar-info" :style="{width: assetsPercentOfHigh + '%'}">
                        {{ assetsPercentOfHigh }}%
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="row" style="text-align: center">
                    <div class="col-sm-6"><span class="label label-success">Funds</span></div>
                    <div class="col-sm-6"><span class="label label-info">Assets</span></div>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-success" :style="{width: fundsPercentOfNet + '%'}">
                        {{ fundsPercentOfNet }}%
                    </div>
                    <div class="progress-bar progress-bar-info" :style="{width: assetsPercentOfNet + '%'}">
                        {{ assetsPercentOfNet }}%
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import {mapMutations} from 'vuex';

    export default{
        data: function () {
            return {}
        },
        computed: {
            lastSavedNet() {
                return this.$store.getters.lastSavedNet;
            },
            funds() {
                return this.$store.getters.funds;
            },
            fundsPercentOfHigh() {
                return Math.floor(100 * this.funds / this.lastSavedNet);
            },
            fundsPercentOfNet() {
                return Math.round(100 * this.funds / this.net);
            },
            assets() {
                return this.$store.getters.assets;
            },
            assetsPercentOfHigh() {
                return Math.floor(100 * this.assets / this.lastSavedNet);
            },
            assetsPercentOfNet() {
                return Math.round(100 * this.assets / this.net);
            },
            net() {
                return this.funds + this.assets;
            },
            newHighNet() {
                return this.net > this.lastSavedNet;
            },
            netEqualsHigh() {
                return this.net === this.lastSavedNet;
            }
        },
        methods: {
            ...mapMutations([
                'endDay',
                'save',
                'load'
            ]),
            getLastSavedNet(state){
                this.$http.get('')
                    .then(response => {
                        return response.json();
                    })
                    .then(position => {
                        state.lastSavedNet = position.funds + position.assets;
                    });
            }
        },
        created() {
            this.load(this.getLastSavedNet);
        }
    }
</script>

<style scoped>
    .progress {
        margin: 30px;
    }

    .label-light {
        background-color: lightgray;
    }

    .alert {
        margin-left: 30%;
        margin-right: 30%;
    }

</style>