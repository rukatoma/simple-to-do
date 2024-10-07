<script setup>
import { storage, storageClear } from './todoapp';
import AddTask from './components/AddTask.vue';
import Task from './components/Task.vue';

const data = {
  titles: [
    'Пиклема to-do list'
  ],
}
</script>

<template>
  <div class="wrap">
    <h1 class="w-full text-center text-2xl uppercase font-bold mb-10">{{ data.titles[0] }}</h1>
    <button @click="storageClear" class="flex items-center  text-xl bg-orange-500 p-3 pr-5 pl-5 text-orange-950 rounded-md mb-3"><img src="/trash.svg" alt="" class="h-6 mr-5">Удалить все задачи</button>
    <AddTask />
    <article class="mb-10">
      <ul class="flex flex-col gap-3">
        <li class="min-h-40 bg-gray-100 p-2 rounded-md flex items-center justify-center" v-show="storage.length === 0">Пусто</li>
        <li v-for="(item, index) in storage.slice().reverse()" :key="index" class="flex items-center justify-between gap-3 bg-gray-100 p-2 pr-5 pl-5 rounded-md">
          <Task :taskText="item.taskText" :id="item.id" :done="item.done" />
        </li>
      </ul>
    </article>
  </div>
</template>

<style scoped>

</style>
