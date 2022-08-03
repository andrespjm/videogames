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
const searchAllVideogames = async name => {
	const res = await fetch(
		`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
	);
	if (!res.ok) throw new Error(`Has occured an error: ${res.status}`);
	const videogames = await res.json();
	const query = await searchVideogamesDB(name);
	// if (!query.length) {
	// 	games = videogames.results;
	// } else {
	// 	games = [...query, ...videogames.results];
	// }
	return [...query, ...videogames.results];
};
const getVideogames = async name => {
	if (name) {
		return searchAllVideogames(name);
	}
	let promisesLoop = [];
	const page = 5;
	for (let i = 0; i < page; i++) {
		const res = await fetch(
			`https://api.rawg.io/api/games?key=${API_KEY}&page=${i + 1}`
		);
		promisesLoop[i] = await res.json();
	}
	const promises_ = await Promise.all(promisesLoop);
	const videogames = promises_.flatMap(value => [...value.results]);

	const videogamesDB = await Videogame.findAll({
		include: [
			{
				model: Genres,
				as: 'genres',
			},
		],
	});
	if (!videogamesDB.length) {
		totalResults = videogames;
	} else {
		totalResults = [...videogamesDB, ...videogames];
	}

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
