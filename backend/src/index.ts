// Dependencies
import { ApolloServer, makeExecutableSchema } from 'apollo-server'

// Models
import models from './models'

// Type Definitions
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/types';

// Configuration
import { $server } from '../config';

// Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// Apollo Server
const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
})

const alter = true
const force = false

models.sequelize.sync({ alter, force }).then(async () => {
  // eslint-disable-next-line no-console
  const { url } = await apolloServer.listen($server.port);
  console.log(`Running on ${url}`);
})