export default {
    wishes(state){
        return state.wishes
    },
    getWishById: (_, getters) => (id) => {
            let foundWish = getters.wishes.find(wish => id === wish.id);
            return foundWish;
    },
    shouldUpdate(state){
        if(!state.lastFetch) return true;
        let currentTime = new Date().getTime();
        return (currentTime - state.lastFetch) / 1000 > 60;
    },
    hasWishes(state){
        return state.wishes && state.wishes.length;
    }
}