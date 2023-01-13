export function appReducer(state, action) {
	switch (action.type) {
		case 'addTask':
			return { task: [...state.task, action.payload] };
		case 'deleteTask':
			return {
				task: state.task.filter((task) => task.id !== action.payload),
			};
		case 'updateTask':
			const updatedTask = action.payload;

			const updatedTasks = state.task.map((task) => {
				if (task.id === updatedTask.id) {
					task.title = updatedTask.title;
					task.description = updatedTask.description;
					task.status = updatedTask.status;
					task.date = updatedTask.date;
					task.tag = updatedTask.tag;
				}

				return task;
			});
			return {
				task: updatedTasks,
			};

		default:
			break;
	}
}
