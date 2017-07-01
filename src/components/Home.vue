<template>
    <div class="panel panel-default">
        <div class="panel-body">
                <h1>Trade or View your Portfolio</h1>
                <p>You may Save & Load your data.</p>
                <p>Click on 'End Day' to begin a new Day!</p>
        </div>
        <hr>
        <div class="row" style="text-align: center">
            <div class="col-sm-4"><span class="label label-success">Funds</span></div>
            <div class="col-sm-4"><span class="label label-info">Assets</span></div>
            <div class="col-sm-4"><span class="label label-default">To High Score</span></div>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-success" :style="{width: fundsPercentage + '%'}">
                {{ fundsPercentage }}%
            </div>
            <div class="progress-bar progress-bar-info" :style="{width: assetsPercentage + '%'}">
                {{ assetsPercentage }}%
            </div>
            <!--<div class="progress-bar progress-bar-gray progress-bar-striped" style="width: 10%">-->
                <!--<span class="sr-only">10% Complete (danger)</span>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default{
        data: function() {
            return {
                lastSavedNet: 15000
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            fundsPercentage() {
                return Math.round(100 * this.funds / this.lastSavedNet);
            },
            assets() {
                return this.$store.getters.assets;
            },
            assetsPercentage() {
                return Math.round(100 * this.assets / this.lastSavedNet);
            },
        }
    }
</script>

<style scoped>
    .progress {
        margin: 30px;
    }
    .label-default {
        background-color: lightgray;
    }
</style>