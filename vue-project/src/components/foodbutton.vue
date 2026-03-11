<template>
    <div>
<h2>{{ food.name }}</h2>
<img :src="food.src">

<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap"
      rel="stylesheet"
    />
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
        align-items: center;
        height: auto;
        width: 175px;
        padding: 10px;
        margin: 20px;
        text-align: center;
        box-shadow: 4px 4px 10px #00000073;
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        border: 4px solid #b62727;
        border-radius: 5px;
        background-color: #ffffff;
    }

    div:hover{
        transform: scale(1.05);
        box-shadow: 6px 6px 15px #00000073;
    }

img {
    width: 125px;
    height: auto;
}

div {
  font-family: "Gamja Flower", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>