import React from 'react';
import './App.css';
import { TodoItem } from './TodoItem';
import { AddTodoFrom } from './AddTodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './redux/todoSlice';
import { RootState } from "./redux/store"

function App() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoFrom onAdd={(text)=>dispatch(addTodo(text))} />
      <ul>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={(id)=>dispatch(deleteTodo(id))} /> 
          ))}
      </ul>
    </div>
  );
}

export default App;
