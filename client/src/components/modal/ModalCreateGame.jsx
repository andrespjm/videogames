import styles from './modal.module.css';
import { FaGamepad } from 'react-icons/fa';
import { AddVideogamesForm } from '../addVideogames/AddVideogamesForm';

export default function ModalCreateGame({ setIsOpen, genres }) {
	return (
		<>
			<div className={styles.modalContainer}>
				<div className={styles.modalView}>
					<div className={styles.modalHeader}>
						<div>
							<h2
								style={{
									display: 'flex',
									alignItems: 'center',
									color: 'snow',
								}}
							>
								<FaGamepad />
								&nbsp; Add new videogame
							</h2>
						</div>
						<div>
							<button
								onClick={() => setIsOpen(false)}
								className={styles.closeButton}
							>
								x
							</button>
						</div>
					</div>
					<div className={styles.modalContent}>
						<AddVideogamesForm genres={genres} />
					</div>
				</div>
			</div>
		</>
	);
}
