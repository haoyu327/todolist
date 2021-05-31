import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button, TextField } from '@material-ui/core'
import { AddTodo } from './todoModel'
interface TodoFormProps {
  addTodo: AddTodo
}

const styles = {
  textInput: {
    width: '50%',
  },
  submit: {
    padding: '16px 16px',
    backgroundColor: '#274472',
    color: 'white',
  },
  todoForm: {
    margin: '0 0 30px 0 ',
  },
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form style={styles.todoForm}>
      <TextField
        id='outlined-basic'
        value={newTodo}
        label='Add a todo'
        style={styles.textInput}
        placeholder='Add a todo'
        onChange={handleChange}
        variant='outlined'
      />
      <Button
        type='submit'
        onClick={handleSubmit}
        variant='contained'
        style={styles.submit}>
        Add Todo
      </Button>
    </form>
  )
}
