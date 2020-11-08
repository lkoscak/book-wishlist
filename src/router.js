import {createRouter, createWebHistory} from 'vue-router';

import WishlistList from './pages/wishlist/WishlistList.vue';
import GiftMessages from './pages/gifts/GiftMessages.vue';
import UserRegistration from './pages/users/UserRegistration.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/wishlist'
        },
        {
            path: '/wishlist', component: WishlistList
        },
        {
            path: '/gifts', component: GiftMessages, 
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/register', component: UserRegistration,
            meta: {
                requiresUnAuth: true
            }
        },
        {
            path: '/:notFound(.*)', component: NotFound
        }
    ]
});

router.beforeEach((to, _, next) => {
    if(to.meta.requiresAuth && !store.getters['auth/isAuthenticated']){
        next('/register');
    } else if(to.meta.requiresUnAuth && store.getters['auth/isAuthenticated']){
        next('/wishlist');
    } else next();
})

export default router;