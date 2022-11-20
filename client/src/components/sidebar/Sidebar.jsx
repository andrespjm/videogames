/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './sidebar.module.css';
import spinner from '../../assets/img/Spin-200px.gif';
import { useState } from 'react';
import { getVideogames } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export const Sidebar = ({
	genres,
	setGenreName,
	setCurrentPage,
	setInputValue,
}) => {
	const [linkName, setLinkName] = useState('All genres');
	const pathname_ = window.location.pathname;
	const section = pathname_.slice(1);
	const dispatch = useDispatch();

	const handleStatus = e => {
		e.preventDefault();
		const { text } = e.target;
		setLinkName(text);
		setCurrentPage(0);
		setInputValue('');
		if (text === 'All genres') {
			return setGenreName('');
		}
		dispatch(getVideogames());
		return setGenreName(text);
	};

	return (
		<aside className={styles.sidebar}>
			<h1>{section}</h1>
			<nav className={styles.sideMenu}>
				<h2 className={styles.subTitles}>Genres</h2>
				<a
					href='#'
					className={
						linkName === 'All genres'
							? styles.actived + ' ' + styles.links
							: styles.links
					}
					onClick={handleStatus}
				>
					All genres
				</a>
				{!genres.length ? (
					<div style={{ width: '50px', height: '40px', margin: '0 auto' }}>
						<img src={spinner} alt='' style={{ width: '100%' }} />
					</div>
				) : (
					genres.map((genre, id) => (
						<a
							href='#'
							className={
								linkName === genre.name
									? styles.actived + ' ' + styles.links
									: styles.links
							}
							key={id}
							onClick={handleStatus}
						>
							{genre.name}
						</a>
					))
				)}
			</nav>
		</aside>
	);
};
