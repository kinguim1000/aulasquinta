import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState({})
function handleSubmit(e){
  e.preventDefault();
  //console.log(e);
}


  return (
    <>
    <form>
      <label>
        
        <input type="date" name="color"></input>
      </label>
      <input type="text"  name="name"/>
      <input type="submit" value="Enviar" onClick={(e)=>handleSubmit(e)}/>
    </form>
    oi
    </>
  )
}

export default App
