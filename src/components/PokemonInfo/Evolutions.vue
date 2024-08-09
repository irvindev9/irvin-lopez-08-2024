<script setup lang="ts">
defineProps<{
  evolutionChain: {
    id: number;
    name: string;
    url: string;
  }[];
}>();

function getImageUrl(pokemonId: number) {
  return new URL(`../../assets/pokemons/${pokemonId.toString().padStart(3, "0")}.png`, import.meta.url).href;
}
</script>

<template>
  <div class="pokemon-evolution-container justify-content-center text-center" v-if="evolutionChain">
    <div v-for="evolution in evolutionChain" :key="evolution.id" class="pokemon-evolution-icon">
      <img :src="getImageUrl(evolution.id)" alt="pokemon-evolution" class="img-fluid">
      <p>{{evolution.name}}</p>
    </div>
  </div>
</template>

<style scoped>
.pokemon-evolution-container {
  overflow-x:auto;
  white-space: nowrap;
  min-height: 50px;
}

.pokemon-evolution-icon {
  display: inline-block;
  margin: 0 5px;
  width: 5rem;
  padding: 0.5rem;
}

.pokemon-evolution-icon p {
  text-transform: capitalize;
  font-size: 0.8rem;
}
</style>