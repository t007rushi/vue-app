<template>
   <h2>{{ task.text }}
      <i @click="DeleteItem(task.id)" class="fas fa-times"></i>
    </h2>
    <p>{{ task.day }}</p>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
    }
  },
    methods : {
DeleteItem (id)  {
this.$emit('delete-task', id)
}
  },
  emits : ['delete-task']
}
</script>

<style>

</style>