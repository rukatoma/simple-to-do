<script setup>
import { deleteTask, completeTask } from '../todoapp';

defineProps({
    taskText: String,
    id: Number,
    done: Boolean
})
</script>

<template>
    <div class="flex gap-3">
        <input @click="completeTask(id)" :checked="done" type="checkbox" name="done-checkbox" :value="id" :id="id">
        <label :for="id" class="text-xl">{{ taskText }}</label>
    </div>
    <button @click="deleteTask(id)" class="bg-red-500 text-xs p-2 rounded-md text-white"><img src="/trash.svg" alt="" class="h-6 object-contain"></button>
</template>

<style scoped>
input:checked+label {
  text-decoration: line-through;
  color: gray;
}
</style>
