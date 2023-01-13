import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Inicio } from './home/Inicio';
import { AddTask } from './form/Form';
import { Provider } from '../context/global';
import { Carga } from './Carga';

export function App() {
	return (
		<Provider>
			<Carga></Carga>
			<Routes>
				<Route path='/' exact element={<Inicio />} />
				<Route path='/form' exact element={<AddTask />} />
				<Route path='/edit/:id' element={<AddTask />} />
				<Route path='/delete' element={<AddTask />} />
			</Routes>
		</Provider>
	);
}
