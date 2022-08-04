import { useState } from "react";
import { NewTodo } from "./component/newTodo";
import { Todo } from "./component/Todo";
import { Save } from "./component/save";
import "./styles.css";
function App() {
  const [cont, setCont] = useState(1);

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
      <NewTodo
        mudarTodo={setTodo}
        todoatual={todo}
        contagem={cont}
        setContagem={setCont}
      />

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
      <Save
        todoatual={todo}
        mudarTodo={setTodo}
        contagem={cont}
        setContagem={setCont}
      />
    </>
  );
}

export default App;
