import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './components/todoForm';
import { TodoList } from './components/TodoList';
import { Typography, Container, Card, CssBaseline,AppBar,Toolbar } from '@material-ui/core';
import PlaylistAddCheckIcon from '@material-ui/icons';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  return (
    <div>
    <AppBar position="relative" style={{backgroundColor:"#274472"}}>
      <Toolbar></Toolbar>
    </AppBar>
    <Card className="todo-app">
      <header>
        <Typography variant="h4" gutterBottom>
        Todo App
        </Typography>
      </header>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete}/>
    </Card>
    </div>
  );
};

export default App;

