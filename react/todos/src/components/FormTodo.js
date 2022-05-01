import { useState } from "react";
// import Todo from "./Todo";
function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   type="text"
    //   className="input"
    //   value={value}
    //   placeholder="placeholder"
    // >
    
      <input onSubmit={handleSubmit} id="setValue" value={setValue}>
      <button type="submit">Submit</button>
    
  );</input>
}

export default FormTodo;
