import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio } from './home/Inicio';
import { AddTask } from './form/Form';
import { Provider } from '../context/global';

export function App() {
	return (
		<Provider>
			<Routes>
				<Route path='/' exact element={<Inicio />} />
				<Route path='/form' exact element={<AddTask />} />
				<Route path='/edit/:id' element={<AddTask />} />
				<Route path='/delete' element={<AddTask />} />
			</Routes>
		</Provider>
	);
}
