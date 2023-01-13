import React, { useState, useContext } from 'react';
import { Global } from '../../context/global';
import { Link } from 'react-router-dom';

export function Inicio() {
	const { task, deleteTask } = useContext(Global);

	return (
		<>
			<h1 className='text-center text-black p-12 pt-2 text-lg'>
				Task Manager
			</h1>
			<table className='w-full'>
				<tr className='bg-gray-400'>
					<th className='border border-black text-white font-medium'>
						Id
					</th>
					<th className='border border-black text-white font-medium'>
						Title
					</th>
					<th className='border border-black text-white font-medium'>
						Description
					</th>
					<th className='border border-black text-white font-medium'>
						Status
					</th>
					<th className='border border-black text-white font-medium'>
						Tag
					</th>
					<th className='border border-black text-white font-medium'>
						Date
					</th>
					<th className='border border-black text-white font-medium'>
						Accion
					</th>
				</tr>

				{task.map((task) => (
					<tr className='bg-gray-300 border border-black' key={task.id}>
						<td className='border border-black text-center'>{task.id}</td>
						<td className='border border-black text-center'>
							{task.title}
						</td>
						<td className='border border-black text-center'>
							{task.description}
						</td>
						<td className='border border-black text-center'>
							{task.status}
						</td>
						<td className='border border-black text-center'>
							{/\s/g.test(task.tag) ? (
								<p className='bg-yellow-300'>{task.tag}</p>
							) : (
								<p className='bg-orange-500'>{task.tag}</p>
							)}
						</td>
						<td className='border border-black text-center'>
							{task.date}
						</td>
						<div className='flex justify-center gap-4'>
							<Link to={`/edit/${task.id}`}>
								<button className='bg-blue-400 h-auto p-1 m-1 rounded'>
									Edit
								</button>
							</Link>

							<button
								className='bg-red-500 h-auto p-1 m-1 rounded'
								onClick={() => deleteTask(task.id)}>
								Delete
							</button>
						</div>
					</tr>
				))}
			</table>
			{task.length < 1 ? (
				<h3 className='text-slate-900 text-center m-10 text-xl'>
					There are no tasks at the moment
				</h3>
			) : (
				''
			)}
			<div className='flex justify-center pt-5'>
				<Link to='/form'>
					<button className='bg-green-400 text-white text-center p-3 rounded-xl'>
						Add Task
					</button>
				</Link>
			</div>
		</>
	);
}
