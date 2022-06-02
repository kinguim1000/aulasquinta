import { useState } from 'react'
import { Lista } from "./component/lista"
import { NewTodo } from "./component/newTodo"
function App() {
  const[todo, setTodo] = useState({
    conteudo: "aa",
    feito: false,
    data: new Date()
});

  return(
    <>

  <NewTodo mudarTodo={setTodo}/>
  <Lista lista={todo}/>

    </>
  );

  
}

export default App
