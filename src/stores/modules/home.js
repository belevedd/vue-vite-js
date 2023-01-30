import { defineStore } from 'pinia'
import { getCbcList } from '@/service'

const useHomeStore = defineStore('home', {
  state: () => ({
    cbcList: {},
  }),
  actions: {
    async fetchCbcListData() {
      const res = await getCbcList()
      this.cbcList = res.data
    },
  },
})

export default useHomeStore
