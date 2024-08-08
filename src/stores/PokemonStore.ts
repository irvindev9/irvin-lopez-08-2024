import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    selectedPokemons: 0,
    pokemonTeam: [],
  }),
  actions: {
    addPokemon(pokemon: any) {
      this.pokemonTeam = [...this.pokemonTeam, pokemon];
      this.selectedPokemons = this.pokemonTeam.length;
    },
    removePokemon(pokemon: any) {
      this.pokemonTeam = this.pokemonTeam.filter((p) => p !== pokemon);
      this.selectedPokemons = this.pokemonTeam.length;
    },
    isPokemonSelected(pokemon: any) {
      return this.pokemonTeam.some((p: any) => {
        return p.name === pokemon.name;
      });
    }
  },
});