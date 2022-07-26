import styles from './loadingPage.module.css';
import { FaGamepad } from 'react-icons/fa';
import Logo from '../assets/img/logo.png';

export const LoadingPage = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src={Logo} alt='' />
				</div>
				<div className={styles.glitch}>
					<span>Henry</span>
					<span>Videogames</span>
				</div>
				<a href='/home' className={styles.btnEnter}>
					Enter <FaGamepad size={32} style={{ marginLeft: '5px' }} />
				</a>
			</div>
		</>
	);
};
