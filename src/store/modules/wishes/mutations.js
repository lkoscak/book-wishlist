export default {
    saveWish(state, wish){
        state.wishes.push(wish);
    },
    setWishes(state, wishes){
        state.wishes = wishes;
    },
    setLastFetch(state){
        state.lastFetch = new Date().getTime();
    }
}