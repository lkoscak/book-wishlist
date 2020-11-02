export default {
    saveWish(state, wish){
        state.wishes.push(wish);
    },
    setWishes(state, wishes){
        state.wishes = wishes;
    }
}