import { useState } from "react";
import { NewTodo } from "./component/newTodo";
import { Todo } from "./component/Todo";
import "./styles.css";
function App() {
  const [todo, setTodo] = useState([
    {
      conteudo: "aperte para remover ->",
      feito: false,
      data: new Date(),
      id: 0,
    },
  ]);
  return (
    <>
      <NewTodo mudarTodo={setTodo} todoatual={todo} />

      {todo.map((el) => {
        return (
          <Todo
            todo={el}
            todoCompleto={todo}
            key={el.id}
            id={el.id}
            mudarTodo={setTodo}
          />
        );
      })}
    </>
  );
}

export default App;
