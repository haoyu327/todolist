import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/todoForm";
import { TodoList } from "./components/TodoList";
import { Typography, Card, AppBar, Toolbar } from "@material-ui/core";
import {
  AddTodo,
  DeleteTodo,
  saveTodo,
  Todo,
  ToggleComplete,
} from "./components/todoModel";

const styles = {
  bar: {
    backgroundColor: "#274472",
  },
};
let index = 1;

function App() {
  let [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const deleteTodo: DeleteTodo = (selectedTodo) => {
    todos = todos.filter((x) => x.id !== selectedTodo.id);
    setTodos(todos);
    console.log(todos);
  };
  const editTodo: DeleteTodo = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo && todo.isedit === false) {
        return { ...todo, isedit: true };
      } else if (todo === selectedTodo && todo.isedit === true) {
        return { ...todo, isedit: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const saveTodo: saveTodo = (text, selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, text: text };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([
        ...todos,
        { id: index, text: newTodo, complete: false, isedit: false },
      ]);
      index = index + 1;
    }
  };

  return (
    <div>
      <AppBar position='relative' style={styles.bar}>
        <Toolbar></Toolbar>
      </AppBar>
      <Card className='todo-app'>
        <header>
          <Typography variant='h4' gutterBottom>
            Todo App
          </Typography>
        </header>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          saveTodo={saveTodo}
        />
      </Card>
    </div>
  );
}

export default App;
