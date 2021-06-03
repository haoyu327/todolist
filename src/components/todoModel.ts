export type AddTodo = (newTodo: string) => void

export type Todo = {
  id: number
  text: string
  complete: boolean
  isedit: boolean
}

export type ToggleComplete = (selectedTodo: Todo) => void
export type DeleteTodo = (selectedTodo: Todo) => void
export type EditTodo = (selectedTodo: Todo) => void
export type saveTodo = (text: string, selectedTodo: Todo) => void
