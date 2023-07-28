<script>
import axios from "axios";
import FilterTasks from "./filterTasks.vue";
export default {
  name: "ReadTodoList",
  components: {
    FilterTasks
  },
  data() {
    return {
      placeholder: "Create a new Todo...",
      todoTitle: "",
      todos: [],
      taskList: [],
    };
  },
  created(){
    axios.get(`http://localhost:3001/todos`)
      .then(response => {
        this.todos = response.data
      })
      .catch(e => {
        console.error(e);
      })
  },
  watch: {
    todos(value) {
      this.taskList = value;
    },
  },
  methods:{
    ChangeLists(event) {
      this.taskList = event;
    },
    ChangeTodos(event){
      this.todos = event;
    },
    addTodo() {
      axios.post(`http://localhost:3001/todos`, { "title": this.todoTitle, "done": false })
        .then(response => {
          this.todoTitle = "";
          this.todos=[...this.todos,response.data];
        })
        .catch(e => {
          console.error(e);
        })
    },
    chaneState(id) {
      axios.patch(`http://localhost:3001/todos/${id}`, { "done": true })
        .then(response => {
          this.taskList = this.taskList.map(todo => {
            if (todo.id === id) {
              todo.done = true;
            }
            return todo;
          });
        })
        .catch(e => {
          console.error(e);
        })
    },
    deleteTask(id) {
      axios.delete(`http://localhost:3001/todos/${id}`)
        .then(response => {
          this.taskList = (this.taskList.filter(todo => todo.id !== id));
          this.todos=(this.todos.filter(todo => todo.id !== id));
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
    <input class="p-4 rounded-md w-1/3 mb-6 " type="text" v-model="todoTitle" @keyup.enter="addTodo"
      @focusin="this.placeholder = 'Currently typing'" @focusout="this.placeholder = 'hi'" aria-label="Create a new Todo"
      placeholder="Create a new Todo..." />
  </section>
  <section class="flex justify-center">
    <div class=" w-1/3 bg-white shadow-lg rounded-md divide-y">
      <div class="overflow-y-scroll h-80">
        <div class="grid grid-cols-1 divide-y p-6">
          <div v-for="todo of taskList" :key="todo.id" class="flex justify-between mb-[0.125rem] min-h-[1.5rem] p-4">
            <div class="">
              <input :class="{ done: todo.done }"
                class="relative float-left -ml-4 mr-4 mt-[0.15rem] h-[1.5rem] w-[1.5rem] appearance-none rounded-full border-[0.115rem] border-solid border-neutral-300 p-2 hover:border-teal-600 hover:cursor-pointer dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary]"
                type="image" src="./src/assets/image/icon-check.svg" value="" @click="chaneState(todo.id)"
                id="checkboxChecked" />
              <label :class="{ done: todo.done }" class="inline-block font-normal pl-[0.15rem] hover:cursor-pointer"
                for="checkboxChecked">
                {{ todo.title }}
              </label>
            </div>
            <button class="visible" @click="deleteTask(todo.id)"><img src="../assets/image/icon-cross.svg" /></button>
          </div>
        </div>
      </div>
      <div class="p-6">
        <filterTasks :todos="todos" @tasks="ChangeLists($event)" @tasksDel="ChangeTodos($event)" />
      </div>
    </div>
  </section>
</template>
<style>
input.done {
  background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

label.done {
  text-decoration: line-through;
  color: hsl(236, 9%, 61%);
}</style>