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
        <i class="fa fa-google"></i> Sign In with Google
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
