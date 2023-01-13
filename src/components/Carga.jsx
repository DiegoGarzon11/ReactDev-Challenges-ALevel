import { useState, useEffect } from 'react';

export function Carga() {
	const [_, setPromptValue] = useState('');

	const handleClick = () => {
		const value = prompt('Enter a value:');
		setPromptValue(value);
		(value == '') | (value == null)
			? localStorage.setItem('nombre', 'invitado')
			: localStorage.setItem('nombre', value);
		const idUser = new Date().getTime();
		localStorage.setItem('idUser', idUser);
	};
	useEffect(() => {
		window.addEventListener('load', handleClick);
		return () => {
			window.removeEventListener('load', handleClick);
		};
	}, []);
}
