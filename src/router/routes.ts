import SignIn from '../components/views/SignIn.vue'
import SignUp from '../components/views/Signup.vue'

import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    { path: '/', component: SignIn, name: 'SignIn' },
    { path: '/sign-up', component: SignUp, name: 'SignUp' },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
