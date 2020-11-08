export default {
    async loadWishes(context, forceLoad){
        if(!forceLoad && !context.getters.shouldUpdate) return;
        let response = await fetch(
            'https://book-wishlist-4a420.firebaseio.com/wishes.json'
        )

        let responseData = await response.json();

        if(!response.ok){
            let error = new Error(response.message || 'Failed to fetch wishes!');
            throw error;
        }
        let wishes = [];
        for(let key in responseData){
            for(let wishId in responseData[key]){
                let wish = {
                    id: wishId,
                    title: responseData[key][wishId].title,
                    image: responseData[key][wishId].image,
                    description: responseData[key][wishId].description,
                    user: key
                }
                wishes.push(wish);
            }
        }
        context.commit('setWishes', wishes);
        context.commit('setLastFetch');
    },
    async saveWish(context, wish){
        const user = context.rootGetters['auth/user'];
        const token = context.rootGetters['auth/token'];
        console.log(user, token);
        let response = await fetch(
            `https://book-wishlist-4a420.firebaseio.com/wishes/${user}.json?auth=${token}`,
            {
                method: 'POST',
                body: JSON.stringify(wish)
            }
        )

        let responseData = await response.json();
        let wishId = responseData.name;
        wish.id = wishId;
        context.commit('saveWish', wish);
    }
}