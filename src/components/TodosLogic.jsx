import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

const TodosLogic = () => {
    const todos = [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ];
    return (
        <div>
        <InputTodo />
        <TodosList todosProps={todos} />
        <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
      </div>
    )
  }
  export default TodosLogic;
  