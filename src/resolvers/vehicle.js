import { resolveMultiple } from './utils';

export const Vehicle = {
  pilots: resolveMultiple('pilots', 'swapi', 'getPerson'),
  films: resolveMultiple('films', 'swapi', 'getFilm')
};
