<template>
  <main>
    <h1>Create an Account</h1>
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
    <button-primary
      label="Register"
      @click="register()"
    />
  </main>
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

  const register= () => {
    // need .value because of ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((result) => {
        console.log("Registration successful.")
        console.log(auth.currentUser)
        router.push('/feed')
      })
      .catch((error) => {
        console.log(error.code)
        alert(error.message)
      })
  }

</script>
