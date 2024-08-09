<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getPokemonInfo, getEvolutionChain } from '../api';
import { ref, onBeforeMount } from 'vue';
import Type from './Partials/Type.vue';
import Stats from './Team/Stats.vue';


const route = useRoute()

console.log(route.params.id)

const pokemonInfo = ref({});
const evolutionChain = ref({});

onBeforeMount(async () => {
  const info = await getPokemonInfo(route.params.id);

  pokemonInfo.value = info;

  const evolution = await getEvolutionChain(info.id);

  evolutionChain.value = evolution;
});

function getImageUrl(pokemonId: number) {
  return new URL(`../assets/pokemons/${pokemonId.toString().padStart(3, "0")}.png`, import.meta.url).href;
}

</script>

<template>
  <div class="row justify-content-center">
    <h1 class="text-center title">{{pokemonInfo.name}}</h1>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-md-4 col-lg-3 p-5">
      <img :src="getImageUrl(pokemonInfo.id)" class="img-fluid" alt="pokemon-img" :class="`type-pokemon-${pokemonInfo.types[0].type.name}`">
    </div>
  </div>
  <div class="row justify-content-center mb-5">
    <div class="col-12 col-md-4 col-lg-5">
      <div class="accordion" id="accordionPokemonInfo">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              Información
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionPokemonInfo">
            <div class="accordion-body">
              <div class="row">
                <b>Tipo:</b>
              </div>
              <div class="row" v-if="pokemonInfo.types">
                <Type v-for="(type, index) in pokemonInfo.types" :key="index" :type="type.type" />
              </div>
              <div class="row">
                <p>
                  <b>Altura:</b> {{(Number(pokemonInfo.height) * 10)}} cm
                  <br>
                  <b>Peso:</b> {{(Number(pokemonInfo.weight) / 10)}} kg
                  <br>
                  <b>Grito:</b>
                </p>
                <div class="row px-1" v-if="pokemonInfo.cries">
                  <audio controls>
                    <source :src="pokemonInfo.cries.latest" type="audio/ogg">
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Estadisticas
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionPokemonInfo">
            <div class="accordion-body">
              <div class="row">
                <Stats :pokemonInfo="pokemonInfo" />
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Evoluciones
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionPokemonInfo">
            <div class="accordion-body">
              <div class="pokemon-evolution-container justify-content-center text-center" v-if="evolutionChain">
                <div v-for="evolution in evolutionChain" :key="evolution.id" class="pokemon-evolution-icon">
                  <img :src="getImageUrl(evolution.id)" alt="pokemon-evolution" class="img-fluid">
                  <p>{{evolution.name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-transform: capitalize;
}
audio {
  width: 100%;
  padding: 0 1em;
  height: 30px;
}
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