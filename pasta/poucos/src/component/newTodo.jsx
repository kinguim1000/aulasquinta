import { useState } from "react";
export function NewTodo({mudarTodo}){ 

    const[makeTodo, setMakeTodo] = useState({
        conteudo: "",
        feito: false,
        data: new Date()
    });
    return(
        <div>
        <input type="text" onChange={(event)=>setMakeTodo({ 
            conteudo: event.target.value,
            feito: false,
            data: new Date()

        })}>
        </input>
        <button onClick={()=>mudarTodo(makeTodo)}>salvae</button>
        
        </div>
    );

    
}