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
        <img :src="getImageUrl(pokemonNumber)" class="img-fluid rounded-start pokemon-img" :class="`type-${pokemonInfo.types[0].type.name}`" alt="...">
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
          <button type="button" class="btn btn-secondary btn-sm">Detalles</button>
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

.type-grass {
  filter: drop-shadow(0 0 2em  rgba(155, 204, 80, 1));
}
.type-poison {
  filter: drop-shadow(0 0 2em  rgba(191, 143, 202, 1));
}

.type-fire {
  filter: drop-shadow(0 0 2em  rgba(253, 125, 36, 1));
}

.type-flying {
  filter: drop-shadow(0 0 2em  rgba(155, 204, 204, 1));
}

.type-water {
  filter: drop-shadow(0 0 2em  rgba(69, 146, 196, 1));
}

.type-bug {
  filter: drop-shadow(0 0 2em  rgba(168, 184, 32, 1));
}

.type-normal {
  filter: drop-shadow(0 0 2em  rgba(168, 168, 120, 1));
}

.type-electric {
  filter: drop-shadow(0 0 2em  rgba(251, 206, 53, 1));
}

.type-ground {
  filter: drop-shadow(0 0 2em  rgba(219, 181, 77, 1));
}

.type-fairy {
  filter: drop-shadow(0 0 2em  rgba(214, 133, 173, 1));
}

.type-fighting {
  filter: drop-shadow(0 0 2em  rgba(213, 103, 97, 1));
}

.type-psychic {
  filter: drop-shadow(0 0 2em  rgba(249, 85, 135, 1));
}

.type-rock {
  filter: drop-shadow(0 0 2em  rgba(182, 161, 54, 1));
}

.type-steel {
  filter: drop-shadow(0 0 2em  rgba(183, 183, 206, 1));
}

.type-ice {
  filter: drop-shadow(0 0 2em  rgba(126, 206, 206, 1));
}

.type-ghost {
  filter: drop-shadow(0 0 2em  rgba(123, 105, 188, 1));
}

.type-dragon {
  filter: drop-shadow(0 0 2em  rgba(119, 108, 192, 1));
}

.type-dark {
  filter: drop-shadow(0 0 2em  rgba(112, 88, 72, 1));
}

.type-unknown {
  filter: drop-shadow(0 0 2em  rgba(0, 0, 0, 1));
}

.type-shadow {
  filter: drop-shadow(0 0 2em  rgba(0, 0, 0, 1));
}
</style>