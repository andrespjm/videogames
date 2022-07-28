import { Main } from '../components/main/Main';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Footer } from '../components/footer/Footer';
import { Navigation } from '../components/navbar/Navbar';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getVideogames } from '../redux/actions';
import { useEffect } from 'react';

export const HomePage = () => {
	const genres = useSelector(state => state.genres);
	const videogames = useSelector(state => state.videogames);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllGenres());
		dispatch(getVideogames());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<main className='container'>
			<Navigation />
			<Sidebar genres={genres} />
			<Main videogames={videogames} />
			<Footer />
		</main>
	);
};
