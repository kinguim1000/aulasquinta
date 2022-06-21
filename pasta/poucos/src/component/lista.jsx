import { useState } from "react";
import { render } from "react-dom";
import { ListaAux } from "./listaAux";
export function Lista(props) {
  //    let tamanho = lista.length;
  const [num, setNum] = useState(0);
  for (let i in props.lista) {
    ListaAux(props.lista, i);
  }
}
