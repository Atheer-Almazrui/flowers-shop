import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0,
            total: 0,
        }
    },

    mutations: {
        increment(state) {
            state.count++
        },

        total_price(state,price) {
            state.total += price
        }
    }

})


export default store