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