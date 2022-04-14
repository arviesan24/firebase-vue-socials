<template>
  <div class="card"  style="width: 50%;">
    <div class="card-header text-center">
      <h1>Create an Account</h1>
    </div>
    <div class="card-body ">
      <input-text
        label="Email"
        :modelValue="email"
        @update:modelValue="email = $event"
      />
      <input-password
        label="Password"
        :modelValue="password"
        @update:modelValue="password = $event"
      />
      <div v-if="errMsg" class="alert alert-danger mt-3" role="alert">
        {{ errMsg }}
      </div>
    </div>
    <div class="card-footer text-muted  text-center">
      <button-primary
        label="Register"
        @click="register()"
        class="m-1"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    getAuth,
    createUserWithEmailAndPassword
  } from 'firebase/auth';
  import InputText from '../components/InputText.vue';
  import InputPassword from '../components/InputPassword.vue';
  import ButtonPrimary from '../components/ButtonPrimary.vue';
import { useRouter } from 'vue-router';

  const email = ref('')
  const password = ref('')
  const router = useRouter()
  const errMsg = ref()

  const register= () => {
    // need .value because of ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((result) => {
        console.log("Registration successful.")
        console.log(auth.currentUser)
        router.push('/feed')
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email"
          break
          case "auth/wrong-password":
            errMsg.value = "Incorrect password"
          break
          case "auth/email-already-in-use":
            errMsg.value = "Email already in use"
          break
          case "auth/weak-password":
            errMsg.value = "Password is weak"
          break
          default:
            errMsg.value = error.code
          break
        }
      })
  }

</script>

<style scoped>
.card {
  margin: 0 auto;
  float: none;
}
</style>
