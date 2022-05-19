import React from "react";

function TodoFormulario  ({addTodo}){
        const [value, setValue] = React.useState("");
      
        const handleSubmit = e => {
          e.preventDefault();
          if (!value) return;
          addTodo(value);
          setValue("");
        };
      
        return (
          <form onSubmit={handleSubmit} style={{minWidth: "299px"}}>
            <input
              type="text"
              className="input"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <input type="submit"/>
          </form>
        );
      }
export default TodoFormulario;