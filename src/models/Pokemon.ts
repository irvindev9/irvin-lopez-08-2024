export type Pokemon = {
  name: string;
  url: string;
  id: number;
}

export type stat = {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  }
}

export type type = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export type cries = {
  latest: string;
  legacy: string;
}

export type PokemonInfo = {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: type[];
  stats: stat[];
  cries: cries;
}

export type EvolutionChain = {
  name: string;
  url: string;
  id: number;
}