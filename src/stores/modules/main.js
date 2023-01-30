import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: false,
  }),
  actions: {},
})

export default useMainStore
