/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

export const DataContext = createContext();

// const VIDEOGAMES_PER_PAGE = 15;

export const DataProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [filteredVideogames, setFilterVideogames] = useState('');
	// 	const [search, setSearch] = useState('');
	// 	const paginatedVideogames = () => {
	const videogames = useSelector(state => state.videogames);
	const allVideogames = () => {
		if (filteredVideogames) {
			const test = videogames.filter(game =>
				game.genres.find(genre => genre.name === filteredVideogames)
			);

			return test;
		}
		return videogames;
	};

	// useEffect(() => {
	// 	filteredVideogames();
	// }, []);

	// 		if (!search)
	// 			return allVideogames.slice(
	// 				currentPage,
	// 				currentPage + VIDEOGAMES_PER_PAGE
	// 			);
	// 		const filtered = allVideogames.filter(game => {
	// 			const name = game.name.toLowerCase();
	// 			return name.includes(search.toLowerCase());
	// 		});
	// 		if (!filtered.length) {
	// 			const error = ['No se encontraron coincidencias'];
	// 			return error;
	// 		}
	// 		return filtered.slice(currentPage, currentPage + VIDEOGAMES_PER_PAGE);
	// };
	const data = {
		allVideogames,
		currentPage,
		setCurrentPage,
		setFilterVideogames,
		// search,
		// setSearch,
		// paginatedVideogames,
		// VIDEOGAMES_PER_PAGE,
	};
	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
