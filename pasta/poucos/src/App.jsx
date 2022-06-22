import { useState } from "react";
import { Lista } from "./component/lista";
import { NewTodo } from "./component/newTodo";
function App() {
  const [todo, setTodo] = useState([
    {
      conteudo: "a",
      feito: false,
      data: new Date(),
      id: 1,
    },
  ]);
  console.log(todo);
  return (
    <>
      <NewTodo mudarTodo={setTodo} todoatual={todo} />

      <Lista lista={todo} />
    </>
  );
}

export default App;
