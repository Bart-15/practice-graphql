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

export const GameMutation = {
  deleteGame(_parent, { id }) {
    const findGame = db.games.find((game) => game.id === id);
    if (!findGame) {
      throw new Error("Game not found");
    }
    db.games = db.games.filter((game) => game.id !== id);
    return db.games;
  },

  addGame(_parent, args) {
    let game = {
      ...args.game,
      id: Math.floor(Math.random() * 1000).toString(),
    };

    db.games.push(game);

    return game;
  },

  updateGame(_parent, { id, edits }) {
    let game = db.games.find((game) => game.id === id);
    if (!game) {
      throw new Error("Game not found");
    }

    db.games = db.games.map((game) => {
      if (game.id === id) {
        return {
          ...game,
          ...edits,
        };
      }
      return game;
    });

    return db.games.find((game) => game.id === id); // Get the updated game
  },
};
