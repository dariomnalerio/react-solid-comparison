type TodoSectionHeaderProps = {
  newTodo: string;
  setNewTodo: (value: string) => void;
  addTodo: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
};

function TodoSectionHeader({ newTodo, setNewTodo, addTodo, handleKeyDown }: TodoSectionHeaderProps) {
  return (
    <div className='todo-section__header'>
      <h2 className='todo-section__header__title'>What needs to be done?</h2>
      <div className='todo-section__header__content'>
        <input
          className='todo-section__header__input'
          type='text'
          placeholder='Task'
          value={newTodo}
          onInput={(e) => setNewTodo(e.currentTarget.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button className='todo-section__header__button' onClick={addTodo} onKeyDown={handleKeyDown}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoSectionHeader;
