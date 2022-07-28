import styles from './card.module.css';
// import { FaStar, FaLaptop, FaXbox, FaPlaystation } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
// import { SiNintendo } from 'react-icons/si';

export const Card = props => {
	return (
		<div className={styles.card}>
			<div className={styles.ranking}>
				<span style={{ color: 'yellow', marginRight: '10px' }}>
					<FaStar />
				</span>
				{props.rating}
			</div>
			<div
				className={styles.media}
				style={{ backgroundImage: `url(${props.image})` }}
			></div>
			<div className={styles.description}>
				<h2>{props.name}</h2>
				<div className={styles.data}>
					<b>Release date:</b>
					<span>{props.released}</span>
				</div>
				<div className={styles.data}>
					<div className={styles.genre}>
						<div>Genres:</div>
						<div className={styles.tags}>
							{props.genres.map(genre => (
								<div key={genre.id}>{genre.name}</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
