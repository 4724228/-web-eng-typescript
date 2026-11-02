import { fetchTodos,findTodo,count} from './todo-service.js';
const loaded = await fetchTodos();
console.log(loaded);

const found = await findTodo(2);
console.log(found);

const completeCount = await count();
console.log("未完了件数:",completeCount);