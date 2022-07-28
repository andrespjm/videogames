/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useParams } from 'react-router-dom';
import styles from './sidebar.module.css';
import spinner from '../../assets/img/Spin-200px.gif';

export const Sidebar = ({ genres }) => {
	const pathname_ = window.location.pathname;
	const section = pathname_.slice(1);
	const handleFilter = (e, name) => {
		e.preventDefault();
		console.log(e.target.text);
		// TODO: Terminar el filtrado por genero
	};

	return (
		<aside className={styles.sidebar}>
			<h1>{section}</h1>
			<nav className={styles.sideMenu}>
				<h2 className={styles.subTitles}>Genres</h2>
				{!genres.length ? (
					<div style={{ width: '50px', height: '40px', margin: '0 auto' }}>
						<img src={spinner} alt='' style={{ width: '100%' }} />
					</div>
				) : (
					genres.map((genre, id) => (
						<a
							href='#'
							onClick={handleFilter}
							className={styles.links}
							key={id}
						>
							{genre.name}
						</a>
					))
				)}
			</nav>
		</aside>
	);
};
