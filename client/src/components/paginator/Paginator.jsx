import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import styles from './paginator.module.css';

export const Paginator = () => {
	const { currentPage, setCurrentPage, VIDEOGAMES_PER_PAGE } =
		useContext(DataContext);
	const prevPage = () => {
		if (currentPage > 0) setCurrentPage(currentPage - VIDEOGAMES_PER_PAGE);
	};
	const nextPage = () => {
		setCurrentPage(currentPage + VIDEOGAMES_PER_PAGE);
	};
	return (
		<div className={styles.pagination}>
			<button onClick={prevPage}>
				<FaAngleLeft size={18} />
				Previews
			</button>
			<button onClick={nextPage}>
				Next <FaAngleRight size={18} />
			</button>
		</div>
	);
};
