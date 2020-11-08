<template>
<div>
    <base-dialog closable title="Wild error encountered!" :show="!!errorMessage" @close="handleError">
        {{errorMessage}}
    </base-dialog>
    <base-loader v-if="loading"></base-loader>
    <base-card v-else-if="canShowGifts && !loading" v-for="gift in gifts" :key="gift.id">
        <gift-item :email="gift.email" :message="gift.message" :wish="getWishById(gift.wish).title"></gift-item>
    </base-card>
    <base-card v-else>You have not received any gifts yet. Check later!</base-card>
</div>
</template>

<script>
import GiftItem from '../../components/gifts/GiftItem.vue';
import {mapGetters} from 'vuex';

export default {
    data(){
        return {
            errorMessage: null,
            loading: false
        }
    },
    components: {
        GiftItem
    },
    computed:{
        ...mapGetters('gifts', ['gifts', 'hasGifts']),
        ...mapGetters('wishes', ['getWishById']),
        canShowGifts(){
            return this.hasGifts && !this.loading;
        }
    },
    methods:{
        async loadGifts(){
            this.loading = true;
            try{
                await this.$store.dispatch('gifts/loadGifts')
            }catch(error){
                this.errorMessage = error.message || "Something went wrong. Sorry!";
            }
            this.loading = false;
        },
        handleError(){
            this.errorMessage = null;
        }
    },
    created(){
        this.loadGifts();
    }
}
</script>