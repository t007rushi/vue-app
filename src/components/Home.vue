<template>
    <h1>{{ title }}</h1>
</template>

<script>

export default {
    name: "Home",
    props: {
        title: {
            type: String,
            default: "Hello Rushi"
        }
    }
}
</script>

<style scoped></style>