<template>
  <div>
    <h1 id="header">make a wing order!</h1>
    <div id="container">
        <div id="foodlists">
            <div id="foodlist">
                <foodbutton
                    class="mainbutton"
                    @click="addfood(food, 'mains')"
                    v-for="(food, index) in mains"
                    :key="food.name + index"
                    :food="food"
                />
            </div>

            <div id="foodlist">
                <foodbutton
                    class="sidesbutton"
                    @click="addfood(food, 'sides')"
                    v-for="(food, index) in sides"
                    :key="food.name + index"
                    :food="food"
                />
            </div>

            <div id="foodlist">
                <foodbutton
                    class="saucesbutton"
                    @click="addfood(food, 'sauces')"
                    v-for="(food, index) in sauces"
                    :key="food.name + index"
                    :food="food"
                />
            </div>

            <div id="foodlist">
                <foodbutton
                    class="drinksbutton"
                    @click="addfood(food, 'drinks')"
                    v-for="(food, index) in drinks"
                    :key="food.name + index"
                    :food="food"
                />
            </div>
        </div>

        <div id="display">
            <img
                v-for="(item, index) in chosenitems"
                :key="item.name + index"
                :src="item.src"
                :alt="item.name"
                :style="{ left: item.x, top: item.y, zIndex: item.z, width: item.w, height: item.h }"
                class="displayimg"
            />
        </div>
    </div>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap"
      rel="stylesheet"
    />

    </div>
</template>

<script setup>
import { ref } from 'vue'
import foodbutton from '@/components/foodbutton.vue'

const positions = {
    mains:  { x: '25%', y: '25%' , z:'2', w:'500px', h:'auto'},
    sides:  { x: '90%', y: '60%', z:'5', w:'250px', h:'auto'},
    sauces: { x: '30%', y: '60%', z:'4', w:'150px', h:'auto'},
    drinks: { x: '20%',  y: '5%', z:'1', w:'auto', h:'300px' },
}

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
const chosenitems = ref([])

function addfood(food, category) {
    const pos = positions[category]
    chosenitems.value = chosenitems.value.filter(i => i.category !== category)
    chosenitems.value.push({ ...food, ...pos, category })
}
</script>

<style scoped>
#container {
    display: flex;
    gap: 20px;
    padding: 20px;
}

#header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: auto;
    margin-top: 20px;
    height: auto;
    border: 4px solid #000000;
    background: #b62727;
    border-radius: 5px;
}

#display {
    position: relative;
    width: 420px;
    height: 420px;
    flex-shrink: 0;
    position: sticky;
    top: 20px;
    align-self: flex-start;
}

.displayimg {
    position: absolute;
    width: 200px;
    height: 200px;
    object-fit: contain;
}

#foodlists {
    display: flex;
    flex-direction: column;
}

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

div {
  font-family: "Gamja Flower", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>