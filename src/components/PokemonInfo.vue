<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getPokemonInfo, getEvolutionChain } from '../api';
import { ref, onBeforeMount } from 'vue';
import { PokemonInfo, EvolutionChain } from '../models/Pokemon';
import { useSiteStore } from '../stores/SiteStore';
import Stats from './Team/Stats.vue';
import Information from './PokemonInfo/Information.vue';
import Evolutions from './PokemonInfo/Evolutions.vue';


const route = useRoute()

const pokemonInfo = ref<PokemonInfo>({
  id: 0,
  name: '',
  types: [],
  height: 0,
  weight: 0,
  stats: [],
  cries: {
    latest: '',
    legacy: ''
  }
});

const evolutionChain = ref<EvolutionChain[]>([]);

const siteStore = useSiteStore();

onBeforeMount(async () => {
  siteStore.setLoader(true);
  const info = await getPokemonInfo(Number(route.params.id));

  pokemonInfo.value = info;

  const evolution = await getEvolutionChain(info.id);

  evolutionChain.value = evolution;
  siteStore.turnOffLoader();
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
    <div class="col-12 col-md-4 col-lg-3 p-5" v-if="pokemonInfo.id">
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
            <div class="accordion-body" v-if="pokemonInfo.cries.latest != ''">
              <Information :pokemonInfo="pokemonInfo" />
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
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Evoluciones
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionPokemonInfo">
            <div class="accordion-body">
              <Evolutions :evolutionChain="evolutionChain" />
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
</style>