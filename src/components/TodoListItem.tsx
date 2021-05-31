import React from 'react'
import { Todo, ToggleComplete } from './todoModel'
import { Checkbox } from '@material-ui/core'
import { Delete, Build } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'

const styles = {
  icon: {
    marginLeft: 'auto',
  },
}

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
        <IconButton color='primary' aria-label='Edit' style={styles.icon}>
          <Build fontSize='small' />
        </IconButton>
        <IconButton color='secondary' aria-label='Delete'>
          <Delete fontSize='small' />
        </IconButton>
      </label>
    </li>
  )
}
