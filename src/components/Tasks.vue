<template>
  <div @click="$emit('toggle-rem',task.id)" :class="[task.reminder ? 'reminder' : '', 'task']" :key="task.id" v-for="task in tasks">
   <task :task = "task" @delete-task="$emit('delete-task',task.id)"/>
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  components: { Task },
  name: "Tasks",
  props: {
    tasks: {
      type: Array,
    }
  },
  emits : ['delete-task','toggle-rem'],

}
</script>

<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>