<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !email.isValid}">
            <label for="email">Contact Email</label>
            <input type="email" id="email" v-model.trim="email.value" @blur="clearValidity('email')">
            <p v-if="!email.isValid">Email is not valid. Did you fill the field?</p>
        </div>
        <div class="form-control" :class="{invalid: !message.isValid}">
            <label for="message">Message</label>
            <textarea id="message" rows="5" v-model.trim="message.value" @blur="clearValidity('message')"></textarea>
            <p v-if="!message.isValid">Please write a message to the person You are gifting with this fantastic book!</p>
        </div>
        <base-button mode="outline">Gift!</base-button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            email: {
                value: '',
                isValid: true
            },
            message: {
                value: '',
                isValid: true
            }
        }
    },
    methods: {
        submitForm(){
            if(!this.validateForm()) return;
            this.$emit('gift', {
                email: this.email.value,
                message: this.message.value
            });
        },
        validateForm(){
            let formIsValid = true;
            if(this.email.value === ''){
                this.email.isValid = false;
                formIsValid = false;
            }
            if(this.message.value === ''){
                this.message.isValid = false;
                formIsValid = false;
            }
            return formIsValid;
        },
        clearValidity(formInput){
            this[formInput].isValid = true;
        }
    },
    emits: ['gift']
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