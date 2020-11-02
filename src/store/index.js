import {createStore} from 'vuex';
import wishesModule from './modules/wishes/index.js';
import giftsModule from './modules/gifts/index.js';

const store = createStore({
    modules: {
        wishes: wishesModule,
        gifts: giftsModule
    }
});

export default store;