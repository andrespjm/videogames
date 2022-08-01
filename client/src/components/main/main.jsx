import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import { Card } from '../card/Card';
import { Loader } from '../loader/Loader';
import { Paginator } from '../paginator/Paginator';
import styles from './main.module.css';

const VIDEOGAMES_PER_PAGE = 15;
// TODO:Es mejor mejor dejar de trabajar con context
export const Main = () => {
	const { allVideogames, currentPage, setCurrentPage } =
		useContext(DataContext);
	const paginatedVideogames = allVideogames().slice(
		currentPage,
		currentPage + VIDEOGAMES_PER_PAGE
	);
	const prevPage = () => {
		if (currentPage > 0) setCurrentPage(currentPage - VIDEOGAMES_PER_PAGE);
	};
	const nextPage = () => {
		if (currentPage + VIDEOGAMES_PER_PAGE < allVideogames().length)
			setCurrentPage(currentPage + VIDEOGAMES_PER_PAGE);
	};

	return (
		<article className='main'>
			<h1 className={styles.sectioName}>Trending now</h1>
			{!paginatedVideogames.length && <Loader />}
			<section className={styles.content}>
				{paginatedVideogames.map(videogame =>
					!videogame.name ? (
						<p style={{ color: 'snow' }} key='error'>
							{videogame}
						</p>
					) : (
						<Link to='/' key={videogame.slug}>
							<Card
								name={videogame.name}
								image={videogame.background_image}
								released={videogame.released}
								rating={videogame.rating}
								genres={videogame.genres}
								platforms={videogame.platforms}
							/>
						</Link>
					)
				)}
			</section>
			<Paginator prevPage={prevPage} nextPage={nextPage} />
		</article>
	);
};
