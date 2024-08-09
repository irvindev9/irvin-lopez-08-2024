<script setup lang="ts">
import Layout from './components/Layout.vue'
import { onBeforeMount } from 'vue'
import { usePokemonStore } from './stores/PokemonStore'

const pokemonStore = usePokemonStore()

onBeforeMount(() => {
  pokemonStore.initializeApp()
})
</script>

<template>
  <Layout>
    <Router-view />
  </Layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
