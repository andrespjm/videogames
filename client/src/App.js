import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoadingPage } from './pages/LoadingPage';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/'>
						<LoadingPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
