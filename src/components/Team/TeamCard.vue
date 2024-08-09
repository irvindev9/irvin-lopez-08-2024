<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import Type from '../Partials/Type.vue';
import Stats from './Stats.vue';
import { Pokemon } from '../../models/Pokemon';
import { useSiteStore } from '../../stores/SiteStore';
import { usePokemonStore } from '../../stores/PokemonStore';
import { getPokemonInfo } from '../../api';

const pokemonInfo = ref({});

const props = defineProps<{
  pokemonNumber: number;
}>();

const siteStore = useSiteStore();
const pokemonStore = usePokemonStore();

function getImageUrl(pokemonId: number) {
  return new URL(`../../assets/pokemons/${pokemonId.toString().padStart(3, "0")}.png`, import.meta.url).href;
}

onMounted(() => {
  getInfo(props.pokemonNumber);
});

onUpdated(() => {
  if (pokemonInfo.value.id !== props.pokemonNumber) {
    getInfo(props.pokemonNumber);
  }
});

async function getInfo(pokemonNumber: number) {
  siteStore.setLoader(true);
  const info = await getPokemonInfo(pokemonNumber);
  siteStore.turnOffLoader();

  pokemonInfo.value = info;
}

function removePokemonFromTeam() {
  const pokemon: Pokemon = {
    id: pokemonInfo.value.id,
    name: pokemonInfo.value.name,
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonInfo.value.id}/`
  };

  pokemonStore.removePokemon(pokemon);
}
</script>

<template>
  <div class="card mb-3 shadow-sm">
    <div class="row g-0">
      <div class="col-12 col-md-4 p-5" v-if="pokemonInfo.types">
        <img :src="getImageUrl(pokemonNumber)" class="img-fluid rounded-start pokemon-img" :class="`type-pokemon-${pokemonInfo.types[0].type.name}`" alt="...">
      </div>
      <div class="col-12 col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{pokemonInfo.name}}</h5>
          <div class="row px-1">
            <Type v-for="(type, index) in pokemonInfo.types" :type="type.type" :key="index" />
          </div>
          <div class="row px-1 mt-1">
            Grito:
          </div>
          <div class="row px-1" v-if="pokemonInfo.cries">
            <audio controls>
              <source :src="pokemonInfo.cries.latest" type="audio/ogg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-0">
      <Stats :pokemonInfo="pokemonInfo" />
    </div>
    <div class="row g-0">
      <div class="d-grid gap-2 mt-3">
        <div class="btn-group btn-sm" role="group" aria-label="Basic mixed styles example">
          <RouterLink type="button" class="btn btn-secondary btn-sm" :to="`/team/${pokemonInfo.id}`">Detalles</RouterLink>
          <button type="button" class="btn btn-danger btn-sm" @click="removePokemonFromTeam">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.75);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.card-title {
  text-transform: capitalize;
}

audio {
  width: 100%;
  padding: 0 1em;
  height: 30px;
}
</style>