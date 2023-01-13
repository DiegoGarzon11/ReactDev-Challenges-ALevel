import { createContext, useReducer } from 'react';
import { appReducer } from './AppReducer';
import { v4 } from 'uuid';
const initalState = {
	task: [],
};
export const Global = createContext(initalState);
export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initalState);

	const addTask = (task) => {
		dispatch({
			type: 'addTask',
			payload: { ...task, id: v4() },
		});
	};
	const deleteTask = (id) => {
		dispatch({
			type: 'deleteTask',
			payload: id,
		});
	};
	const updateTask = (task) => {
		dispatch({ type: 'updateTask', payload: task });
	};
	return (
		<Global.Provider value={{ ...state, addTask, deleteTask, updateTask }}>
			{children}
		</Global.Provider>
	);
};
