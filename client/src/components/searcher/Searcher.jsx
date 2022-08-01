import { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { DataContext } from '../../context/DataContext';
import { getVideogames } from '../../redux/actions';

import styles from './searcher.module.css';

export const Searcher = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');
	const { setCurrentPage } = useContext(DataContext);
	const handleSubmit = e => {
		e.preventDefault();
		if (inputValue.length > 0) {
			setCurrentPage(0);
			dispatch(getVideogames(inputValue));
		}
	};

	const onSearchChange = e => {
		setInputValue(e.target.value);
	};
	return (
		<form onSubmit={handleSubmit} className={styles.searcher}>
			<FaSearch className={styles.iconSearch} />
			<input
				type='text'
				placeholder='Search games'
				className={styles.inp}
				spellCheck='false'
				value={inputValue}
				onChange={onSearchChange}
			/>
			<div className={styles.searchingKeys}>
				<span>alt</span>
				<span>+</span>
				<span>enter</span>
			</div>
		</form>
	);
};
