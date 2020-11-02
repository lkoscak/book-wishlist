<template>
    <base-card>
        <h2>Make a wish!</h2>
        <wish-form @save-wish="saveWish"></wish-form>
    </base-card>
</template>

<script>
import WishForm from '../../components/wishes/wishForm';

export default {
    components:{
        WishForm
    },
    methods:{
        saveWish(wish){
            this.$store.dispatch('wishes/saveWish', wish);
        }
    }
}
</script>