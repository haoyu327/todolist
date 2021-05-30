export type AddTodo = (newTodo: string) => void

export type Todo = {
  text: string
  complete: boolean
}

export type ToggleComplete = (selectedTodo: Todo) => void
