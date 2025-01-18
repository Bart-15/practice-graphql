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
    const { title, platform } = args.game;
    let game = {
      title,
      platform,
      id: Math.floor(Math.random() * 1000).toString(),
    };

    console.log(game);
    db.games.push(game);

    return game;
  },
};
