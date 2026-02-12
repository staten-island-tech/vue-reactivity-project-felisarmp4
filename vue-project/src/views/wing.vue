<template>
    <div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const mains = ref([
  {
    name: 'boneinwings',
    alt: 'boneinwings',
    image: 'boneinwings.png'
  },
  {
    name: 'bonelesswings',
    alt: 'bonelesswings',
    image: 'bonelesswings.png'
  },
  {
    name: 'chicken',
    alt: 'chicken',
    image: 'chicken.png'
  },
  {
    name: 'schicken',
    alt: 'schicken',
    image: 'schicken.png'
  }
])

const sides = ref([
  {
    name: 'fries',
    alt: 'fries',
    image: 'fries.png'
  },
  {
    name: 'mashedpotatoes',
    alt: 'mashedpotatoes',
    image: 'mashedpotatoes.png'
  }
])

const sauces = ref([
  {
    name: 'mustard',
    alt: 'mustard',
    image: 'mustard.png'
  },
  {
    name: 'ranch',
    alt: 'ranch',
    image: 'ranch.png'
  }
])

const drinks = ref([
  {
    name: 'cola',
    alt: 'cola',
    image: 'cola.png'
  },
  {
    name: 'fanta',
    alt: 'fanta',
    image: 'fanta.png'
  },
  {
    name: 'sprite',
    alt: 'sprite',
    image: 'sprite.png'
  }
])
</script>

<style lang="scss" scoped>

</style>