import styles from './loading.module.css';
import Logo from '../../assets/img/logo.png';
export const Loading = () => {
	return (
		<div className={styles.containerLoader}>
			<div className={styles.logo}>
				<img src={Logo} alt='' />
			</div>
			<div className={styles.loader}></div>
		</div>
	);
};
