<template>
    <base-dialog 
    :show="gifting" 
    title="Write a message to a user you are gifting this book!"
    :closable="false"
    @close="gifting = false">Testing</base-dialog>
    <h3>{{title}}</h3>
    <div class="container">
        <img :src="image" :alt="title + ' image'">
        <div class="container-content">
            <p>{{description}}</p>
            <base-button mode="flat" @click="giftABook">Gift this book!</base-button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'description', 'image'],
     data(){
        return {
            gifting: false
        }
    },
    methods:{
        giftABook(){
            this.gifting = true;
        }
    }
}
</script>

<style scoped>
.container {
  margin: 1rem 0;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
}
.container-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

img{
    height: 200px;
    width: 150px;
    margin-right: 50px;
}

p{
    margin-top: 0;
}
</style>