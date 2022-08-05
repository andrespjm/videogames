import { Main } from '../components/main/Main';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Footer } from '../components/footer/Footer';
import { Navigation } from '../components/navbar/Navbar';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getVideogames } from '../redux/actions';
import { useEffect, useState } from 'react';
import ModalCreateGame from '../components/modal/ModalCreateGame';

const VIDEOGAMES_PER_PAGE = 15;

export const HomePage = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [genreName, setGenreName] = useState('');
	const [inputValue, setInputValue] = useState('');
	const [sort, setSort] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const genres = useSelector(state => state.genres);
	const allVideogames = useSelector(state => state.videogames);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllGenres());
		dispatch(getVideogames());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function SortArrayName(x, y) {
		return x.name.localeCompare(y.name);
	}

	function SortArrayRating(x, y) {
		return x.rating - y.rating;
	}

	function SortArrayReleased(x, y) {
		return x.released.localeCompare(y.released);
	}

	const filteredVideogames = () => {
		if (genreName) {
			const gamesPerGenre = allVideogames.filter(game =>
				game.genres.find(genre => genre.name === genreName)
			);

			return gamesPerGenre;
		}
		// return paginator(videogames);
		return allVideogames;
	};

	const videogames = () => {
		const videogames = filteredVideogames().slice(
			currentPage,
			currentPage + VIDEOGAMES_PER_PAGE
		);
		if (sort === 'az') {
			return videogames.sort(SortArrayName);
		} else if (sort === 'za') {
			return videogames.sort(SortArrayName).reverse();
		} else if (sort === 'highest') {
			return videogames.sort(SortArrayRating).reverse();
		} else if (sort === 'lowest') {
			return videogames.sort(SortArrayRating);
		} else if (sort === 'actuales') {
			return videogames.sort(SortArrayReleased).reverse();
		} else if (sort === 'antiguas') {
			return videogames.sort(SortArrayReleased);
		} else {
			return videogames;
		}
	};

	const prevPage = () => {
		if (currentPage > 0) setCurrentPage(currentPage - VIDEOGAMES_PER_PAGE);
	};
	const nextPage = () => {
		if (currentPage + VIDEOGAMES_PER_PAGE < filteredVideogames().length)
			setCurrentPage(currentPage + VIDEOGAMES_PER_PAGE);
	};

	return (
		<main className='container'>
			<Navigation
				setCurrentPage={setCurrentPage}
				setGenreName={setGenreName}
				inputValue={inputValue}
				setInputValue={setInputValue}
				setIsOpen={setIsOpen}
			/>
			<Sidebar
				genres={genres}
				setGenreName={setGenreName}
				setCurrentPage={setCurrentPage}
				setInputValue={setInputValue}
			/>

			<Main
				videogames={videogames}
				prevPage={prevPage}
				nextPage={nextPage}
				setSort={setSort}
			/>

			{isOpen && <ModalCreateGame setIsOpen={setIsOpen} genres={genres} />}
			<Footer />
		</main>
	);
};
