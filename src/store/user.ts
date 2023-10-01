import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
    state: () => ({
        name: '',
        id: null,
        email: '',
    }),
})
