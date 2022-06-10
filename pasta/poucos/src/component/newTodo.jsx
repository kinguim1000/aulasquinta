import { useState } from "react";
export function NewTodo({mudarTodo, todoatual}){ 

    const[makeTodo, setMakeTodo] = useState({
        conteudo: "",
        feito: false,
        data: new Date()
    });

    function mudanca(evento){
        setMakeTodo({ 
            ... todoatual,
            conteudo1: evento.target.value,
            feito1: false,
            data1: new Date(),
            id1: 2
        })
    }
    return(
        <div>
        <input type="text" onChange={(event)=>
        mudanca(event)
        
        }>
        </input>
        <button onClick={()=>mudarTodo(makeTodo)}>adicionar</button>
        
        </div>
    );

    
}