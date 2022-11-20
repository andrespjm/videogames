import { Link } from 'react-router-dom';
import { encodeB64 } from '../../helpers/helpers';
import { Card } from '../card/Card';
import { Loader } from '../loader/Loader';
import { Paginator } from '../paginator/Paginator';
import styles from './main.module.css';

export const Main = ({ videogames, prevPage, nextPage, setSort }) => {
	const handleChange = e => {
		const { value } = e.target;
		setSort(value);
	};

	return (
		<article className='main'>
			<div className={styles.optionsTop}>
				<h1 className={styles.sectioName}>Trending now</h1>
				<div>
					<select onChange={handleChange}>
						<option value='released' hidden>
							Released
						</option>
						<option value='actuales'>Actuales</option>
						<option value='antiguas'>Antiguas</option>
					</select>
				</div>
				<div className={styles.sort}>
					Sort by:&nbsp;
					<select onChange={handleChange}>
						<option key='name' hidden value='name'>
							Name
						</option>
						<option key='az' value='az'>
							A-Z
						</option>
						<option key='za' value='za'>
							Z-A
						</option>
					</select>
					<select onChange={handleChange}>
						<option key='rating' hidden value='rating'>
							Rating
						</option>
						<option key='highest' value='highest'>
							Highest
						</option>
						<option key='lowest' value='lowest'>
							Lowest
						</option>
					</select>
				</div>
			</div>
			{!videogames().length && <Loader />}
			<section className={styles.content}>
				{videogames().map((videogame, i) =>
					!videogame.name ? (
						<p style={{ color: 'snow' }} key='error'>
							{videogame}
						</p>
					) : (
						<Link to={`/videogame/${encodeB64(videogame.id)}`} key={i}>
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
