<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title.value">
        </div>
        <div class="form-control">
            <label for="image">Image URL</label>
            <input type="text" id="image" v-model="image.value">
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea id="description" rows="5" v-model="description.value"></textarea>
        </div>
        <base-button mode="outline">Wish for it!</base-button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            title: {
                value: ''
            },
            image: {
                value: ''
            },
            description: {
                value: ''
            }
        }
    },
    methods: {
        submitForm(){
            this.$emit('save-wish', {
                title: this.title.value,
                image: this.image.value,
                description: this.description.value
            });
        }
    },
    emits: ['save-wish']
}
</script>

<style scoped>
    .form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>