import React from 'react';
import logo from '../../img/puma-logo.svg';
import Menu from './../Menu/Menu';
import './App.css';

function App() {
			return (
					<div className="main">
						<header className="menu">
							<img src={logo} className="App-logo" alt="logo" />
							<ul>
								<Menu />
							</ul>
							
						</header>
					</div>
					);
	}

export default App;
