import { defineStore } from 'pinia';
import { Pokemon } from '../models/Pokemon'; 
import Cookie from 'js-cookie';

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
      Cookie.set('pokemonTeam', JSON.stringify(this.pokemonTeam));
    },
    removePokemon(pokemon: Pokemon) {
      this.pokemonTeam = this.pokemonTeam.filter((p) => p.name !== pokemon.name);
      this.selectedPokemons = this.pokemonTeam.length;
      Cookie.set('pokemonTeam', JSON.stringify(this.pokemonTeam));
    },
    isPokemonSelected(pokemon: Pokemon) {
      return this.pokemonTeam.some((p: Pokemon) => {
        return p.name === pokemon.name;
      });
    },
    initializeApp() {
      const pokemonTeam = Cookie.get('pokemonTeam');
      if (pokemonTeam) {
        this.pokemonTeam = JSON.parse(pokemonTeam);
        this.selectedPokemons = this.pokemonTeam.length;
      }
    }
  },
});