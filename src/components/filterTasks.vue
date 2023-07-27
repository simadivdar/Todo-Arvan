<script>
export default {
    name: "AddTodoList",
    props:['todos'],
    data() {
        return {
        };
    },
    methods: {
        sendAllTitels(){
            console.log(this.todos);
            this.$emit("tasks",this.todos);
        },
        sendActiveTitels(){
            console.log(this.todos.filter(todo => todo.done == false));
            this.$emit("tasks",this.todos.filter(todo => todo.done == false));
        },
        sendCompletedTitels(){
            console.log(this.todos.filter(todo => todo.done == true));
            this.$emit("tasks",this.todos.filter(todo => todo.done == true));
        }
    }
}
</script>

<template>
<section class="flex justify-between text-xs font-semibold text-slate-400">
    <p class="">{{ todos.length }}<span> items left</span></p>
    <div class="flex justify-end">
        <button class="mr-4" @click="sendAllTitels">All</button>
        <button class="mr-4" @click="sendActiveTitels">Active</button>
        <button class="mr-4" @click="sendCompletedTitels">Completed</button>
        <button class="ml-4">Clear Completed</button>
    </div>
</section>
</template>
<style>
button:hover{
    color:black;
}
</style>