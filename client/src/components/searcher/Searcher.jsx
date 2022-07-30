import { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { DataContext } from '../../context/DataContext';
import styles from './searcher.module.css';

export const Searcher = () => {
	const { search, setSearch, setCurrentPage } = useContext(DataContext);
	const onSearchChange = e => {
		setCurrentPage(0);
		setSearch(e.target.value);
	};
	return (
		<div className={styles.searcher}>
			<FaSearch className={styles.iconSearch} />
			<input
				type='text'
				placeholder='Search games'
				className={styles.inp}
				spellCheck='false'
				value={search}
				onChange={onSearchChange}
			/>
			<div className={styles.searchingKeys}>
				<span>alt</span>
				<span>+</span>
				<span>enter</span>
			</div>
		</div>
	);
};
