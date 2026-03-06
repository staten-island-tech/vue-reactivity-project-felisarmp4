<template>
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
                :style="{ left: item.x, top: item.y, zIndex: index + 1 }"
                class="displayimg"
            />
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import foodbutton from '@/components/foodbutton.vue'

const positions = {
    mains:  { x: '25%', y: '25%' },
    sides:  { x: '52%', y: '38%' },
    sauces: { x: '10%', y: '60%' },
    drinks: { x: '0%',  y: '25%' },
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

</style>