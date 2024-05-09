import React, { useState } from 'react';
import './App.css';
import { TodoItem } from './TodoItem';
import { AddTodoFrom } from './AddTodoForm';

interface Task {
  id: number,
  text: string
}

function App() {

  const [todos, setTodos] = useState<Task[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoFrom onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} /> 
          ))}
      </ul>
    </div>
  );
}

export default App;
