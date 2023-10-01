<template>
    <input :id="id" :type="type"
        :class="`border-2 border-gray-500 rounded p-1 leading-3 mb-1 focus:outline-blue-400 pl-2 ${className}`"
        :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)" />
    <span v-if="errorMsg" class="text-red-500">{{ errorMsg }}</span>
</template>

<script setup lang="ts">
defineProps(['modelValue', 'type', 'id', 'className', 'errorMsg'])
defineEmits(['update:modelValue'])
</script>

<style scoped></style>