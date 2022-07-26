import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoadingPage } from './pages/LoadingPage';
import { HomePage } from './pages/HomePage';
import { Loading } from './components/loading/Loading';

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
				<Router>
					<Switch>
						<Route exact path='/'>
							<LoadingPage />
						</Route>
						<Route exact path='/home'>
							<HomePage />
						</Route>
					</Switch>
				</Router>
			)}
		</div>
	);
}

export default App;
