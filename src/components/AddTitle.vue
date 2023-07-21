<script>
import axios from "axios";
export default {
    name: "AddTodoList",
    data() {
        return {
            todoTitle: "",
            placeholder:"Create a new Todo...",
        };
    },
    methods: {
        addTodo() {
            axios.post(`http://localhost:3001/todos`, { "title": this.todoTitle, "done": "false" })
                .then(response => {
                    this.todoTitle = "";
                })
                .catch(e => {
                    console.error(e);
                })
        }
    }
}
</script>

<template>
    <section class="flex justify-center">
        <input class="p-4 rounded-md w-2/5 mb-6 " type="text" v-model="todoTitle" @keyup.enter="addTodo" @focusin="this.placeholder='Currently typing'" @focusout="this.placeholder='Create a new Todo...'"
            aria-label="Create a new Todo" :placeholder="placeholder" />
    </section>
</template>
