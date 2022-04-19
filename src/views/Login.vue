<template>
  <div class="card"  style="width: 50%;">
    <div class="card-header text-center">
      <h1>Sign In</h1>
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
        label="Login"
        @click="login()"
        class="m-1"
      />
      <button class="btn btn-lg btn-outline-dark m-1" @click="signInWithGoogle()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
        </svg> Sign In with Google
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
  } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  import InputText from '../components/InputText.vue';
  import InputPassword from '../components/InputPassword.vue';
  import ButtonPrimary from '../components/ButtonPrimary.vue';

  const email = ref('')
  const password = ref('')
  const errMsg = ref()
  const router = useRouter()
  const auth = getAuth()

  const login = () => {
    // need .value because of ref()
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((result) => {
        console.log("Login successful.")
        console.log(auth.currentUser)
        errMsg.value = ''
        router.push('/feed')
      })
      .catch((error) => {
        console.log(error)
        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email"
          break
          case "auth/user-not-found":
            errMsg.value = "Account not found"
          break
          case "auth/wrong-password":
            errMsg.value = "Incorrect password"
          break
          default:
            errMsg.value = "Email or password is incorrect"
          break
        }
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

<style scoped>
.card {
  margin: 0 auto;
  float: none;
}
</style>
