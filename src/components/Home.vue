<template>
    <div class="panel panel-default">
        <div class="row panel-body">
            <div class="col-sm-6">
                <h1>Trade or View your Portfolio</h1>
                <p>You may Save & Load your data.</p>
                <p>Click on 'End Day' to begin a new Day!</p>
            </div>
            <div class="col-sm-6 center-block">
                <table class="table table-bordered">
                    <tr class="table-bordered">
                        <td>Your Funds</td>
                        <td>{{ funds | currency }}</td>
                    </tr>
                    <tr class="table-bordered">
                        <td>Your Assets</td>
                        <td>$400</td>
                    </tr>
                    <tr class="bg-info">
                        <td>Your Total Net Worth</td>
                        <td>$10400</td>
                    </tr>
                </table>
            </div>

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