import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/schema";
import { resolvers } from "./resolvers/resolvers";

const port = 4000;
// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });

  console.log("Server is listening on port", port);
}

startServer();
