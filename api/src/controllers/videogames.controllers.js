require("dotenv").config();
const fetch = require("cross-fetch");
const { API_KEY } = process.env;
const regex = /^[0-9]+$/;

const getVideogames = async (name, page, size) => {
  // const section = +page * +size;
  // const offset = section + +size;
  const section = 0;

  const response = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=${
      +page + 1
    }&search=${encodeURI(name)}`
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const videogames = await response.json();
  const pagination = videogames.results.slice(section, size);

  if (!pagination.length)
    throw new Error("No se ha encontrado vidojuegos con ese nombre");
  return pagination;
};

const getVideogameById = async (id) => {
  if (!regex.test(id)) throw new Error("Ingrese un id válido");
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${API_KEY}&`
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const videogame = await response.json();

  if (!videogame) throw new Error("El juego no ha sido encontrado");

  return videogame;
};

module.exports = {
  getVideogames,
  getVideogameById,
};
