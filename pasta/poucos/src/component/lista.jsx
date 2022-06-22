export function Lista(props) {
  var renderizacao = props.lista.map(function (item) {
    return <h3>{item.conteudo}</h3>;
  });
  return renderizacao;
}
