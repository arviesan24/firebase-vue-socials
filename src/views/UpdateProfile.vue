<template>
  <main>
    <div class="card m-5">
      <div class="card-body">
        <InputText
          label="First Name"
          :modelValue="firstName"
          @update:modelValue="firstName = $event"
        />
        <InputText
          label="Last Name"
          :modelValue="lastName"
          @update:modelValue="lastName = $event"
        />
        <InputText
          label="Profession"
          :modelValue="profession"
          @update:modelValue="profession = $event"
        />
        <TextArea
          label="Tell us about yourself"
          :modelValue="aboutMe"
          @update:modelValue="aboutMe = $event"
        ></TextArea>
        <div class="alert alert-danger" role="alert" v-if="errMsg">
          {{ errMsg }}
        </div>
        <ButtonPrimary label="Save Changes" class="float-end" @click="save()" />
      </div>
    </div>
  </main>
</template>


<script setup>
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { getDatabase, ref as fbRef, set } from "firebase/database";
  import { ref } from 'vue';
  import { useRouter } from "vue-router";

  import ButtonPrimary from '../components/ButtonPrimary.vue';
  import InputText from '../components/InputText.vue';
  import TextArea from '../components/TextArea.vue';
  import { useUserStore } from '../stores/user';

  const userStore = useUserStore()
  const router = useRouter();

  const errMsg = ref();
  const firstName = ref(userStore.fname);
  const lastName = ref(userStore.lname);
  const profession = ref(userStore.profession);
  const aboutMe = ref(userStore.aboutMe);

  const save = () => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getDatabase()
        const payload = {
          userId: user.uid,
          fname: firstName.value,
          lname: lastName.value,
          profession: profession.value,
          aboutMe: aboutMe.value
        }
        const reference = fbRef(db, 'profiles/' + user.uid)
        set(reference, payload)

        userStore.updateFname(firstName.value)
        userStore.updateLname(lastName.value)
        userStore.updateProfession(profession.value)
        userStore.updateAboutMe(aboutMe.value)

        router.push('/profile')
      } else {
        errMsg.value = "No user logged in."
      }
    });
  }
</script>

<style scoped>
  .card {
    border: 1px solid;
    padding: 10px;
    box-shadow: 3px 8px 6px #888888;
  }
</style>
