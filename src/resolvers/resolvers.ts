import { Author, author, authors } from "./authors.resolver";
import { game, games, Game, GameMutation } from "./games.resolver";
import { reviews, review, Review } from "./reviews.resolver";

export const resolvers = {
  Query: {
    games,
    game,
    authors,
    author,
    reviews,
    review,
  },

  Game: Game,
  Review: Review,
  Author: Author,

  Mutation: {
    ...GameMutation,
  },
};
