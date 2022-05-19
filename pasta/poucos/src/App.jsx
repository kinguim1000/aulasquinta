import { useState } from 'react'
import Todo from './component/todos';
import TodoFormulario from './component/todoForm';


function App() {
  

  const [todos, setTodos] = useState([
      {text: "gosto de comer comidas",
        isCompleted: false
      },
      {
        text: "Learn about React",
        isCompleted: false
      },
  
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
    {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
    <TodoFormulario addTodo={addTodo} />
    </>
  )
}

export default App
