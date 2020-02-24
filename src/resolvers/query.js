export const Query = {
  people: (_source, _args, { dataSources }) => dataSources.swapi.getPeople(),
  person: (_source, { id }, { dataSources }) => dataSources.swapi.getPerson(id),
  starships: (_source, _args, { dataSources }) => dataSources.swapi.getStarships(),
  starship: (_source, { id }, { dataSources }) => dataSources.swapi.getStarship(id),
  planets: (_source, _args, { dataSources }) => dataSources.swapi.getPlanets(),
  planet: (_source, { id }, { dataSources }) => dataSources.swapi.getPlanet(id),
  films: (_source, _args, { dataSources }) => dataSources.swapi.getFilms(),
  film: (_source, { id }, { dataSources }) => dataSources.swapi.getFilm(id),
  species: (_source, _args, { dataSources }) => dataSources.swapi.getSpecies(),
  specie: (_source, { id }, { dataSources }) => dataSources.swapi.getSpecie(id),
  vehicles: (_source, _args, { dataSources }) => dataSources.swapi.getVehicles(),
  vehicle: (_source, { id }, { dataSources }) => dataSources.swapi.getVehicle(id)
};
