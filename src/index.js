import { config } from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { SWAPI } from './datasources/swapi';
import { resolvers } from './resolvers';
import { typeDefs } from './types';

config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    swapi: new SWAPI()
  }),
  tracing: process.env.NODE_ENV !== 'production'
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${ url }`);
});
