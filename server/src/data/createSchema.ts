import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers/resolvers';
// @ts-ignore
import schema from './graphql/schema.graphql';

export async function createSchema() {
  const Schema = await makeExecutableSchema({
    typeDefs: schema,
    resolvers: [resolvers],
  });
  return Schema;
}
