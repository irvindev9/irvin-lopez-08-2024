export type Pokemon = {
  name: string;
  url: string;
}

export type Pokemons = {
  [key: number]: Pokemon;
}