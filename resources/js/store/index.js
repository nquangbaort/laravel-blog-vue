import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state : {
        loading : false,
        user : {
            id : '',
            name : '',
            email : '',
            role : '',
            token : ''
        },
        toastAlert : {
            type : '',
            text : '',
            message : ''
        },
    },
    mutations: {
        setLoading (state, value){
            state.loading = value
        },
        setUser (state, value){
            state.user = value
        },
        setToastAlert (state, value){
            state.toastAlert = value
        }
    }

})
