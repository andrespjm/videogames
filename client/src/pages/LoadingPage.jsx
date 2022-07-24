import styles from './loadingPage.module.css'
import background from '../assets/img/background-loading-2.jpg'

export const LoadingPage = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className={styles.container}>LoadinPage</div>
    )
}
    
