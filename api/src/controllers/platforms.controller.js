require('dotenv').config();
const { API_KEY } = process.env;
const fetch = require('cross-fetch');

const getPlatforms = async () => {
	const response = await fetch(
		`https://api.rawg.io/api/platforms?key=${API_KEY}`
	);
	if (!response.ok) throw new Error(`Has occured an error: ${response.status}`);
	const platforms = await response.json();
	return platforms.results;
};

module.exports = {
	getPlatforms,
};
