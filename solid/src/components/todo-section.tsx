import { createEffect, createSignal, createUniqueId, For, on } from 'solid-js';
import { Todo } from '../types';
import TodoItem from './todo-section-item';
import TodoSectionHeader from './todo-section-header';

function TodoSection() {
  const [count, setCount] = createSignal<number>(0);
  const [todos, setTodos] = createSignal<Todo[]>([]);
  const [newTodo, setNewTodo] = createSignal<string>('');

  const addTodo = () => {
    const task = newTodo().trim();
    if (task === '') return;
    const [completed, setCompleted] = createSignal<boolean>(false);
    const id = createUniqueId();

    setTodos([...todos(), { id, task, completed, setCompleted }]);
    setNewTodo('');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo();
    }
  };

  const toggleTodo = (id: string) => {
    const todo = todos().find((todo) => todo.id === id);
    if (todo) {
      todo.setCompleted(!todo.completed());
    }
  };

  const removeTodo = (id: string) => {
    setTodos(todos().filter((todo) => todo.id !== id));
  };

  createEffect(
    on(todos, () => {
      setCount((c) => c + 1);
    })
  );

  return (
    <section class='todo-section'>
      <TodoSectionHeader newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} handleKeyDown={handleKeyDown} />

      <p class='todo-section__count'>
        Todo array render count: <span>{count()}</span>
      </p>

      <ul class='todo-section__list'>
        <For
          each={todos()}
          fallback={<p class='todo-section__list__fallback'>There is nothing to do yet! Try adding some tasks</p>}
        >
          {(todo) => <TodoItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />}
        </For>
      </ul>
    </section>
  );
}

export default TodoSection;
