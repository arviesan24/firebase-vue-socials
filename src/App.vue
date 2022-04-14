<template>
  <nav>
    <router-link to="/login">Login</router-link> | 
    <router-link to="/register">Register</router-link> | 
    <router-link to="/feed">Feeds</router-link> | 
    <button-warning
      label="Logout"
      @click="logout()"
      v-if="isLoggedIn"
    />
  </nav>
  <RouterView />
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

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
