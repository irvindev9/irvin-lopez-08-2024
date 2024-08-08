<script setup lang="ts">
import { usePokemonStore } from '../stores/PokemonStore';
import TeamCard from './Team/TeamCard.vue';

const pokemonStore = usePokemonStore();

</script>

<template>
  <div class="row my-3">
    <div class="col-12 text-center">
      <h4>Mi equipo</h4>
    </div>
  </div>
  <div class="row justify-content-center" v-if="pokemonStore.pokemonTeam">
    <div v-for="(pokemon, index) in pokemonStore.pokemonTeam" :key="index"  class="col-10 col-md-5">
      <TeamCard :pokemonNumber="pokemon.id" />
    </div>
  </div>
</template>