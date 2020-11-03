<template>
    <base-card v-for="wish in wishes" :key="wish.id">
        <wishlist-item :id="wish.id" :title="wish.title" :description="wish.description" :image="wish.image"></wishlist-item>
    </base-card>
</template>

<script>
import {mapGetters} from 'vuex';

import WishlistItem from '../../components/wishes/wishItem.vue';

export default {
    computed: {

        ...mapGetters('wishes', ['wishes'])
    },
    components:{
        WishlistItem
    },
    methods: {
        async loadWishes(){
           this.$store.dispatch('wishes/loadWishes'); 
        }
    },
    created(){
        this.loadWishes();
    }
}
</script>