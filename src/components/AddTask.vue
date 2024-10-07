<script setup>
import { ref } from 'vue';
import { taskText, setTask, error } from '../todoapp';

const addPopup = ref(null)

const showPopup = (popup) => {
  popup.classList.add('show');
}

const closePopup = (e, popup) => {
  if( e.target === popup || e.target.classList.contains('close') || e.target.classList.contains('submit') && error.value !== true ) {
    popup.classList.remove('show');
    taskText.value = '';
    error.value = false;
  }
}
</script>

<template>
    <button @click="showPopup(addPopup)" class="flex items-center text-xl bg-cyan-500 p-3 pr-5 pl-5 text-cyan-950 rounded-md mb-10"><img src="/plus.svg" alt="" class="h-6 mr-5">Добавить задачу</button>
    <div @click="closePopup($event, addPopup)" ref="addPopup" class="add-popup cursor-pointer">
      <div class="body cursor-default p-10 flex flex-col gap-5 rounded-xl">
        <button @click="closePopup($event, addPopup)" class="close text-white flex justify-center"><img src="/plus.svg" alt="" class="close h-12 object-contain duration-100 rotate-45 hover:-rotate-45"></button>
        <h2 class="text-white uppercase w-full text-center text-xl">Редактор задач</h2>
        <span v-show="error" class="text-red-500 text-sm">Введите задачу</span>
        <textarea v-model="taskText" placeholder="Задача" :class="error ? 'border-2 border-red-500' : ''" class="h-full p-2 outline-none rounded-md"></textarea>
        <button @click="setTask(taskText)" class="submit bg-blue-500 text-white p-3 pr-5 pl-5 rounded-md">Добавить</button>
      </div>
    </div>
</template>

<style scoped>
.add-popup {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  backdrop-filter: blur(2px);
  display: none;
}

.add-popup.show {
  display: flex;
}

.body {
  width: 500px;
  height: 500px;
  margin: 0 20px;
  background-color: #000;
}
</style>
