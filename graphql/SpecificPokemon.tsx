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
