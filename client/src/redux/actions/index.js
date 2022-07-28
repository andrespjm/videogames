export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';

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

export const getVideogames = () => {
	return async dispatch => {
		const res = await fetch('http://localhost:3001/videogames');
		if (!res.ok) showError(res.status);
		const data = await res.json();
		dispatch({
			type: GET_VIDEOGAMES,
			payload: data,
		});
	};
};
