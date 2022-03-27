import axios from '@plugins/axios.config'
export default {
    namespaced: true,
    getters: {},
    state: {
        isLoading: false,
        isLoggedIn: false,
        user: null,
        error: null,
    },
    actions: {
        handleSubmit(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/login', queryParams)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    }
}
