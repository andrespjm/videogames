import { Main } from '../components/main/Main';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Footer } from '../components/footer/Footer';
import { Navigation } from '../components/navbar/Navbar';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getVideogames } from '../redux/actions';
import { useEffect } from 'react';
import { DataProvider } from '../context/DataContext';

export const HomePage = () => {
	const genres = useSelector(state => state.genres);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllGenres());
		dispatch(getVideogames());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<DataProvider>
			<main className='container'>
				<Navigation />
				<Sidebar genres={genres} />
				<Main />
				<Footer />
			</main>
		</DataProvider>
	);
};
