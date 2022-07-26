import { Article } from '../components/main/main';
import { Aside } from '../components/sidebar/Sidebar';
import { Footer } from '../components/footer/Footer';
import { Navigation } from '../components/navbar/Navbar';
import './home.css';

export const HomePage = () => {
	return (
		<div className='container'>
			<Navigation />
			<Aside />
			<Article />
			<Footer />
		</div>
	);
};
