require('dotenv').config();
const fetch = require('cross-fetch');
const { API_KEY } = process.env;
const regex = /^[0-9]+$/;
const { Videogame, Genres, Op } = require('../db');

const searchVideogamesDB = async name => {
	const getVideogames = await Videogame.findAll({
		where: {
			name: {
				[Op.like]: `%${name}%`,
			},
		},
		include: [
			{
				model: Genres,
				as: 'genres',
			},
		],
	});
	return getVideogames;
};

const getVideogames = async (name, page, size) => {
	// const section = +page * +size;
	// const offset = section + +size;
	const section = 0;
	let totalResults = [];

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
	const videogamesDB = await searchVideogamesDB(name);
	totalResults = [...videogamesDB, ...videogames.results];
	// const pagination = videogames.results.slice(section, size);
	const pagination = totalResults.slice(section, size);

	if (!pagination.length)
		throw new Error('No se ha encontrado vidojuegos con ese nombre');
	return pagination;
};

const getVideogameById = async id => {
	if (!regex.test(id)) throw new Error('Ingrese un id válido');
	const response = await fetch(
		`https://api.rawg.io/api/games/${id}?key=${API_KEY}&`
	);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	const videogame = await response.json();

	if (!videogame) throw new Error('El juego no ha sido encontrado');

	return videogame;
};

const createNewVideogame = async req => {
	const { name, description, rating, platforms, genres } = req.body;
	if (!name || !description || !platforms)
		throw new Error('Faltan campos requeridos');
	// const newVideogame = await Videogame.create(
	//   {
	//     name,
	//     description,
	//     rating,
	//     platforms,
	//     genres: [...genres],
	//   },
	//   { include: "genres" }
	// );
	const genre1 = await Genres.bulkCreate(genres);
	const newVideogame = await Videogame.create({
		name,
		description,
		rating,
		platforms,
	});
	newVideogame.setGenres(genre1);
	// newVideogame.setGenres(genre1);
	return newVideogame;
};

module.exports = {
	getVideogames,
	getVideogameById,
	createNewVideogame,
};
