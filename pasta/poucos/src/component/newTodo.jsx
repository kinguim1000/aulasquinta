import { useState } from "react";
export function NewTodo({ mudarTodo, todoatual }) {
  const [makeTodo, setMakeTodo] = useState({
    ...todoatual,
  });
  const [contagem, setContagem] = useState(1);
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
    console.log(makeTodo);
    for (let i in todoatual) {
      if (todoatual[i].conteudo == makeTodo[todoatual.length].conteudo) {
        console.log("item já adicionado");
        return;
      }
    }
    setContagem(contagem + 1);
    mudarTodo(makeTodo);
  }
  return (
    <div className="adicionar">
      <input type="text" onChange={(event) => mudanca(event)}></input>
      <button onClick={() => click()}>adicionar</button>
    </div>
  );
}
