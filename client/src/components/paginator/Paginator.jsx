import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import styles from './paginator.module.css';

export const Paginator = ({ prevPage, nextPage }) => {
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
