import styles from './card.module.css';
import { FaStar, FaGamepad } from 'react-icons/fa';
import OptionalImage from '../../assets/img/background-optional.jpg';

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
				style={
					props.image
						? { backgroundImage: `url(${props.image})` }
						: { backgroundImage: `url(${OptionalImage})` }
				}
			></div>
			<div className={styles.description}>
				<h2>
					<FaGamepad /> {props.name}
				</h2>
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
