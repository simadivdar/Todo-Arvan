<script>
import ReadTodoList from "./components/ReadTitle.vue";
import AddTodoList from "./components/AddTitle.vue";
export default {
  name: "App",
  components: {
    ReadTodoList,
    AddTodoList
  }
};
</script>
<template>
  <header class="w-full font-custom h-72 bg-bgImage bg-auto">
    <h1 class="font-bold tracking-widest w-3/5 text-center text-2xl text-white pt-24 pb-8 ps-24 ">To Do</h1>
    <AddTodoList />
    <ReadTodoList />
  </header>
</template>

