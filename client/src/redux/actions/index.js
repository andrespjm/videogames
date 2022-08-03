export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_ALL_PLATFORMS = 'GET_ALL_PLATFORMS';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';

const showError = status => {
	const message = `Has occurred an error: ${status}`;
	throw new Error(message);
};

export const getAllGenres = () => {
	return async dispatch => {
		const res = await fetch('http://localhost:3001/genres');
		if (!res.ok) showError(res.status);

		const data = await res.json();
		dispatch({
			type: GET_ALL_GENRES,
			payload: data,
		});
	};
};

export const getAllPlatforms = () => {
	return async dispatch => {
		const res = await fetch('http://localhost:3001/platforms');
		if (!res.ok) showError(res.status);

		const data = await res.json();
		dispatch({
			type: GET_ALL_PLATFORMS,
			payload: data,
		});
	};
};

export const getVideogames = name => {
	let query = name || '';
	return async dispatch => {
		const res = await fetch('http://localhost:3001/videogames?name=' + query);
		if (!res.ok) showError(res.status);
		const data = await res.json();
		dispatch({
			type: GET_VIDEOGAMES,
			payload: data,
		});
	};
};

export const createVideogame = async videogame => {
	const res = await fetch('http://localhost:3001/videogames', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(videogame),
	});

	if (!res.ok) showError(res);

	const data = await res.json();
	return data;
};
