require("dotenv").config();
const fetch = require("cross-fetch");
const { API_KEY } = process.env;

const getVideogames = async () => {
  const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const videogames = await response.json();
  return videogames;
};

module.exports = {
  getVideogames,
};
