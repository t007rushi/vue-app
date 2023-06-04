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
action : () => {
    console.log("Hello consolers");
}
}
}
</script>

<style>

</style>