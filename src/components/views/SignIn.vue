<template>
    <PageView>
        <h1 class="uppercase">Sign in</h1>
        <form @submit.prevent="" class="flex flex-col">
            <label for="email">Email:</label>
            <Input v-model="email" id="email" />

            <label for="password">Password:</label>
            <Input type="password" v-model="password" id="password" />
            <Button>Sign in</Button>
        </form>
    </PageView>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../base/Input.vue';
import Button from '../base/Button.vue';
import PageView from '../base/PageView.vue';

const isLogin = ref(true)
const email = ref('')
const password = ref('')

</script>

<style scoped></style>