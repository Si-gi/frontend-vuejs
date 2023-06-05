import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {}
    },
    getters: {
        getProducts(state){
            return state.user
        }
    },
    muatations:{

    },
    actions: {
        
    },
    modules:{

    }
})