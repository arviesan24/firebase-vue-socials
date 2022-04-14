<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Socials</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/login" v-if="!isLoggedIn">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register" v-if="!isLoggedIn">Register</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <button-warning
              label="Logout"
              @click="logout()"
              v-if="isLoggedIn"
            />
          </form>
        </div>
      </div>
    </nav>
    <RouterView />
  </main>
</template>


<script setup>
  import { RouterLink, RouterView, useRouter } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
  import ButtonWarning from './components/ButtonWarning.vue';

  const isLoggedIn = ref(false)
  const router = useRouter()

  let auth;
  onMounted(() => {
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true
      } else {
        isLoggedIn.value = false
      }
    })
  });

  const logout = () => {
    signOut(auth).then(() => {
      router.push("/")
    })
  }
</script>
