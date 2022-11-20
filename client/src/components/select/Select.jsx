import { useEffect } from 'react';
import { useRef, useState } from 'react';
import styles from './select.module.css';

export const Select = ({
	optionsSelect,
	title,
	setOptionGenres,
	setOptionPlatforms,
	errorSelect,
	sendData,
}) => {
	const [options, setOptions] = useState([]);
	const selectRef = useRef();
	const titleLowerCase = title.toLowerCase();

	useEffect(() => {
		if (sendData) {
			setOptions([]);
			selectRef.current.value = title;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sendData]);

	const handleChange = e => {
		const { value } = e.target;

		setOptions(options => {
			if (options.length < 5) {
				return [...new Set([...options, value])];
			}
			return options;
		});
		if (title === 'Genres')
			setOptionGenres(options => [...options, { name: value }]);
		if (title === 'Platforms')
			setOptionPlatforms(options => [
				...options,
				{ platform: { name: value } },
			]);
	};

	const handleClear = e => {
		e.preventDefault();
		setOptions([]);
		if (title === 'Genres') setOptionGenres([]);
		if (title === 'Platforms') setOptionPlatforms([]);
		// eslint-disable-next-line no-unused-expressions
		selectRef.current.value = title;
	};

	return (
		<div className={styles.fields}>
			<label htmlFor={title}>{title}: </label>
			<select
				name={titleLowerCase}
				id={title}
				className={styles.formInput}
				onChange={handleChange}
				ref={selectRef}
				required
			>
				<option value={title} hidden>
					{title}
				</option>
				{optionsSelect.length
					? optionsSelect.map(({ name }, i) => (
							<option key={i} value={name}>
								{name}
							</option>
					  ))
					: 'Loading...'}
			</select>
			{errorSelect[titleLowerCase] && (
				<p className={styles.errors}>*{errorSelect[titleLowerCase]}</p>
			)}
			<small>Max. 5 {title}</small>
			{options.length ? (
				<div className={styles.showCategory}>
					<button onClick={handleClear} className={styles.btnClear}>
						x
					</button>
					{options.length
						? options.map((genres, i) => <span key={i}>{genres}</span>)
						: ''}
				</div>
			) : (
				''
			)}
		</div>
	);
};
