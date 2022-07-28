import { GET_ALL_GENRES, GET_VIDEOGAMES } from '../actions';

const initialState = {
	genres: [],
	videogames: [],
	videogame: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_GENRES:
			return {
				...state,
				genres: action.payload,
			};
		case GET_VIDEOGAMES:
			return {
				...state,
				videogames: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
