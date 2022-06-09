import { useState } from 'react'
import { v4 } from 'uuid'
import { Lista } from "./component/lista"
import { NewTodo } from "./component/newTodo"
function App() {
  
  const[todo, setTodo] = useState({
    conteudo: "aa",
    feito: false,
    data: new Date(),
    id: v4()
});
const principal = [todo];
console.log(todo);
  return(
    <>

  <NewTodo mudarTodo={setTodo}/>
  <Lista lista={principal}/>

    </>
  );

  
}

export default App
