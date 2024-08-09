<script setup lang="ts">
import { onBeforeMount, ref, onMounted } from 'vue';
import { usePokemonStore } from '../../stores/PokemonStore';
import { Pokemon } from '../../models/Pokemon';

const props = defineProps<{
  pokemon: Pokemon;
}>();

const pokemonStore = usePokemonStore();

const pokemonId = ref(0);
const isSelected = ref(false);

onBeforeMount(() => {
  pokemonId.value = Number(props.pokemon.url.split("/")[6]);
})

onMounted(() => {
  isSelected.value = pokemonStore.isPokemonSelected(props.pokemon);
})

function getImageUrl(pokemonId: number) {
  return new URL(`../../assets/pokemons/${pokemonId.toString().padStart(3, "0")}.png`, import.meta.url).href;
}

function addPokemonToTeam() {
  pokemonStore.addPokemon(props.pokemon);
}

function removePokemonFromTeam() {
  pokemonStore.removePokemon(props.pokemon);
}

function toggleSelection() {
  isSelected.value = !isSelected.value;
  isSelected.value ? addPokemonToTeam() : removePokemonFromTeam();
}
</script>

<template>
  <div class="col-xl-2 col-lg-3 col-md-4 col-6 p-3">
    <div class="card">
      <div class="p-3">
        <img 
          :src="getImageUrl(pokemonId)" 
          class="card-img-top pokemon-img" 
          :class="{'pokemon-img-selected': isSelected}" 
          :alt="`pokemon-${pokemonId}`"
        >
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">{{pokemon.name}}</h5>
        <div class="d-grid gap-2">
          <button 
            class="btn btn-sm" 
            :class="{
              'lock-selection': pokemonStore.selectedPokemons >= 6 && !isSelected, 
              'bg-success-glass': isSelected,
              'bg-primary-glass': !isSelected
            }" 
            @click="toggleSelection" 
            :disabled="pokemonStore.selectedPokemons >= 6 && !isSelected"
          >
            {{isSelected ? 'Deseleccionar' : 'Seleccionar'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title::first-letter {
  text-transform: uppercase;
}
.pokemon-img-selected {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.pokemon-img:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.lock-selection {
  background: rgba(140, 140, 140, 0.75);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(140, 140, 140, 0.3);
}
</style>