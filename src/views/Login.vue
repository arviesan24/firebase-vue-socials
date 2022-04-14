<template>
  <main>
    <h1>Sign In</h1>
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
    <p v-if="errMsg" class="text-danger">{{ errMsg }}</p>
  </main>
    <button-primary
      label="Login"
      @click="login()"
    />
</template>

<script setup>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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

  }

</script>
