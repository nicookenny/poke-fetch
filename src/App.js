import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/:name'>
						<Pokemon />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
