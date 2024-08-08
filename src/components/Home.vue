<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Pokemon from './Home/Pokemon.vue';
import { getPokemonList } from '../api';
import { usePokemonStore } from '../stores/PokemonStore';

const pokemonList = ref([]);
const page = ref<number>(1);

const pokemonStore = usePokemonStore();

onMounted(async () => {
  pokemonList.value = await getPokemonList(1);
});

async function loadMore() {
  page.value++;
  const newPokemonList = await getPokemonList(page.value);
  pokemonList.value = [...pokemonList.value, ...newPokemonList];
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col text-center pt-3">
        <h3>Selecciona a tu equipo ({{6 - pokemonStore.selectedPokemons}} restantes)</h3>
      </div>
    </div>
    <div class="row pokemon-container">
      <Pokemon v-for="(pokemon, index) in pokemonList" :key="index" :pokemon="pokemon" />
    </div>
    <div class="row justify-content-center" v-if="pokemonList.length < 151">
      <div class="col text-center py-3">
        <button @click="loadMore" class="btn btn-primary bg-primary-glass">Cargar más</button>
      </div>
    </div>
  </div>
</template>
