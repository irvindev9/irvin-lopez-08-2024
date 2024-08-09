<script setup lang="ts">
import Type from '../Partials/Type.vue';

defineProps<{
  pokemonInfo: {
    types: {
      type: {
        name: string;
      };
    }[];
    height: number;
    weight: number;
    cries: {
      latest: string;
    };
  };
}>();
</script>

<template>
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
</template>