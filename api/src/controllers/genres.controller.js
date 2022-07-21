require("dotenv").config();
const { API_KEY } = process.env;
const fetch = require("cross-fetch");
const { Genres } = require("../db");

const getGenres = async () => {
  const response = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const genres = await response.json();
  const genresDB = await Genres.bulkCreate(genres.results);
  return genresDB;
};

module.exports = {
  getGenres,
};
