import getters from './getters';
import mutations from './getters';
import actions from './getters';

export default {
    namespaced:true,
    state(){
        return {
            gifts: []
        }
    },
    getters,
    mutations,
    actions
}