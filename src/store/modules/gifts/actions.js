export default {
    async saveGift(context, gift){
        const user = gift.user;
        delete gift.user;
        const response = await fetch(
            `https://book-wishlist-4a420.firebaseio.com/gifts/${user}.json`,
            {
                method: 'POST',
                body: JSON.stringify(gift)
            }
        )
        const responseData = await response.json();
        const giftId = responseData.name;
        gift.id = giftId;
        context.commit('saveGift', gift);
    },
    async loadGifts(context){
        const user = context.rootGetters['auth/user'];
        const token = context.rootGetters['auth/token'];
        const response = await fetch(`https://book-wishlist-4a420.firebaseio.com/gifts/${user}.json?auth=` + token)
        const responseData = await response.json();
        if(!response.ok){
            throw new Error(response.message || "Failed to fetch gifts!");
        }

        let gifts = [];
        for(let key in responseData){
            gifts.push({
                id: key,
                email: responseData[key].email,
                message: responseData[key].message,
                wish: responseData[key].wish
            });
        }
        context.commit('setGifts', gifts);
    }
}