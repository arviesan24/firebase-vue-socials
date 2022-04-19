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
          <div class="container-fluid m-1" v-if="isLoggedIn">
            <div class="input-group">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-warning" type="submit">Search</button>
            </div>
          </div>
          <div class="d-flex">
            <router-link class="btn btn-sm btn-outline-success m-1" to="/profile" v-if="isLoggedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
              </svg>
            </router-link>
            <button-warning
              label="Logout"
              @click="logout()"
              v-if="isLoggedIn"
              class="btn-sm m-1"
            />
          </div>
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
