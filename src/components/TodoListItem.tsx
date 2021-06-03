import React from 'react'
import {
  DeleteTodo,
  EditTodo,
  saveTodo,
  Todo,
  ToggleComplete,
} from './todoModel'
import { Checkbox, TextField } from '@material-ui/core'
import { Delete, Build } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'

const styles = {
  icon: {
    marginLeft: 'auto',
  },
  textInput: {
    width: '50%',
  },
}

interface TodoListItemProps {
  todo: Todo
  toggleComplete: ToggleComplete
  deleteTodo: DeleteTodo
  editTodo: EditTodo
  saveTodo: saveTodo
}

// deleteTodo = () => {
//   const fade = true
//   this.setState({ fade })

//   var promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(true)
//     }, 500)
//   })

//   promise.then(() => this.props.deleteTodo(this.props.index))
//   console.log(this.state)
// }

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
  saveTodo,
}) => {
  return (
    <li>
      <label className={todo.complete ? 'todo-row completed' : 'todo-row'}>
        <Checkbox
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
          color='primary'
        />
        {todo.isedit ? (
          <TextField
            label='edit a todo'
            // value={todo.text}
            onKeyUp={(e) => saveTodo(e.key, todo)}
            style={styles.textInput}
            placeholder='edit a todo'
            variant='outlined'
          />
        ) : (
          todo.text
        )}

        <IconButton
          color='primary'
          aria-label='Edit'
          style={styles.icon}
          onClick={() => editTodo(todo)}>
          <Build fontSize='small' />
        </IconButton>
        <IconButton
          color='secondary'
          aria-label='Delete'
          onClick={() => deleteTodo(todo)}>
          <Delete fontSize='small' />
        </IconButton>
      </label>
    </li>
  )
}
