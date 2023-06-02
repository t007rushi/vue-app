<template>
<div>Task</div>
  <input type="text" placeholder="Add task">
  <div>Day and time</div>
  <input type="text" placeholder="Add Day and Time">
  <div>Set a remainder
  <input type="checkbox" name="remainder" id="remainder"></div>
<Button title="Save Task"></Button>
</template>

<script>
import Button from './Button.vue'

export default {
  components: { Button },
name : "CreateTasks",
props : { 
    tasks : { 
type : Array,
default : [],
    }
}
}
</script>

<style>

</style>