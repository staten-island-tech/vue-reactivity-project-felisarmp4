<template>
    <div>
        <h2>mains</h2>
        <div class="menu-section">
            <div v-for="item in mains" :key="item.name">
                <img :src="item.src" :alt="item.alt">
                <p>{{ item.name }}</p>
            </div>
        </div>

        <h2>sides</h2>
        <div class="menu-section">
            <div v-for="item in sides" :key="item.name">
                <img :src="item.src" :alt="item.alt">
                <p>{{ item.name }}</p>
            </div>
        </div>

        <h2>sauces</h2>
        <div class="menu-section">
            <div v-for="item in sauces" :key="item.name">
                <img :src="item.src" :alt="item.alt">
                <p>{{ item.name }}</p>
            </div>
        </div>

        <h2>drinks</h2>
        <div class="menu-section">
            <div v-for="item in drinks" :key="item.name">
                <img :src="item.src" :alt="item.alt">
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const mains = ref([
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
])

const sides = ref([
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
])

const sauces = ref([
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
])

const drinks = ref([
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
])
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