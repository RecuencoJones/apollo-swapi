import { resolveMultiple } from './utils';

export const Film = {
  characters: resolveMultiple('characters', 'swapi', 'getPerson'),
  planets: resolveMultiple('planets', 'swapi', 'getPlanet'),
  starships: resolveMultiple('starships', 'swapi', 'getStarship'),
  vehicles: resolveMultiple('vehicles', 'swapi', 'getVehicle'),
  species: resolveMultiple('species', 'swapi', 'getSpecie')
};
