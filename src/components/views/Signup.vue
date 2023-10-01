<template>
    <PageView>
        <h1 class="uppercase">Sign up</h1>
        <form @submit.prevent="handleSignUp" class="flex flex-col">
            <div class="input--container">
                <label for="email">Email:</label>
                <Input v-model="email" id="email" :error-msg="errors.email" />
            </div>

            <div class="input--container">
                <label for="password">Password:</label>
                <Input type="password" v-model="password" id="password" :error-msg="errors.password" />
            </div>
            <div class="input--container">
                <label for="confirm-password">Confirm password:</label>
                <Input type="password" v-model="confirmPassword" id="confirm-password"
                    :error-msg="errors.confirmPassword" />
            </div>
            <Button :is-loading="isLoading">Sign up</Button>
        </form>
    </PageView>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { auth } from '../../config/firebase'
import Input from '../base/Input.vue';
import Button from '../base/Button.vue';
import PageView from '../base/PageView.vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)
const errors = ref({
    email: '',
    password: '',
    confirmPassword: ''
})

watch(email, () => {
    if (errors.value.email) {
        errors.value.email = ''
    }
})
watch(password, () => {
    if (errors.value.password) {
        errors.value.password = ''
    }
})
watch(confirmPassword, () => {
    if (errors.value.confirmPassword) {
        errors.value.confirmPassword = ''
    }
})

const handleSignUp = async () => {
    let isValid = true
    if (!email.value) {
        errors.value.email = 'Email is required'
        isValid = false
    }

    if (!password.value) {
        errors.value.password = 'Password is required'
        isValid = false
    }

    if (!confirmPassword.value) {
        errors.value.confirmPassword = 'You must confirm your password'
        isValid = false
    }

    if (confirmPassword.value !== password.value) {
        errors.value.password = 'The passwords do not match'
        errors.value.confirmPassword = 'The passwords do not match'
        isValid = false
    }

    if (isValid) {
        isLoading.value = true
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value)
        } catch (error) {
            console.error(error)
        } finally {
            isLoading.value = false
        }
    }
}

</script>

<style scoped>
.input--container {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
}
</style>