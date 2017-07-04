<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand" active-class="active">
                    <span class="glyphicon glyphicon-usd"></span><span style="font-weight: 400">tock Trader</span>
                </router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                    <router-link to="/progress" tag="li" active-class="active"><a>Progress</a></router-link>
                </ul>
                <div class="navbar-text navbar-right">
                    <small>Funds: {{ funds | currency }} <span class="glyphicon glyphicon-signal"></span></small>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li
                            class="dropdown"
                            :class="{ open: menuOpen }"
                            @mouseenter="menuOpen = true"
                            @mouseleave="menuOpen = false"
                    >
                        <a class="dropdown-toggle" href="#">Save & Load
                            <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="save(saveState)">Save</a></li>
                            <li><a href="#" @click="load(loadState)">Load</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default{
        data () {
            return {
                menuOpen: false
            }
        },
        computed: {
            funds () {
                return this.$store.getters.funds;
            },
            assets() {
                return this.$store.getters.assets;
            }
        },
        methods: {
            ...mapMutations([
                'endDay',
                'save',
                'load'
            ]),
            saveState(state) {
                state.lastSavedNet = state.funds + state.assets;
                this.$http.put('', state)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    })
            },
            loadState(state) {
                this.$http.get('')
                    .then(response => {
                        return response.json();
                    })
                    .then(position => {
                        state.funds = position.funds;
                        state.assets = position.assets;
                        state.lastSavedNet = position.lastSavedNet;
                        state.companies = position.companies;
                    });
            }
        }
    }
</script>

<style scoped>
    nav {
        max-height: 52px;
    }
</style>