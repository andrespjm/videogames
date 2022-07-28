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

const getVideogames = async totalLimit => {
	// const section = +page * +size;
	// const offset = section + +size;
	const section = 0;
	let totalResults = [];

	// const response = await fetch(
	// 	`https://api.rawg.io/api/games?key=${API_KEY}&page=${
	// 		+page + 1
	// 	}&search=${encodeURI(name)}`
	// );
	const response = await fetch(
		`https://api.rawg.io/api/games?key=${API_KEY}&page_size=${totalLimit}`
	);
	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}
	const videogames = await response.json();
	const videogamesDB = await Videogame.findAll({
		include: [
			{
				model: Genres,
				as: 'genres',
			},
		],
	});
	if (!videogamesDB.length) {
		totalResults = videogames.results;
	} else {
		totalResults = [...videogamesDB, ...videogames.results];
	}

	if (!videogames.results.length)
		throw new Error('Ha ocurrido un erro inesperado con la api');
	return totalResults;
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
