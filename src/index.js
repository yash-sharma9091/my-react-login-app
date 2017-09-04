import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import './bootstrap';
import registerServiceWorker from './registerServiceWorker';
//https://serverless-stack.com/#table-of-contents
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
