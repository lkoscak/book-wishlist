<template>
        <h4>{{ titleMessage }}</h4>
        <h3>{{ message }}</h3>
</template>


<script>
export default {
    props:['email', 'message', 'wish'],
    computed: {
      titleMessage(){
        return `${this.email} gifted you with ${this.wish}`
      }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
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
</style>