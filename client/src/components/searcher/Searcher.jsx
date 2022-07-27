import { FaSearch } from 'react-icons/fa';
import styles from './searcher.module.css';

export const Searcher = () => {
	return (
		<div className={styles.searcher}>
			<FaSearch className={styles.iconSearch} />
			<input
				type='text'
				placeholder='Search games'
				className={styles.inp}
				spellCheck='false'
			/>
			<div className={styles.searchingKeys}>
				<span>alt</span>
				<span>+</span>
				<span>enter</span>
			</div>
		</div>
	);
};
