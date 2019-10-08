import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';

const INITIAL_STATE = {
  todos: [
    // { id: '1', text: 'todo 1', completed: false },
    // { id: '2', text: 'todo 2', completed: true }
  ],
  editId: null,
  filterBy: 'All'
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: `todo-${Date.now()}`, completed: false, text: action.payload }
        ]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    case 'SET_EDIT_ID':
      return {
        ...state,
        editId: action.payload
      };
    case 'EDIT_TODO':
      const { editId, todos } = state;
      return {
        ...state,
        todos: todos.map(todo => {
          if (todo.id === editId) {
            return { ...todo, text: action.payload };
          }
          return todo;
        })
      };
    case 'SET_FILTER':
      return { ...state, filterBy: action.payload };
    case 'RESET':
      return { ...INITIAL_STATE };
    case 'GET_LOCAL_DATA':
      return { ...state, ...action.payload };
    case 'SAVE_DATA':
    default:
      return state;
  }
};

// actions
const addTodo = dispatch => text =>
  dispatch({ type: 'ADD_TODO', payload: text });

const deleteTodo = dispatch => id =>
  dispatch({ type: 'DELETE_TODO', payload: id });

const toggleTodo = dispatch => id =>
  dispatch({ type: 'TOGGLE_TODO', payload: id });

const setEditId = dispatch => id =>
  dispatch({ type: 'SET_EDIT_ID', payload: id });

const editTodo = dispatch => text =>
  dispatch({ type: 'EDIT_TODO', payload: text });

const setFilter = dispatch => filter =>
  dispatch({ type: 'SET_FILTER', payload: filter });

const reset = dispatch => async () => {
  await AsyncStorage.clear();
  dispatch({ type: 'RESET' });
};

const getLocalData = dispatch => async () => {
  try {
    const localData = await AsyncStorage.getItem('DATA');
    if (localData !== null) {
      dispatch({ type: 'GET_LOCAL_DATA', payload: JSON.parse(localData) });
    }
  } catch (e) {
    console.log(e);
  }
};

const saveData = dispatch => async data => {
  try {
    await AsyncStorage.setItem('DATA', JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
  dispatch({ type: 'SAVE_DATA' });
};

const { Context, Provider } = createDataContext(
  todoReducer,
  {
    addTodo,
    deleteTodo,
    toggleTodo,
    setEditId,
    editTodo,
    setFilter,
    reset,
    getLocalData,
    saveData
  },
  { ...INITIAL_STATE }
);

export { Context as TodoContext, Provider as TodoProvider };
