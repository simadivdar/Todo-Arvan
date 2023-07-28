<script>
import axios from "axios";
export default {
    name: "AddTodoList",
    props:['todos'],
    data() {
        return {
            allCompleted:[],
            tasks:[],
        };
    },
    watch:{
        todos(value){
            this.tasks=value;
    },
    },
    methods: {
        sendAllTitels(){
            this.$emit("tasks",this.tasks);
        },
        sendActiveTitels(){
            this.$emit("tasks",this.tasks.filter(todo => todo.done == false));
        },
        sendCompletedTitels(){
            this.allCompleted=this.tasks.filter(todo => todo.done == true);
            this.$emit("tasks",this.allCompleted);
        },
        deleteAllCompleted(){
            this.todos.filter(todo => todo.done == true).forEach(Completed =>{
            axios.delete(`http://localhost:3001/todos/${Completed.id}`)
            .then(response => {
            })
            .catch(e => {
            console.error(e);
            })
        })
        this.tasks=this.tasks.filter(todo => todo.done == false)
        this.$emit("tasksDel",this.tasks.filter(todo => todo.done == false));
        }
    }
}
</script>

<template>
<section class="flex justify-between text-xs font-semibold text-slate-400">
    <p v-if="tasks.length==0">{{ todos.length }}<span> items left</span></p>
    <p v-else>{{ tasks.length }}<span> items left</span></p>
    <div class="flex justify-end">
        <button class="mr-4" @click="sendAllTitels">All</button>
        <button class="mr-4" @click="sendActiveTitels">Active</button>
        <button class="mr-4" @click="sendCompletedTitels">Completed</button>
        <button class="ml-4" @click="deleteAllCompleted">Clear Completed</button>
    </div>
</section>
</template>
<style>
button:hover{
    color:black;
}
</style>