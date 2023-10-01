<template>
    <button :class="`py-1 px-2 rounded text-base disabled:opacity-80 bg-${color || 'blue'}-400  text-white`">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    color: String,
    variant: String,
})

</script>

<style scoped></style>