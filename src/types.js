import { gql } from 'apollo-server';

export const typeDefs = gql `
scalar Date

type Person {
  id: ID
  name: String
  gender: String
  homeworld: Planet
  films: [Film]
  species: [Specie]
  starships: [Starship]
  vehicles: [Vehicle]
  created: Date
  edited: Date
}

type Starship {
  id: ID
  name: String
  manufacturer: String
  pilots: [Person]
  films: [Film]
  created: Date
  edited: Date
}

type Planet {
  id: ID
  name: String
  residents: [Person]
  films: [Film]
  created: Date
  edited: Date
}

type Vehicle {
  id: ID
  name: String
  model: String
  crew: String
  pilots: [Person]
  films: [Film]
  created: Date
  edited: Date
}

type Specie {
  id: ID
  name: String
  language: String
  homeworld: Planet
  people: [Person]
  films: [Film]
  created: Date
  edited: Date
}

type Film {
  id: ID
  title: String
  episode: String
  director: String
  released: Date
  characters: [Person]
  planets: [Planet]
  starships: [Starship]
  vehicles: [Vehicle]
  species: [Specie]
  created: Date
  edited: Date
}

type Query {
  people: [Person]
  person(id: ID!): Person
  starships: [Starship]
  starship(id: ID!): Starship
  planets: [Planet]
  planet(id: ID!): Planet
  films: [Film]
  film(id: ID!): Film
  species: [Specie]
  specie(id: ID!): Specie
  vehicle: [Vehicle]
  vehicles(id: ID!): Vehicle
}
`;
