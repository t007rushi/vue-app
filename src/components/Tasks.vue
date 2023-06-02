<template>
  <div :key="task.id" v-for="task in tasks">
    <h2>{{ task.text }}</h2>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
name : "Tasks",
props : { 
    tasks : { 
type : Array,
    }
}
}
</script>

<style>

</style>