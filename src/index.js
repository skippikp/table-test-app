import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './components/App/App';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundry>
				<Router>
					<App />
				</Router>
			</ErrorBoundry>
		</Provider>
	</React.StrictMode>
);
