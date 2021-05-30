import { Checkbox } from '@material-ui/core'
import React from 'react'
import { Todo, ToggleComplete } from './todoModel'

interface TodoListItemProps {
  todo: Todo
  toggleComplete: ToggleComplete
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li>
      <label className={todo.complete ? 'todo-row completed' : 'todo-row'}>
        <Checkbox
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
          color='primary'
        />

        {todo.text}
      </label>
    </li>
  )
}
