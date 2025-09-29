import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
        winOpen: false,
        winInfo: {}
    }),
    getters: {},
    actions: {
        setWinOpen(data) {
            this.winOpen = data;
        },
        setWinInfo(data) {
            this.winInfo = data;
        }
    }
})
