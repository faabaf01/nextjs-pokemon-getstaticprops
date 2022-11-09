import { gql } from "graphql-request";

export const GET_ALL_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        image
      }
    }
  }
`;

export interface AllPokemonsQuery {
  pokemons: {
    pokemons: {
      results: [
        {
          name: string;
          image: string;
        }
      ];
    };
  };
}
