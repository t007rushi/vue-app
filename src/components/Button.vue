<template>
  <button class = "btn" @click="action()" :style="{backgroundColor : color}">{{ title }}</button>
</template>

<script>
export default {
name : "Button",
props : {
  title : {
    type : String,
    default : "click me"
  },
  color : {
      type : String
  }
},
methods : {
action () {
this.$emit('toggle-add-task');
}
},
emits : ['toggle-add-task']
}
</script>

<style>

</style>