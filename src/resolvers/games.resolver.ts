import db from "../db/_db";

export function games() {
  return db.games;
}

export function game(_parent, { id }) {
  return db.games.find((game) => game.id === id);
}

export const Game = {
  reviews({ id }) {
    return db.reviews.filter((review) => review.game_id === id);
  },
};
