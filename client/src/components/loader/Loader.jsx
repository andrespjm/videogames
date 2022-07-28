import styles from './loader.module.css';

export const Loader = () => (
	<div className={styles.loaderContent}>
		<div className={styles.loader}>
			<div className={styles.loaderSquare}></div>
			<div className={styles.loaderSquare}></div>
			<div className={styles.loaderSquare}></div>
			<div className={styles.loaderSquare}></div>
			<div className={styles.loaderSquare}></div>
			<div className={styles.loaderSquare}></div>
			<div className={styles.loaderSquare}></div>
		</div>
	</div>
);
