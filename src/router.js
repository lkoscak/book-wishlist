import {createRouter, createWebHistory} from 'vue-router';

import WishlistList from './pages/wishlist/WishlistList.vue';
import WishlistItems from './pages/wishlist/WishlistItems.vue';
import WishlistItemCreate from './pages/wishlist/WishlistItemCreate.vue';
import WishlistItemDetails from './pages/wishlist/WishlistItemDetails.vue';
import GiftMessages from './pages/gifts/GiftMessages.vue';
import UserRegistration from './pages/users/UserRegistration.vue';

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
            path: '/wishlistItems', 
            component: WishlistItems,
            children: [
                {path: 'create', component: WishlistItemCreate}
            ]
        },
        {
            path: '/wishlistItems/:id', component: WishlistItemDetails
        },
        {
            path: '/gifts', component: GiftMessages
        },
        {
            path: '/register', component: UserRegistration
        }
    ]
});

export default router;