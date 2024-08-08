<script setup lang="ts">
defineProps<{
  pokemonInfo: {
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
  };
}>();
</script>

<template>
  <div class="col-12 text-center">
    <p>
      <b>Estadisticas</b>
    </p>
  </div>
  <div class="col-12 px-2" v-if="pokemonInfo.stats">
    <div v-for="(stat, index) in pokemonInfo.stats" class="progress mb-1" role="progressbar" :key="index">
      <div class="progress-bar bg-success" :style="{width: `${stat.base_stat}%`}">
        {{ stat.stat.name }}: {{stat.base_stat}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  text-transform: capitalize;
}
</style>