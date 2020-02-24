import { RESTDataSource } from 'apollo-datasource-rest';

export const resolveID = (url) => url.split('/').filter(String).pop();

export const withID = (data) => ({ ...data, id: resolveID(data.url) });

export const getMultipleByURLs = (urls, getByID) => Promise.all(
  urls
    .map(resolveID)
    .map((id) => getByID(id))
);

export class SWAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = process.env.SWAPI_HOST;
  }

  async getPeople() {
    const { results } = await this.get('people');
    return results.map(withID);
  }

  async getPerson(id) {
    return withID(await this.get(`people/${ id }`));
  }

  async getStarships() {
    const { results } = await this.get('starships');
    return results.map(withID);
  }

  async getStarship(id) {
    return withID(await this.get(`starships/${ id }`));
  }

  async getPlanets() {
    const { results } = await this.get('planets');
    return results.map(withID);
  }

  async getPlanet(id) {
    return withID(await this.get(`planets/${ id }`));
  }

  async getFilms() {
    const { results } = await this.get('films');
    return results.map(withID);
  }

  async getFilm(id) {
    return withID(await this.get(`films/${ id }`));
  }

  async getVehicles() {
    const { results } = await this.get('vehicles');
    return results.map(withID);
  }

  async getVehicle(id) {
    return withID(await this.get(`vehicles/${ id }`));
  }

  async getSpecies() {
    const { results } = await this.get('species');
    return results.map(withID);
  }

  async getSpecie(id) {
    return withID(await this.get(`species/${ id }`));
  }
}
