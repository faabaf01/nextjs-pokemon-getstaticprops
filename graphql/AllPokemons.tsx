import { gql } from "graphql-request";

export const GET_ALL_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
      }
    }
  }
`;

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export interface PokemonQuery {
  pokemons: {
    count: number;
    results: [
      {
        name: Pokemon[];
      }
    ];
  };
}
