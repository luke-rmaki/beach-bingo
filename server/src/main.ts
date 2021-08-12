/* eslint-disable no-console */
// @ts-ignorets-ignore
import { WebSocketServer } from 'ws';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { useServer } from 'graphql-ws/lib/use/ws';

import { dbConnect } from './utils/database';
import { createSchema } from './data/createSchema';
import { resolvers } from './data/resolvers/resolvers';

require(`dotenv`).config();

(async function main(): Promise<void> {
  const app = express();
  dbConnect();

  const schema = await createSchema();

  // routes;
  app.use(
    `/graphql`,
    graphqlHTTP({ schema, graphiql: true, rootValue: resolvers })
  );

  const server = app.listen(process.env.PORT || 4000, () => {
    const wsServer = new WebSocketServer({
      server,
      path: `graphql`,
    });
    console.log(`Server Running`);
    useServer({ schema }, wsServer);
  });
})();
