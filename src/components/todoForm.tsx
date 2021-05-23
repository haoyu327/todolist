import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@material-ui/core';
interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();   
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form className="todo-form">
      <input type="text" value={newTodo} className="todo-input" placeholder="Add a todo" onChange={handleChange} />
        <Button type="submit" onClick={handleSubmit} variant="contained" style={{ padding: "11px 16px", backgroundColor:"#274472", color:"white"}}>
          Add Todo
        </Button>
    </form>
  )
};