<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <h1>Trade or View your Portfolio</h1>
            <p>You may Save & Load your data.</p>
            <p>Click on 'End Day' to begin a new Day!</p>
            <hr>
            <h3>Your funds: {{ funds | currency }}</h3>
        </div>
    </div>
</template>

<script>
    export default{
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>