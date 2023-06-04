
<template>
  <div class="container">
    <div class="flex">
      <Home title="Task Tracker" />
      <Button title="close" color="red"></Button>
    </div>
    <CreateTasks @add-task="AddTask"/>
    <Tasks @delete-task="deleteTask" :tasks="tasks" @toggle-rem="toggleRem" />
    <Footer></Footer>
  </div>
</template>

<script >
import Home from "./components/Home.vue"
import Button from "./components/Button.vue";
import CreateTasks from './components/CreateTask.vue';
import Tasks from "./components/Tasks.vue";
import Footer from "./components/Footer.vue";


export default {
  name: "app",
  components: {
    Home,
    Button,
    CreateTasks,
    Tasks,
    Footer
  },
  data() {
    return {
      tasks: []
    }
  },
      methods : {
        deleteTask(id){
    this.tasks = this.tasks.filter(task  => task.id !== id);
        },
        toggleRem(id){
    this.tasks = this.tasks.map(task =>task.id === id ?{...task, "reminder":!task.reminder} : task)
        },
        AddTask(newTask){
this.tasks = [...this.tasks, newTask]
        }
      },
  created() {
    this.tasks = [
      {
        "id": "1",
        "text": "Doctors Appointment",
        "day": "March 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": "2",
        "text": "Meeting with boss",
        "day": "March 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": "3",
        "text": "Food shopping",
        "day": "March 7th at 2:00pm",
        "reminder": false
      }
    ]
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
