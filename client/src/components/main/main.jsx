import { Link } from 'react-router-dom';
import { Card } from '../card/Card';
import { Loader } from '../loader/Loader';
import { Paginator } from '../paginator/Paginator';
import styles from './main.module.css';

export const Main = ({ videogames, prevPage, nextPage }) => {
	return (
		<article className='main'>
			<h1 className={styles.sectioName}>Trending now</h1>
			{!videogames().length && <Loader />}
			<section className={styles.content}>
				{videogames().map(videogame =>
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
