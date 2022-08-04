import { useState } from "react";
export function NewTodo({ mudarTodo, todoatual, contagem, setContagem }) {
  const [makeTodo, setMakeTodo] = useState({
    ...todoatual,
  });
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
    for (let i in todoatual) {
      if (todoatual[i].conteudo == makeTodo[todoatual.length].conteudo) {
        console.log("item já adicionado");
        return;
      }
    }
    setContagem(contagem + 1);
    localStorage.setItem("todo", JSON.stringify(makeTodo));
    localStorage.answer = JSON.stringify(contagem + 1);
    mudarTodo(makeTodo);
  }
  return (
    <div className="adicionar">
      <input type="text" onChange={(event) => mudanca(event)}></input>
      <button onClick={() => click()}>adicionar</button>
    </div>
  );
}
