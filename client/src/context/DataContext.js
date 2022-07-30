import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

export const DataContext = createContext();

const VIDEOGAMES_PER_PAGE = 15;

export const DataProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [search, setSearch] = useState('');
	const allVideogames = useSelector(state => state.videogames);
	const paginatedVideogames = () => {
		if (!search)
			return allVideogames.slice(
				currentPage,
				currentPage + VIDEOGAMES_PER_PAGE
			);
		const filtered = allVideogames.filter(game => {
			const name = game.name.toLowerCase();
			return name.includes(search.toLowerCase());
		});
		if (!filtered.length) {
			const error = ['No se encontraron coincidencias'];
			return error;
		}
		return filtered.slice(currentPage, currentPage + VIDEOGAMES_PER_PAGE);
	};
	const data = {
		allVideogames,
		currentPage,
		setCurrentPage,
		search,
		setSearch,
		paginatedVideogames,
		VIDEOGAMES_PER_PAGE,
	};
	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
