import { resolveSingle, resolveMultiple } from './utils';

export const Person = {
  homeworld: resolveSingle('homeworld', 'swapi', 'getPlanet'),
  starships: resolveMultiple('starships', 'swapi', 'getStarship'),
  vehicles: resolveMultiple('vehicles', 'swapi', 'getVehicle'),
  films: resolveMultiple('films', 'swapi', 'getFilm')
};
