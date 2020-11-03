export default {
    async saveGift(context, gift){
        const response = await fetch(
            'https://book-wishlist-4a420.firebaseio.com/gifts.json',
            {
                method: 'POST',
                body: JSON.stringify(gift)
            }
        )
        const responseData = await response.json();
        const giftId = responseData.name;
        gift.id = giftId;
        context.commit('saveGift', gift);
    }
}