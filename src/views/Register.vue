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
    <button class="btn btn-lg btn-outline-light" @click="signInWithGoogle()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
      </svg> Sign In with Google
    </button>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
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

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user)
        router.push("/feed")
      })
      .catch((error) => {

      })
  }

</script>
