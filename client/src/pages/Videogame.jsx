import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../components/loader/Loader';
import { getVideogameDetail } from '../redux/actions';
import styles from './videogame.module.css';
import { FaStar } from 'react-icons/fa';
import bg from '../assets/img/background-optional.jpg';

export const Videogame = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const videogame = useSelector(state => state.videogameDatail);

	useEffect(() => {
		dispatch(getVideogameDetail(id));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<main className={styles.container}>
				{Object.keys(videogame).length === 0 ? (
					<div className={styles.loaderContainer}>
						<Loader />
					</div>
				) : (
					<>
						<div
							className={styles.section}
							style={
								videogame.background_image
									? { backgroundImage: `url(${videogame.background_image})` }
									: { backgroundImage: `url(${bg})` }
							}
						></div>
						<div className={styles.section}>
							<Link to='/home' className={styles.closeButton}>
								x
							</Link>
							<h1 className={styles.titleDetail}>{videogame.name}</h1>
							<div
								className={styles.description}
								dangerouslySetInnerHTML={{ __html: videogame.description }}
							></div>
							<div className={styles.genres}>
								<h3>Rating: </h3>
								<span>
									<span style={{ color: 'yellow', marginRight: '10px' }}>
										<FaStar />
									</span>
									{videogame.rating}
								</span>
							</div>
							<div className={styles.genres}>
								<h3>Released: </h3>
								<span>{videogame.released}</span>
							</div>
							<div className={styles.genres}>
								<h3>Genres: </h3>
								{!videogame.genres
									? 'Loading...'
									: videogame.genres.map((genre, i) => (
											<span key={i}>{genre.name}</span>
									  ))}
							</div>
							<div className={styles.genres}>
								<h3>Platforms: </h3>
								{videogame.platforms.map((platform, i) => (
									<span key={i}>{platform.platform.name}</span>
								))}
							</div>
						</div>
					</>
				)}
			</main>
		</>
	);
};
