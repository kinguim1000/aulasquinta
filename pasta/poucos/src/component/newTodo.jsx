import { useState } from "react";
export function NewTodo({ mudarTodo, todoatual }) {
  const [makeTodo, setMakeTodo] = useState({
    ...todoatual,
  });
  const [contagem, setContagem] = useState(2);
  function mudanca(evento) {
    setMakeTodo([
      ...todoatual,
      {
        conteudo: evento.target.value,
        feito: false,
        data: new Date(),
        id: contagem,
      },
    ]);
  }
  function click() {
    if (todoatual.conteudo != makeTodo.conteudo) {
      setContagem(contagem + 1);
      mudarTodo(makeTodo);
    }
  }
  return (
    <div>
      <input type="text" onChange={(event) => mudanca(event)}></input>
      <button onClick={() => click()}>adicionar</button>
    </div>
  );
}
