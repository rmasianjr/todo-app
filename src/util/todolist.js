export function filteredTodos(todos, filterBy) {
  switch (filterBy) {
    case 'Active':
      return {
        data: todos.filter(todo => !todo.completed),
        iconProps: {
          iconName: 'book',
          message: 'No active todo found',
          iconColor: '#627d98',
          backgroundColor: '#d9e2ec'
        }
      };
    case 'Completed':
      return {
        data: todos.filter(todo => todo.completed),
        iconProps: {
          iconName: 'flag',
          message: 'Finish up an active todo',
          iconColor: '#27ab83',
          backgroundColor: '#c6f7e2'
        }
      };
    case 'All':
    default:
      return {
        data: todos,
        iconProps: {
          iconName: 'edit',
          message: 'Add a new todo',
          iconColor: '#2680c2',
          backgroundColor: '#dceefb'
        }
      };
  }
}
