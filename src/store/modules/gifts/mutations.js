export default {
    saveGift(state, gift){
        state.gifts.push(gift);
    },
    setGifts(state, gifts){
        state.gifts = gifts;
    }
}