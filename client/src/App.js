import { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoadingPage } from './pages/LoadingPage';
import { HomePage } from './pages/HomePage';
import { Loading } from './components/loading/Loading';
import { Videogame } from './pages/Videogame';

function App() {
	const [spinner, setSpinner] = useState(true);
	useEffect(() => {
		setTimeout(() => setSpinner(false), 2000);
	}, []);

	return (
		<div className='App'>
			{spinner ? (
				<Loading />
			) : (
				<>
					<Route exact path='/'>
						<LoadingPage />
					</Route>
					<Route exact path='/home'>
						<HomePage />
					</Route>
					<Route exact path='/videogame/:id'>
						<Videogame />
					</Route>
					<Route exact path='/videogame'>
						<Redirect to='/home' />
					</Route>

					{/* <Route path='*'>
						<Redirect to='/' />
					</Route> */}
				</>
			)}
		</div>
	);
}

export default App;
