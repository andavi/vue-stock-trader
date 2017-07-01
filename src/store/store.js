import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        companies: [
            {
                name: 'BMW',
                price: 100,
                quantity: 0
            },
            {
                name: 'Google',
                price: 200,
                quantity: 0
            },
            {
                name: 'Apple',
                price: 250,
                quantity: 0
            },
            {
                name: 'Twitter',
                price: 8,
                quantity: 0
            }
        ],
    },
    getters: {
        funds: state => {
            return state.funds;
        },
        companies: state => {
            return state.companies;
        }
    },
    mutations: {
        buy: (state, payload) => {
            payload.company.quantity += payload.quantity;
            state.funds -= payload.quantity * payload.company.price;
            payload.reset();
        },

        sell: (state, payload) => {
            payload.company.quantity -= payload.quantity;
            state.funds += payload.quantity * payload.company.price;
            payload.reset();
        },
        endDay: (state) => {
            const range = 0.25;
            // let netHoldDelta = 0;

            state.companies.forEach((company => {
                // get random price change from -spread to spread computed as percentage of price
                let spread = Math.ceil(company.price * range);
                let priceDelta = Math.floor(Math.random() * (spread * 2 + 1) ) - spread;
                // update company price and ensure not zero or below
                let newCompPrice = company.price + priceDelta;
                company.price = (newCompPrice <= 0) ? 0 : newCompPrice;

                // // data could be used to show daily gain/loss and/or net worth
                // let holdDelta = company.quantity * priceDelta;
                // netHoldDelta += holdDelta;
            }));
        },
        save: (state, callback) => {
            callback(state);
        },
        load: (state, callback) => {
            callback(state);
        }
    }
});