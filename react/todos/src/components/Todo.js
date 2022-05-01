function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <>
      <div className="todo"></div>
      <button onClick={() => markTodo(index)}>✓</button>{" "}
      <button onClick={() => removeTodo(index)}>✕</button>
    </>
  );
}
export default Todo;
