import { GET_ALL_GENRES, GET_VIDEOGAMES, GET_ALL_PLATFORMS } from '../actions';

const initialState = {
	genres: [],
	platforms: [],
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
		case GET_ALL_PLATFORMS:
			return {
				...state,
				platforms: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
