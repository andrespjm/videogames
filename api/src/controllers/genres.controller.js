require('dotenv').config();
const { API_KEY } = process.env;
const fetch = require('cross-fetch');
const { Genresapi } = require('../db');

const getGenres = async () => {
	let genresDB;
	const response = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}
	const genres = await response.json();
	const genresQuery = await Genresapi.findByPk(genres.results[0]['id']);
	if (!genresQuery) {
		genresDB = await Genresapi.bulkCreate(genres.results);
	} else {
		genresDB = await Genresapi.findAll();
	}

	return genresDB;
};

module.exports = {
	getGenres,
};
