import { resolveMultiple } from './utils';

export const Starship = {
  pilots: resolveMultiple('pilots', 'swapi', 'getPerson'),
  films: resolveMultiple('films', 'swapi', 'getFilm')
};
