import reducerTodos from './todos/todos';
import reducerFilter from './visibility-filter/filter';

const rootReducer = (state = {}, action) => {
  return {
    todos: reducerTodos(state.todos, action),
    filter: reducerFilter(state.filter, action)
  };
};

export default rootReducer;
