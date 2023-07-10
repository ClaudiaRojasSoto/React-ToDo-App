import InputTodo from './InputTodo';
import TodosList from './TodosList';

import { TodosProvider } from '../context/TodosContext';

const TodosLogic = () => (
  <TodosProvider>
    <InputTodo />
    <TodosList />
  </TodosProvider>
);
export default TodosLogic;
