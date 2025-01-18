import db from "../db/_db";

export function authors() {
  return db.authors;
}

export function author(_parent, { id }) {
  return db.authors.find((author) => author.id === id);
}

export const Author = {
  reviews({ id }) {
    return db.authors.filter((author) => author.id === id);
  },
};
