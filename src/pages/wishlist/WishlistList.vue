<template>
<div>
    <base-dialog :show="!!errorMessage" closable title="Wild error encountered!" @close="handleError">
        {{errorMessage}}
    </base-dialog>
    <base-dialog 
    :show="wishing" 
    title="Make a wish!"
    :closable="false"
    @close="closeWishingForm">
        <wish-form @save-wish="saveWish"></wish-form>
    </base-dialog>
    <base-card>
        <div class="controls">
            <base-button mode="outline" @click="loadWishes(true)">Refresh wishlist</base-button>
            <base-button v-if="!isAuthenticated" link to="/register?redirect=wishlist">Login to make a wish!</base-button>
            <base-button v-else-if="isAuthenticated && !loading" @click="openWishingForm">Make a wish!</base-button>
        </div>
    </base-card>
    <base-loader v-if="loading"></base-loader>
    <base-card v-else-if="canShowWishes && !loading" v-for="wish in wishes" :key="wish.id">
        <wishlist-item :id="wish.id" :title="wish.title" :description="wish.description" :image="wish.image" :userId="wish.user"></wishlist-item>
    </base-card>
    <base-card v-else>
        <h3>Nobody made a wish yet :(</h3>
    </base-card>
</div>
</template>

<script>
import {mapGetters} from 'vuex';

import WishlistItem from '../../components/wishes/WishItem.vue';
import WishForm from '../../components/wishes/WishForm';

export default {
    data(){
        return {
            errorMessage: null,
            loading: false,
            wishing: false
        }
    },
    computed: {
        ...mapGetters('wishes', ['wishes', 'hasWishes']),
        ...mapGetters('auth', ['isAuthenticated']),
        canShowWishes(){
            return this.hasWishes && !this.loading;
        }
    },
    components:{
        WishlistItem,
        WishForm
    },
    methods: {
        async loadWishes(forceLoad = false){
            this.loading = true;
            try{
                await this.$store.dispatch('wishes/loadWishes', forceLoad);
            }catch(error){
                this.errorMessage = error.message || "Something went wrong. Sorry!"
            }
            this.loading = false;
        },
        closeWishingForm(){
            this.wishing = false;
        },
        openWishingForm(){
            this.wishing = true;
        },
        saveWish(wish){
            this.$store.dispatch('wishes/saveWish', wish);
            this.closeWishingForm();
        },
        handleError(){
            this.errorMessage = null;
        }
    },
    created(){
        this.loadWishes();
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>