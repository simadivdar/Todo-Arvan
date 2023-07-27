<script>
import CrudTodos from "./components/CRUDTasks.vue";
export default {
  name: "App",
  components: {
    CrudTodos
  }
};
</script>
<template>
  <section class="w-full font-custom h-72 bg-bgImage bg-auto">
    <h1 class="font-bold tracking-widest w-3/5 text-center text-2xl text-white pt-16 pb-8 ps-44 ">To Do</h1>
    <CrudTodos />
  </section>
</template>

