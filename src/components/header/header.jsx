import react from 'react';
import { Link } from 'react-router-dom';
export function Header() {
	return (
		<header>
			<Link to='/'>
				<button className='ml-7 text-white w-auto bg-slate-500 mt-7 rounded-xl p-5'>
					Task Manager
				</button>
			</Link>
		</header>
	);
}
