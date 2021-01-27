interface Todo {
    title: string
    description: string
    completed: boolean
}
type MyPick<T, K extends keyof T>={
    [C in K]: T[C]
    
}
type TodoPreview = MyPick<Todo, 'title' | 'completed' | 'description'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
    description: 'New'
}