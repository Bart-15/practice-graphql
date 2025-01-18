import db from "../db/_db";
import { game } from "./games.resolver";

export function reviews() {
  return db.reviews;
}

export function review(_parent, { id }) {
  return db.reviews.find((review) => review.id === id);
}

export const Review = {
  author({ id }) {
    return db.authors.find((author) => author.id === id);
  },
  game({ id }) {
    return db.games.find((game) => game.id === id);
  },
};
