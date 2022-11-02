import { gql } from "graphql-request";

export const GET_DETAIL_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export interface IPoke {
  name: string;
  id: number;
}

export interface PokemonType {
  type: { name: string };
}

export interface PokemonMove {
  move: { name: string };
}

export interface PokemonDetailQuery {
  pokemon: {
    id: number;
    name: string;
    types: PokemonType[];
    moves: PokemonMove[];
  };
}
