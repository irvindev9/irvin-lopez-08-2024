<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PokemonCard from './Home/PokemonCard.vue';
import { getPokemonList } from '../api';
import { usePokemonStore } from '../stores/PokemonStore';
import { useSiteStore } from '../stores/SiteStore';
import { Pokemon, Pokemons } from '../models/Pokemon';

const pokemonList = ref<Pokemons>([]);
const page = ref<number>(1);

const pokemonStore = usePokemonStore();
const siteStore = useSiteStore();

onMounted(async () => {
  siteStore.setLoader(true);
  pokemonList.value = await getPokemonList(1);
  siteStore.turnOffLoader();
});

async function loadMore() {
  page.value++;
  siteStore.setLoader(true);
  const newPokemonList: Pokemons = await getPokemonList(page.value);
  pokemonList.value = [...pokemonList.value, ...newPokemonList];
  siteStore.turnOffLoader();
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
      <PokemonCard v-for="(pokemon, index) in pokemonList" :key="index" :pokemon="pokemon" />
    </div>
    <div class="row justify-content-center" v-if="pokemonList.length < 151">
      <div class="col text-center py-3">
        <button @click="loadMore" class="btn btn-primary bg-primary-glass">Cargar más</button>
      </div>
    </div>
  </div>
</template>
