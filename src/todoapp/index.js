import { ref, onMounted } from "vue";

export const storage = ref([])
export const taskText = ref('')
export const error = ref(false)

onMounted(() => {
    const id = 0
    localStorage.setItem('id', id)
}) 

if(localStorage.tasks !== undefined) {
    storage.value = JSON.parse(localStorage.tasks)
}

export const storageClear = () => {
    storage.value = []
    localStorage.clear()
}

export const setTask = (text) => {
    if(text.trim() !== '') {
        storage.value.push({ id: Number(localStorage.getItem('id')), taskText: text, done: false})
        localStorage.setItem('tasks', JSON.stringify(storage.value))
        localStorage.setItem('id', Number(localStorage.getItem('id')) + 1)
        taskText.value = ''
        error.value = false
    } else {
        error.value = true
    }
}

export const deleteTask = (id) => {
    storage.value = storage.value.filter(item => item.id !== id)
    localStorage.setItem('tasks', JSON.stringify(storage.value))
}

export const completeTask = (id) => {
    storage.value = storage.value.map(item => { 
        if(item.id === id) { 
            if(item.done) {
                return { ...item, done: false } 
            } else {
                return { ...item, done: true } 
            }
        } else { 
            return item;
        } 
    })
    localStorage.setItem('tasks', JSON.stringify(storage.value))
}