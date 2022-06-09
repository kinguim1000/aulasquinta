import { useState } from 'react'
import { Lista } from "./component/lista"
import { NewTodo } from "./component/newTodo"
function App() {
  
  const[todo, setTodo] = useState({
    conteudo: "aa",
    feito: false,
    data: new Date(),
    id: 0
});
const principal = [todo];
console.log(principal[0]);
  return(
    <>

  <NewTodo mudarTodo={setTodo}/>
  <Lista lista={principal}/>

    </>
  );

  
}

export default App
