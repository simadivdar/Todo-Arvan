<script>
import ReadTodoList from "./components/ReadTitle.vue";
export default {
  name: "App",
  components: {
    ReadTodoList
  }
};
</script>
<template>
  <header class="w-full font-custom h-72 bg-bgImage bg-auto ">
    <h1 class="text-center font-bold tracking-widest text-2xl text-white pt-32 pb-4 pe-72" >To Do</h1>
    <ReadTodoList/>
  </header>
</template>

