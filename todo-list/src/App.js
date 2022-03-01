import React from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  toggleTodo
} from './redux-flow/reducers/todos/action-creators';

const App = ({ todos, handleAddTodo, handleToggleTodo }) => {
  console.log(todos);
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type='text' name='todo' />
        <button type='submit'>Adicionar</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={handleToggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
            {todo.text}
          </li>
        ))}
      </ul>
      <div>
        <h3>Mostrar</h3>
        <span>Todos</span> | <a href='//google.com'>Finalizados</a> |{' '}
        <a href='//google.com'>A fazer</a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.todo.value));
    e.target.todo.value = '';
  },
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
