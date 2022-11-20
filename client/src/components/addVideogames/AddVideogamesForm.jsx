import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './addVideogames.module.css';
import {
	createVideogame,
	getAllPlatforms,
	getVideogames,
} from '../../redux/actions';
import { Select } from '../select/Select';
import { validationForm } from '../../helpers/validationsForm';

const valuesFormInit = {
	name: '',
	description: '',
	released: '',
	rating: 0,
	genres: [],
	platforms: [],
};

export const AddVideogamesForm = ({ genres }) => {
	const dispatch = useDispatch();
	const platforms = useSelector(state => state.platforms);
	const [optionGenres, setOptionGenres] = useState([]);
	const [optionPlatforms, setOptionPlatforms] = useState([]);
	const [errors, setErrors] = useState({});
	const [errorSelect, setErrorSelect] = useState({});
	const [sendData, setSendData] = useState(false);
	const [valuesForm, setValuesForms] = useState(valuesFormInit);
	const messageRef = useRef();

	useEffect(() => {
		dispatch(getAllPlatforms());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		valuesForm.genres = optionGenres;
		valuesForm.platforms = optionPlatforms;

		setErrors(validationForm(valuesForm));
		if (Object.keys(errors).length === 0) {
			if (!optionGenres.length) {
				setErrorSelect(errorSelect => ({
					...errorSelect,
					genres: 'Field Genres required',
				}));
			} else {
				setErrorSelect({});
				if (!optionPlatforms.length) {
					setErrorSelect(errorSelect => ({
						...errorSelect,
						platforms: 'Field Platforms required',
					}));
				} else {
					setErrorSelect({});
					console.log('values form', valuesForm);
					if (createVideogame(valuesForm)) {
						dispatch(getVideogames());
					}
					setValuesForms(valuesFormInit);
					setSendData(true);
					messageRef.current.innerHTML = '¡Video game created successfully!';
				}
			}
		}
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setSendData(false);
		setValuesForms(valuesForm => ({ ...valuesForm, [name]: value }));
	};

	const handleBlur = e => {
		handleChange(e);
		setErrors(validationForm(valuesForm));
	};

	return (
		<form onSubmit={handleSubmit} className={styles.formVidogame}>
			<div className={styles.indication} ref={messageRef}>
				All fields are required
			</div>
			<div className={styles.fields}>
				<label htmlFor='name'>Name: </label>
				<input
					type='text'
					id='name'
					className={styles.formInput}
					autoComplete='off'
					spellCheck='false'
					placeholder='Ex. Mario Kart'
					name='name'
					value={valuesForm.name}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.name && <p className={styles.errors}>*{errors.name}</p>}
			</div>
			<div className={styles.fields}>
				<label htmlFor='description'>Description: </label>
				<textarea
					type='text'
					id='description'
					placeholder='Ex. Car race game ...'
					rows={5}
					name='description'
					value={valuesForm.description}
					onChange={handleChange}
					minLength='20'
					maxLength='500'
					onBlur={handleBlur}
				/>
				{errors.description && (
					<p className={styles.errors}>*{errors.description}</p>
				)}
			</div>
			<div className={styles.fieldsGroup}>
				<div className={styles.fields}>
					<label htmlFor='released'>Released: </label>
					<input
						type='date'
						id='released'
						className={styles.formInput}
						name='released'
						value={valuesForm.released}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.released && (
						<p className={styles.errors}>*{errors.released}</p>
					)}
				</div>
				<div className={styles.fields}>
					<label htmlFor='rating'>Rating: </label>
					<input
						type='number'
						id='rating'
						className={styles.formInput}
						min='1'
						max='5'
						step='0.01'
						name='rating'
						value={valuesForm.rating}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.rating && <p className={styles.errors}>*{errors.rating}</p>}
				</div>
			</div>

			<div className={styles.fieldsGroup}>
				<Select
					optionsSelect={genres}
					setOptionGenres={setOptionGenres}
					title='Genres'
					errorSelect={errorSelect}
					sendData={sendData}
				/>

				<Select
					optionsSelect={platforms}
					setOptionPlatforms={setOptionPlatforms}
					title='Platforms'
					errorSelect={errorSelect}
					sendData={sendData}
				/>
			</div>
			<div className={styles.fields}>
				<button type='submit' className={styles.formBtn}>
					Add new videogame
				</button>
			</div>
		</form>
	);
};
