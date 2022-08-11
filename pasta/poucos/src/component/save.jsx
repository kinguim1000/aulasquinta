export function Save(props) {
  return (
    <>
      <button
        className="button"
        onClick={() => {
          localStorage.setItem("todoBTN", JSON.stringify(props.todoatual));
          localStorage.answer1 = JSON.stringify(props.contagem + 1);
        }}
      >
        salvar
      </button>
      <button
        className="button"
        onClick={() => {
          if (localStorage.getItem("todoBTN") !== null) {
            props.mudarTodo(JSON.parse(localStorage.getItem("todoBTN")));
            props.setContagem(JSON.parse(localStorage.answer1));
            console.log(JSON.parse(localStorage.getItem("todoBTN")));
          }
          if (localStorage.getItem("todo") !== null) {
            setTodo(JSON.parse(localStorage.getItem("todo"))); //save automatic
            setCont(JSON.parse(localStorage.answer));
            console.log(JSON.parse(localStorage.getItem("todo"))); //automatic save
          }
        }}
      >
        restore
      </button>
    </>
  );
}
