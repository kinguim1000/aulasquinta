export function Lista(props) {
  var renderizacao = props.lista.map(function (item) {
    return `
    ${item.conteudo}
    `;
  });
  return renderizacao;
}
