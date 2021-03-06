import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

 export default {
    namespaced: true,
    state(){
        return {
            lastFetched: null,
            wishes: []
        }
    },
    getters,
    mutations,
    actions
};

