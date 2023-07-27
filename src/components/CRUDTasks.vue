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
      todoTitle: "",
      todos: [],
      taskList: []
    };
  },
  created() {
    axios.get(`http://localhost:3001/todos`)
      .then(response => {
        this.todos = response.data
        this.taskList = this.todos

      })
      .catch(e => {
        console.error(e);
      })
  },
  methods: {
    addTodo() {
      axios.post(`http://localhost:3001/todos`, { "title": this.todoTitle, "done": false })
        .then(response => {
          this.todoTitle = "";
          this.todos = [...this.todos, response.data];
        })
        .catch(e => {
          console.error(e);
        })
    },
    ChangeLists(event) {
      this.taskList = event;
      console.log(event);
    }
  }
}
</script>

<template>
  <section class="flex justify-center">
    <input class="p-4 rounded-md w-1/3 mb-6 " type="text" v-model="todoTitle" @keyup.enter="addTodo"
      @focusin="this.placeholder = 'Currently typing'" @focusout="this.placeholder = 'Create a new Todo...'"
      aria-label="Create a new Todo" placeholder="Create a new Todo..." />
  </section>
  <section class="flex justify-center">
    <div class=" w-1/3 bg-white shadow-lg rounded-md divide-y">
      <div class="overflow-y-scroll h-80">
        <div class="grid grid-cols-1 divide-y p-6">
          <div v-for="todo of taskList" :key="todo.id" class="mb-[0.125rem] block min-h-[1.5rem] p-4">
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-full border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary  checked:bg-indigo-600 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white  dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary]"
              type="checkbox" value="" id="checkboxChecked" />
            <label class="inline-block font-normal pl-[0.15rem] hover:cursor-pointer" for="checkboxChecked">
              {{ todo.title }}
            </label>
          </div>
        </div>
      </div>
      <div class="p-6">
        <filterTasks :todos="todos" @tasks="ChangeLists($event)" />
      </div>
    </div>
  </section>
</template>
