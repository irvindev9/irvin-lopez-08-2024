<script setup lang="ts">

function getImageUrl(pokemonId: number) {
  console.log(`../assets/pokemons/${pokemonId.toString().padStart(3, "0")}.png`, import.meta.url);
  return new URL(`../assets/pokemons/${pokemonId.toString().padStart(3, "0")}.png`, import.meta.url).href;
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col text-center pt-3">
        <h3>Selecciona a tu equipo (6 restantes)</h3>
      </div>
    </div>
    <div class="row pokemon-container">
      <div class="col-2 p-3" v-for="a in 151" :key="a">
        <div class="card">
          <div class="p-3">
            <img :src="getImageUrl(a)" class="card-img-top pokemon-img-selected">
          </div>
          <div class="card-body">
            <h5 class="card-title">Bulbasaur</h5>
            <p class="card-text">Tipo: Planta</p>
            <div class="d-grid gap-2">
              <a href="#" class="btn btn-primary btn-sm bg-primary-glass">Agregar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-img-selected {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.pokemon-img-selected:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
  
}
</style>
