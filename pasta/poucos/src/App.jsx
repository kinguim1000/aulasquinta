import { useState } from "react";
import { ListaAux } from "./component/listaAux";
import { Lista } from "./component/lista";
import { NewTodo } from "./component/newTodo";
function App() {
  const [todo, setTodo] = useState([
    {
      conteudo: "aa",
      feito: false,
      data: new Date(),
      id: 1,
    },
  ]);
  const principal = [todo];
  console.log(todo);
  return (
    <>
      <NewTodo mudarTodo={setTodo} todoatual={todo} />

      <Lista lista={todo} />
    </>
  );
}

export default App;
