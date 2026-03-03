<template>
    <div id="container">
      
        <div id="foodlist">
            <foodbutton
                class="mainbutton"
                @click="addfood(food)"
                v-for="(food, index) in mains"
                :key="food.name + index"
                :food="food"
            />
        </div>

          <div id="foodlist">
            <foodbutton
                class="sidesbutton"
                @click="addfood(food)"
                v-for="(food, index) in sides"
                :key="food.name + index"
                :food="food"
            />
        </div>

        <div id="foodlist">
            <foodbutton
                class="saucesbutton"
                @click="addfood(food)"
                v-for="(food, index) in sauces"
                :key="food.name + index"
                :food="food"
            />
        </div>

        <div id="foodlist">
            <foodbutton
                class="drinksbutton"
                @click="addfood(food)"
                v-for="(food, index) in drinks"
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

#foodlist {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.foodbutton {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

</style>
