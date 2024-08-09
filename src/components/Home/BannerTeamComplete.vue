<script setup lang="ts">
import { usePokemonStore } from '../../stores/PokemonStore';

const pokemonStore = usePokemonStore();
</script>

<template>
  <div class="banner container" v-if="pokemonStore.selectedPokemons >= 6">
    <div class="row justify-content-center">
      <div class="col-12 text-center shadow-sm">
        <h4>Equipo completo</h4>
        <p>
          <Router-link to="/team" class="btn btn-primary bg-primary-glass">Ver equipo</Router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: fixed;
  bottom: 0;
  z-index: 1000;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>