<template>
    <div id="container">
        <div id="imagecontainer"></div>
        <div id="itemoverlay">
            <img 
                v-for="(food, index) in placedfood" 
                :key="food.name + index"
                :src="food.src" 
                :alt="food.name"
                :style="{ zIndex: index + 1 }"
                class="itemoverlay"
            />
        </div>
       
        <div id="foodlist">
            <FoodButton
                class="foodbutton"
                @click="addfood(food)"
                v-for="(food, index) in customerfood"
                :key="food.name + index"
                :food="food"
            />
        </div>
    </div>
</template>

<script setup>

import foodbutton from '@/components/foodbutton.vue'

const mains = [
  {
    name: 'bone in wings',
    alt: 'boneinwings',
    src: '/boneinwings.png'
  },
  {
    name: 'boneless wings',
    alt: 'bonelesswings',
    src: '/bonelesswings.png'
  },
  {
    name: 'chicken sandwich',
    alt: 'chicken',
    src: '/chicken.png'
  },
  {
    name: 'spicy chicken sandwich',
    alt: 'schicken',
    src: '/schicken.png'
  }
]

const sides = [
  {
    name: 'fries',
    alt: 'fries',
    src: '/fries.png'
  },
  {
    name: 'mashed potatoes',
    alt: 'mashedpotatoes',
    src: '/mashedpotatoes.png'
  }
]

const sauces = [
  {
    name: 'mustard',
    alt: 'mustard',
    src: '/mustard.png'
  },
  {
    name: 'ranch',
    alt: 'ranch',
    src: '/ranch.png'
  }
]

const drinks = [
  {
    name: 'cola',
    alt: 'cola',
    src: '/cola.png'
  },
  {
    name: 'fanta',
    alt: 'fanta',
    src: '/fanta.png'
  },
  {
    name: 'sprite',
    alt: 'sprite',
    src: '/sprite.png'
  }
]
</script>

<style scoped>
.menu-section {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

img {
    width: 150px;
    height: 150px;
    object-fit: cover;
}
</style>
