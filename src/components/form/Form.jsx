import React, { useState, useContext, useEffect } from 'react';
import { Header } from '../header/header';
import { Global } from '../../context/global';
import { useParams, useNavigate } from 'react-router-dom';

export function AddTask() {
	const params = useParams();
	const { addTask, task, updateTask } = useContext(Global);
	const [error, setError] = useState('');
	const [tasks, setTask] = useState({
		id: '',
		title: '',
		description: '',
		status: '',
		date: '',
		tag: '',
	});
	const handleChange = (e) => {
		setTask({ ...tasks, [e.target.name]: e.target.value });
	};
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!tasks.title) {
			e.preventDefault();
			setError('Title is required');
			return;
		} else if (!tasks.description) {
			e.preventDefault();
			setError('Description is required');
			return;
		} else if (!tasks.date) {
			e.preventDefault();
			setError('Date is required');
			return;
		} else if (!tasks.tag) {
			e.preventDefault();
			setError('Tag is required');
			return;
		} else {
			setError('');
		}

		if (tasks.id) {
			updateTask(tasks);
			navigate('/');
		} else {
			addTask(tasks);
			navigate('/');
		}
	};
	useEffect(
		() => {
			const idFound = task.find((el) => el.id === params.id);
			if (idFound) {
				setTask(idFound);
			}
		},
		[params.id],
		tasks
	);
	return (
		<>
			<Header></Header>
			<div className='grid place-content-center mt-20'>
				<form className='bg-gray-600 p-10' onSubmit={handleSubmit}>
					<h2 className='mb-7 text-3xl text-white'>
						{tasks.id ? 'Editing a task' : 'Creating a task'}
					</h2>
					<div className='mb-5 max-lg:flex flex-col'>
						<label htmlFor='Description'>Title</label>
						<input
							type='text'
							name='title'
							id=''
							value={tasks.title}
							className='py-3 px-4 text-white focus:bg-gray-300 focus:text-black bg-gray-400 w-full focus:outline-none '
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-5 max-lg:flex flex-col'>
						<label htmlFor='desciption'>Description</label>
						<input
							type='text'
							name='description'
							value={tasks.description}
							id=''
							className='py-3 px-4 text-white focus:bg-gray-300 focus:text-black bg-gray-400 w-full focus:outline-none  '
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-5 max-lg:flex flex-col'>
						<label htmlFor='Status'>Status</label>
						<select
							type='op'
							name='status'
							value={tasks.status}
							onChange={handleChange}
							required
							className='py-3 px-4 text-white focus:bg-gray-300 focus:text-black bg-gray-400 w-full focus:outline-none '>
							<option value='Pending'>Pending</option>
							<option value='In Process'>In Process</option>
							<option value='Imcomplete'>Incomplete</option>
							<option value='Complete'>Complete</option>
						</select>
					</div>
					<div className='mb-5 max-lg:flex flex-col'>
						<label htmlFor='Tags'>Tags</label>
						<input
							type='tag'
							name='tag'
							id=''
							onChange={handleChange}
							required
							value={tasks.tag}
							className='py-3 px-4 text-white focus:bg-gray-300 focus:text-black bg-gray-400 w-full focus:outline-none '
						/>
					</div>
					<div className='mb-5 max-lg:flex flex-col'>
						<label htmlFor='Date'>Date</label>
						<input
							type='date'
							name='date'
							id=''
							onChange={handleChange}
							required
							value={tasks.date}
							className='py-3 px-4 text-white focus:bg-gray-300 focus:text-black bg-gray-400 w-full focus:outline-none '
						/>
					</div>

					{error && (
						<div className='mb-2 text-red-500 font-semibold text-xl'>
							{error}
						</div>
					)}
					<button className='bg-green-400 text-white text-center p-3 rounded-xl'>
						Confirm
					</button>
				</form>
			</div>
		</>
	);
}
