<template>
  <div style="background: transparent">
    <RouterView />
  </div>
</template>

<script setup></script>

<style>
body {
    background: repeating-linear-gradient(
        90deg,
        #690606,
        #690606 40px,
        #ffffff 40px,
        #ffffff 80px
    );
}
</style>