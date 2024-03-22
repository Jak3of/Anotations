import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './HelloWorldApp'
import FirstApp from './FisrtApp'
import { CounterApp } from './CounterApp'
import './style.css'


ReactDOM.createRoot( document.getElementById('root')).render(
		<React.StrictMode>
			<App/>
			<FirstApp title="Hola soy Vegeta"/>
			<CounterApp value={10}/>
			
		</React.StrictMode>
);

