export function Save(props) {
  return (
    <>
      <button
        onClick={() => {
          localStorage.setItem("todo", JSON.stringify(props.todoatual));
          localStorage.answer = JSON.stringify(props.contagem + 1);
        }}
      >
        salvar
      </button>
      <button
        onClick={() => {
          props.mudarTodo(JSON.parse(localStorage.getItem("todo")));
          props.setContagem(JSON.parse(localStorage.answer));
          console.log(JSON.parse(localStorage.getItem("todo")));
        }}
      >
        restore
      </button>
    </>
  );
}
