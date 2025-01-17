import { authors } from "./authors.resolver";
import { games } from "./games.resolver";
import { reviews } from "./reviews.resolver";

export const resolvers = {
  Query: {
    games,
    authors,
    reviews,
  },
};
