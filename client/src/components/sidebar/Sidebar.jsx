/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useParams } from 'react-router-dom';
import styles from './sidebar.module.css';

export const Aside = () => {
	const pathname_ = window.location.pathname;
	const section = pathname_.slice(1);
	return (
		<div className={styles.sidebar}>
			<h1>{section}</h1>
			<nav className={styles.sideMenu}>
				<h2 className={styles.subTitles}>Genres</h2>
				<a href='#'>Genre 1</a>
				<a href='#'>Genre 2</a>
				<a href='#'>Genre 3</a>
				<a href='#'>Genre 4</a>
				<a href='#'>Genre 5</a>
			</nav>
		</div>
	);
};
