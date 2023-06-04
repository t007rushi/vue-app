<template>
  <div>Task</div>
  <input type="text" placeholder="Add task">
  <div>Day and time</div>
  <input type="text" placeholder="Add Day and Time">
  <div>Set a remainder
    <input type="checkbox" name="remainder" id="remainder">
  </div>
  <Button title="Save Task"></Button>
</template>

<script>
import Button from './Button.vue'

export default {
  components: { Button },
  name: "CreateTasks",
  props: {
    tasks: {
      type: Array,
      default: [],
    }
  }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>