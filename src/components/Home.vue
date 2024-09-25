<template>
    <h1>{{ title }}</h1>
     <Button :title="showAddTask ? 'close' : 'Add task'" :color="showAddTask ?'red' : 'green'" @toggle-add-task="$emit('toggle-add-task')"></Button>
</template>

<script>
import Button from "./Button.vue";

export default {
    name: 'Home',
    props: {
        title: String,
        showAddTask : Boolean,
    },
    components : {
         Button,
    },
emits : ['toggle-add-task'],
}
</script>

<style scoped></style>