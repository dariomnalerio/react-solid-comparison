type TodoSectionHeaderProps = {
  newTodo: () => string;
  setNewTodo: (value: string) => void;
  addTodo: () => void;
  handleKeyDown: (e: KeyboardEvent) => void;
};

function TodoSectionHeader({ newTodo, setNewTodo, addTodo, handleKeyDown }: TodoSectionHeaderProps) {
  return (
    <div class='todo-section__header'>
      <h2 class='todo-section__header__title'>What needs to be done?</h2>
      <div class='todo-section__header__content'>
        <input
          class='todo-section__header__input'
          type='text'
          placeholder='Task'
          value={newTodo()}
          onInput={(e) => setNewTodo(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
        />
        <button class='todo-section__header__button' onClick={addTodo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoSectionHeader;
