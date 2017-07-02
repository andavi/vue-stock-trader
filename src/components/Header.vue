<template>
    <div class="panel-header">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" tag="a" class="navbar-brand" active-class="active"><span
                            class="glyphicon glyphicon-usd"></span><span style="font-weight: 400">tock Trader</span>
                    </router-link>
                </div>
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
                    <router-link to="/progress" tag="li" active-class="active"><a>Progress</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click.prevent="endDay">End Day</a></li>
                    <li
                            class="dropdown"
                            :class="{ open: menuOpen }"
                            @mouseenter="menuOpen = true"
                            @mouseleave="menuOpen = false"
                    >
                        <a class="dropdown-toggle" href="#">Save & Load
                            <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click.prevent="save(saveState)">Save</a></li>
                            <li><a href="#" @click.prevent="load(loadState)">Load</a></li>
                        </ul>
                    </li>
                    <li><a>
                        <small>Funds: {{ funds | currency }} | Assets: {{ assets | currency
                            }} | Net: {{ funds + assets | currency }} <span class="glyphicon glyphicon-signal"></span>
                        </small>
                    </a></li>
                </ul>
            </div>
        </nav>
    </div>
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