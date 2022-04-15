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
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useUserStore } from '../stores/user';

  const { getemailSearch } = storeToRefs(useUserStore())

</script>

<style scoped>
  .card {
    border: 1px solid;
    padding: 10px;
    box-shadow: 3px 8px 6px #888888;
  }
</style>
