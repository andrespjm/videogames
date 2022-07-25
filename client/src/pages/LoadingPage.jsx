import styles from './loadingPage.module.css';
import { FaGamepad } from 'react-icons/fa';

export const LoadingPage = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.logo}></div>
					<div className={styles.glitch}>
						Henry <br />
						Videogames
					</div>
					<a href='/' className={styles.enter}>
						Enter <FaGamepad size={32} />
					</a>
				</div>
			</div>
		</>
	);
};
