/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({
  todos, handleChangeProps, deleteTodoProps, setUpdate,
}) => (
  <ul className="list">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

export default TodosList;
