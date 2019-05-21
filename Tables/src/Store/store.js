import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex)
const state = {
    count: 0,
    message: '',
    Items:[]
}
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});
export default new Vuex.Store({
    state,
    plugins: [vuexLocal.plugin],
    mutations: {
        increment(state) {
            state.count++
        },
        updateMessage(state,items) {
            state.Items.push(items)
        },
    },
})

