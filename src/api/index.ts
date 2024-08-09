import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/' || import.meta.env.VITE_API_URL;

const limit = 151 || import.meta.env.VITE_LIMIT;
const pokemonsPerPage = 25 || import.meta.env.VITE_POKEMONS_PER_PAGE;

export const getPokemonList = async (page: number) => {
  const totalPages = Math.ceil(limit / pokemonsPerPage);

  if (page > totalPages) {
    return [];
  }

  const offset = (page - 1) * pokemonsPerPage;

  const newPokemonsPerPage = offset + pokemonsPerPage > limit ? limit - offset : pokemonsPerPage;

  const { data } = await axios.get(`${url}pokemon?offset=${offset}&limit=${newPokemonsPerPage}`);

  return data.results;
}

export const getPokemonInfo = async (pokemonNumber: number) => {
  const { data } = await axios.get(`${url}pokemon/${pokemonNumber}`);

  return data;
}

export const getEvolutionChain = async (pokemonNumber:number) => {

  let { data } = await axios.get(`${url}pokemon-species/${pokemonNumber}`);

  const evolutionChainUrl = data.evolution_chain.url;

  const response = await axios.get(evolutionChainUrl);

  data = response.data;

  const evolutionChain = [];

  let currentPokemon = data.chain;

  while (currentPokemon.evolves_to.length > 0) {
    evolutionChain.push({
      name: currentPokemon.species.name,
      url: currentPokemon.species.url,
      id: Number(currentPokemon.species.url.split("/")[6]),
    });

    currentPokemon = currentPokemon.evolves_to[0];
  }

  evolutionChain.push({
    name: currentPokemon.species.name,
    url: currentPokemon.species.url,
    id: Number(currentPokemon.species.url.split("/")[6]),
  });

  return evolutionChain;
}