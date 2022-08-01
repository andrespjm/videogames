/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../assets/img/logo.png';
import { Searcher } from '../searcher/Searcher';
import './navabar.css';

export const Navigation = ({
	setCurrentPage,
	setGenreName,
	inputValue,
	setInputValue,
}) => {
	return (
		<nav className='navbar'>
			<div className='navLogo'>
				<img src={Logo} alt='' />
				<span>Henry videogames</span>
			</div>
			<Searcher
				setCurrentPage={setCurrentPage}
				setGenreName={setGenreName}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			<div className='navAcount'>
				<a href='#'>Log in</a>
				<a href='#'>Sign up</a>
			</div>
		</nav>
	);
};
