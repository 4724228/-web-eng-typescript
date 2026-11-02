import type {Todo} from'./types.js';
const todos = [
  { id: 1, title: "型を復習する", completed: true },
  { id: 2, title: "配列を学ぶ", completed: false },
  { id: 3, title: "レポートを書く", completed: true },
  { id: 4, title: "宿題する", completed: true },
];

export async function fetchTodos(): Promise<Todo[]> {
await new Promise((resolve) => {
    setTimeout(()=>{
        resolve(todos);
    },500);
});
return todos;
}

export async function count(): Promise<number> {
const currentTodos = await fetchTodos();
const completeTodos =currentTodos.filter(
    (todo) => !todo.completed,
);
return completeTodos.length;
}


export async function findTodo(id: number): Promise<Todo | undefined> {
    const currentTodos = await fetchTodos();
    return currentTodos.find((todo) => todo.id === id);
}
