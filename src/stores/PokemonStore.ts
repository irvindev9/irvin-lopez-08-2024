import { defineStore } from 'pinia';
import { Pokemon } from '../models/Pokemon'; 

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    selectedPokemons: 0,
    pokemonTeam: [] as Pokemon[],
  }),
  actions: {
    addPokemon(pokemon: Pokemon) {
      if (this.pokemonTeam.length >= 6) {
        return;
      }
      this.pokemonTeam = [...this.pokemonTeam, {
        ...pokemon,
        id: Number(pokemon.url.split("/")[6]),
      }];
      this.selectedPokemons = this.pokemonTeam.length;
    },
    removePokemon(pokemon: Pokemon) {
      console.log({pokemon});
      this.pokemonTeam = this.pokemonTeam.filter((p) => p.name !== pokemon.name);
      this.selectedPokemons = this.pokemonTeam.length;
    },
    isPokemonSelected(pokemon: Pokemon) {
      return this.pokemonTeam.some((p: Pokemon) => {
        return p.name === pokemon.name;
      });
    }
  },
});