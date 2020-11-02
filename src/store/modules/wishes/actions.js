export default {
    async loadWishes(context){
        let response = await fetch(
            'https://book-wishlist-4a420.firebaseio.com/wishes.json'
        )

        let responseData = await response.json();
        let wishes = [];
        for(let key in responseData){
            let wish = {
                id: responseData[key].id,
                title: responseData[key].title,
                image: responseData[key].image,
                description: responseData[key].description
            }
            wishes.push(wish);
        }
        context.commit('setWishes', wishes);
    },
    async saveWish(context, wish){
        let response = await fetch(
            'https://book-wishlist-4a420.firebaseio.com/wishes.json',
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