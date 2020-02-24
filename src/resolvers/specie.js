import { resolveSingle, resolveMultiple } from './utils';

export const Specie = {
  homeworld: resolveSingle('homeworld', 'swapi', 'getPlanet'),
  people: resolveMultiple('people', 'swapi', 'getPerson'),
  films: resolveMultiple('films', 'swapi', 'getFilm')
};
