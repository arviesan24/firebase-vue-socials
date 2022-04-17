<template>
  <main>
    <div class="card m-5">
      <div class="card-body">
        No search found.
      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useUserStore } from '../stores/user';
  import { getDatabase, ref as fbRef, query, orderByChild } from "firebase/database";
  import { getAuth } from "firebase/auth";


  const { getemailSearch } = storeToRefs(useUserStore())

  onMounted(() => {
    getFirebaseUsers()
  });

  const getFirebaseUsers = () => {
    const db = getDatabase();
    const usersResult = query(fbRef(db, 'authentication/users'))
    console.log(usersResult)
    // const resp = getAuth()
    // console.log(resp)
  }


</script>

<style scoped>
  .card {
    border: 1px solid;
    padding: 10px;
    box-shadow: 3px 8px 6px #888888;
  }
</style>
