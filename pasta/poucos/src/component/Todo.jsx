export function Todo(props) {
  function clickFunc() {
    let anotherTodo = props.todoCompleto;
    const index = anotherTodo.findIndex((el) => el.id === props.id);
    anotherTodo.splice(index, 1);
    anotherTodo = [
      ...anotherTodo,
      {
        conteudo: props.todo.conteudo,
        feito: !props.todo.feito,
        data: props.todo.data,
        id: props.id,
      },
    ];
    anotherTodo.sort((a, b) => {
      return a.id - b.id;
    });
    props.mudarTodo(anotherTodo);
  }
  function remove() {
    let anotherTodo = props.todoCompleto;
    const index = anotherTodo.findIndex((el) => el.id === props.id);
    anotherTodo.splice(index, 1);
    anotherTodo.sort((a, b) => {
      return a.id - b.id;
    });
    props.mudarTodo([...anotherTodo]);
  }
  return (
    <table className="tabela">
      <tr>
        <td className="content">
          <h3>{props.todo.conteudo}</h3>
        </td>
        <td>
          <input type="checkbox" onClick={clickFunc} />
        </td>
        <td>
          <input type="button" onClick={remove} value="remover" />
        </td>
      </tr>
    </table>
  );
}
