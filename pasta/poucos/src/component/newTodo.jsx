import { useState } from "react";
export function NewTodo({mudarTodo}){ 

    const[makeTodo, setMakeTodo] = useState({
        conteudo: "",
        feito: false,
        data: new Date()
    });
    function mudanca(evento){
        setMakeTodo({ 
            conteudo: evento.target.value,
            feito: false,
            data: new Date()

        })
        mudarTodo(makeTodo)
    }
    return(
        <div>
        <input type="text" onChange={(event)=>
        mudanca(event)
        
        }>
        </input>
        <button onClick={()=>mudarTodo(makeTodo)}>salvae</button>
        
        </div>
    );

    
}