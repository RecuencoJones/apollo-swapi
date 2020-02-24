import { resolveMultiple } from "./utils";

export const Planet = {
  residents: resolveMultiple('residents', 'swapi', 'getPerson'),
  films: resolveMultiple('films', 'swapi', 'getFilm')
};
