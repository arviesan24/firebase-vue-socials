import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    emailSearch: '',
    searchResults: []
  }),
  getters: {
    getemailSearch: (state) => state.emailSearch,
    getSearcResults: (state) => state.searchResults
  },
  actions: {
    updateSearchResults(values) {
      this.searchResults = values
    },
    updateEmailSearch(value) {
      this.searchResults = value
    }
  }
})
