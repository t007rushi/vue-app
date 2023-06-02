<template>
  <button @click="action()">{{ title }}</button>
</template>

<script>
export default {
name : "Button",
props : {
  title : {
    type : String,
    default : "click me"
  }
},
methods : {
action : () => {
    console.log("Hellow consolers");
}
}
}
</script>

<style>

</style>