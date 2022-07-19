require("dotenv").config();
const { API_KEY } = process.env;
const fetch = require("cross-fetch");
const { Genres } = require("../db.js");

const getGenres = async () => {
  const response = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const genres = await response.json();
  genres.results.forEach(
    async (genre) =>
      await Genres.create({
        id: genre.id,
        name: genre.name,
      })
  );
};

module.exports = {
  getGenres,
};
