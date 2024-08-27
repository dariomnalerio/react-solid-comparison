import { Todo } from '../types';

type TodoListProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

function TodoItem({ todo, toggleTodo, removeTodo }: TodoListProps) {
  return (
    <li className='todo-section__list__item'>
      <div>
        <input id={todo.id} type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <label htmlFor={todo.id}>{todo.task}</label>
      </div>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoItem;
