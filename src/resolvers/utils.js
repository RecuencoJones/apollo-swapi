import { resolveID, getMultipleByURLs } from '../datasources/swapi';

export const resolveSingle =
  (prop, dataSource, method) =>
  (data, _, { dataSources }) =>
    dataSources[dataSource][method](resolveID(data[prop]));


export const resolveMultiple =
  (prop, dataSource, method) =>
  (data, _, { dataSources }) =>
    getMultipleByURLs(data[prop], (id) => dataSources[dataSource][method](id));
