import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import { Card } from '../card/Card';
import { Loader } from '../loader/Loader';
import { Paginator } from '../paginator/Paginator';
import styles from './main.module.css';

export const Main = () => {
	const { paginatedVideogames } = useContext(DataContext);
	return (
		<article className='main'>
			<h1 className={styles.sectioName}>Trending now</h1>
			{!paginatedVideogames().length && <Loader />}
			<section className={styles.content}>
				{paginatedVideogames().map(videogame =>
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
			<Paginator />
		</article>
	);
};
