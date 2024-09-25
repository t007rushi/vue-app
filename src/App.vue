
<template>
  <div class="container">
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
    <div class="flex">
      <Home title="Task Tracker" @toggle-add-task="toggler()" :showAddTask="showAddTask"/>
    </div>
    <div v-show="showAddTask">

    <CreateTasks @add-task="AddTask" />
    </div>
    <Tasks @delete-task="deleteTask" :tasks="tasks" @toggle-rem="toggleRem" />
    <!-- <nitrozen-tag
        :kind="'filter'"
        :label="'Test tag'"
        v-model:active.sync="isActive">
        </nitrozen-tag> -->
        <!-- <div> -->
        <!-- <nitrozen-avatar
        :isClickable="true"
        :size="'large'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :size="'xlarge'"
        :kind="'initials'"
        :isClickable="true"
        :initials="'anand'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :isClickable="true"
        :size="'xxlarge'"
        :kind="'image'"
        :image="'https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/x5/products/pictures/item/free/original/bY8N9S67n-Test.png'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :size="'small'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :size="'medium'">
        </nitrozen-avatar>
        <nitrozen-avatar
        :size="'xsmall'">
        </nitrozen-avatar> -->
      <!-- </div> -->
      <nitrozen-progressbar 
          :progress="'60'" 
          :inital_value="'0'" 
          :fixed_value="'600'" 
          :final_value="'1000'">
        </nitrozen-progressbar>
  </div>
<!--  -->
</template>

<script >
import Home from "./components/Home.vue"
import CreateTasks from './components/CreateTask.vue';
import Tasks from "./components/Tasks.vue";
import Footer from "./components/Footer.vue";
import {  NitrozenTag, NitrozenAvatar,NitrozenProgressBar} from "@gofynd/nitrozen-vue"

export default {
  name: "app",
  components: {
    Home,
    CreateTasks,
    Tasks,
    Footer
  },
  components : {
    // NitrozenTag, NitrozenAvatar,
    "nitrozen-progressbar":NitrozenProgressBar
  },
  data() {
    return {
      tasks: [],
      showAddTask : false,
      isActive: false,
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
        },
        toggler(){
          this.showAddTask = !this.showAddTask;
        },
        async fetchTask(){
          const res = {}
          const data = await res.json();
          return data;
        }
      },
  async created() {
    this.tasks = await this.fetchTask()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import "./../node_modules/@gofynd/nitrozen-vue/dist/nitrozen.css";

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
