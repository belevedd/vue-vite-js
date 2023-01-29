import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    username: '',
    password: '',
  }),
  actions: {},
})

export default useLoginStore
