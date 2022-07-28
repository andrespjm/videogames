import { Link } from 'react-router-dom';
import { Card } from '../card/Card';
import { Loader } from '../loader/Loader';
import styles from './main.module.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

export const Main = ({ videogames }) => {
	return (
		<article className='main'>
			<h1 className={styles.sectioName}>Trending now</h1>
			{!videogames.length && <Loader />}
			<section className={styles.content}>
				{videogames.map(videogame => (
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
				))}
			</section>
			<div className={styles.pagination}>
				<button>
					<FaAngleLeft size={18} />
					Previews
				</button>
				<button>
					Next <FaAngleRight size={18} />
				</button>
			</div>
		</article>
	);
};
