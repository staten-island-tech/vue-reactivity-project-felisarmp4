<template>
    <div class="gamelayout">

    <div class="menupanel">
      <h2>mains</h2>
      <div class="menusection">
        <button
          v-for="item in mains" :key="item.name"
          class="menuitem"
          :class="{ selected: selectedorder.main === item.name }"
          @click="selectedorder.main = item.name"
        >
          <img :src="item.src" :alt="item.alt">
          <p>{{ item.name }}</p>
        </button>
      </div>

      <h2>sides</h2>
      <div class="menusection">
        <button
          v-for="item in sides" :key="item.name"
          class="menuitem"
          :class="{ selected: selectedorder.side === item.name }"
          @click="selectedorder.side = item.name"
        >
          <img :src="item.src" :alt="item.alt">
          <p>{{ item.name }}</p>
        </button>
      </div>

      <h2>sauces</h2>
      <div class="menusection">
        <button
          v-for="item in sauces" :key="item.name"
          class="menuitem"
          :class="{ selected: selectedorder.sauce === item.name }"
          @click="selectedorder.sauce = item.name"
        >
          <img :src="item.src" :alt="item.alt">
          <p>{{ item.name }}</p>
        </button>
      </div>

      <h2>drinks</h2>
      <div class="menusection">
        <button
          v-for="item in drinks" :key="item.name"
          class="menuitem"
          :class="{ selected: selectedorder.drink === item.name }"
          @click="selectedorder.drink = item.name"
        >
          <img :src="item.src" :alt="item.alt">
          <p>{{ item.name }}</p>
        </button>
      </div>

      <button class="completebtn" @click="completeorder">complete order</button>
    </div>

    <div class="orderpreview">
      <h2>your order</h2>
      <div class="stackzone">
        <img v-if="selectedorder.main" :src="mainimg"  class="stackimg stackmain" />
        <img v-if="selectedorder.side" :src="sideimg"  class="stackimg stackside" />
        <img v-if="selectedorder.sauce" :src="sauceimg" class="stackimg stacksauce" />
        <img v-if="selectedorder.drink" :src="drinkimg" class="stackimg stackdrink" />
      </div>
      <div class="orderlines">
        <div class="orderline">
          <span class="label">main</span>
          <span class="value">{{ selectedorder.main || '—' }}</span>
        </div>
        <div class="orderline">
          <span class="label">side</span>
          <span class="value">{{ selectedorder.side || '—' }}</span>
        </div>
        <div class="orderline">
          <span class="label">sauce</span>
          <span class="value">{{ selectedorder.sauce || '—' }}</span>
        </div>
        <div class="orderline">
          <span class="label">drink</span>
          <span class="value">{{ selectedorder.drink || '—' }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const selectedorder = reactive({
  main: null,
  side: null,
  sauce: null,
  drink: null,
})

function completeorder() {
  console.log('submitted:', { ...selectedorder })
}
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

const mainimg  = computed(() => mains.value.find(i => i.name === selectedorder.main)?.src)
const sideimg  = computed(() => sides.value.find(i => i.name === selectedorder.side)?.src)
const sauceimg = computed(() => sauces.value.find(i => i.name === selectedorder.sauce)?.src)
const drinkimg = computed(() => drinks.value.find(i => i.name === selectedorder.drink)?.src)

</script>

<style scoped>
.gamelayout {
  display: flex;
  gap: 40px;
  padding: 20px;
}

.menupanel {
  flex: 1;
}

.menusection {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.menuitem {
  background: none;
  border: 3px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  padding: 8px;
  transition: border-color 0.2s, transform 0.1s;
}

.menuitem:hover {
  transform: scale(1.05);
}

.menuitem.selected {
  border-color: #ff5353;
  background: #e7aaaa;
}

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.completebtn {
  margin-top: 10px;
  padding: 12px 24px;
  background: #ee6262;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}

.orderpreview {
  width: 600px;
  position: sticky;
  top: 20px;
  align-self: flex-start;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
}

.stackzone {
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
}

.stackimg {
  position: absolute;
  width: 180px;
  height: 180px;
  object-fit: contain;
}

.stackmain  { top: 0px;   left: 60px;  z-index: 4; }
.stackside  { top: 100px; left: 120px; z-index: 3; }
.stackmain { top: 130px; left: 60px;  z-index: 2; }
.stackdrink { top: 80px;  left: 0px;   z-index: 1; }

.orderlines {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.orderline {
  display: flex;
  justify-content: space-between;
}

.label {
  font-weight: bold;
  font-size: 0.75rem;
  color: #888;
}

.value {
  font-size: 0.9rem;
}
</style>