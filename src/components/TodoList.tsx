import React from 'react'
import { TodoListItem } from './TodoListItem'
import {
  DeleteTodo,
  EditTodo,
  saveTodo,
  Todo,
  ToggleComplete,
} from './todoModel'

interface TodoListProps {
  todos: Array<Todo>
  toggleComplete: ToggleComplete
  deleteTodo: DeleteTodo
  editTodo: EditTodo
  saveTodo: saveTodo
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  deleteTodo,
  editTodo,
  saveTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          saveTodo={saveTodo}
        />
      ))}
    </ul>
  )
}
