<template>
    <div>
<h2>{{ animal.name }}</h2>
<h2>{{ animal.species }}</h2>
    </div>
</template>

<script setup>
defineProps({
   food : {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 200px;
        width: 150px;
        border: 3px solid black;
    }
</style>