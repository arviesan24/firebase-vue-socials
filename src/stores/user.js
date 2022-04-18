import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    emailSearch: '',
    searchResults: [],
    fname: '',
    lname: '',
    profession: '',
    aboutMe: ''
  }),
  getters: {
    getemailSearch: (state) => state.emailSearch,
    getSearcResults: (state) => state.searchResults,
    getFname: (state) => state.fname,
    getLname: (state) => state.lname,
    getProfession: (state) => state.profession,
    getAboutMe: (state) => state.aboutMe,
  },
  actions: {
    updateSearchResults(values) {
      this.searchResults = values
    },
    updateEmailSearch(value) {
      this.searchResults = value
    },
    updateFname(val) {
      this.fname = val
    },
    updateLname(val) {
      this.lname = val
    },
    updateProfession(val) {
      this.profession = val
    },
    updateAboutMe(val) {
      this.aboutMe = val
    }
  }
})
