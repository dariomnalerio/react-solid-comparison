import { useEffect, useState } from 'react';
import { Todo } from '../types';
import TodoSectionHeader from './todo-section-header';
import TodoItem from './todo-section-item';

function TodoSection() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    const task = newTodo.trim();
    if (task === '') return;
    const id = crypto.randomUUID();

    setTodos([...todos, { id, task, completed: false }]);
    setNewTodo('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo();
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [todos]);

  return (
    <section className='todo-section'>
      <TodoSectionHeader newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} handleKeyDown={handleKeyDown} />

      <p className='todo-section__count'>
        Todo array render count: <span>{count}</span>
      </p>

      <ul className='todo-section__list'>
        {todos.length === 0 && (
          <p className='todo-section__list__fallback'>There is nothing to do yet! Try adding some tasks</p>
        )}

        {todos.map((todo) => (
          <TodoItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} key={todo.id} />
        ))}
      </ul>
    </section>
  );
}

export default TodoSection;
