<template>
    <button :class="`py-1 px-2 rounded text-base disabled:opacity-80 bg-${color || 'blue'}-400  text-white`">
        <slot></slot>
        <Loader v-if="isLoading" :color="color" :size="16" />
    </button>
</template>

<script setup lang="ts">
import Loader from './Loader.vue';

defineProps({
    color: String,
    variant: String,
    isLoading: Boolean
})

</script>

<style scoped></style>