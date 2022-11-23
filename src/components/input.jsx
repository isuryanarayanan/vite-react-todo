import { useState } from "react";

function Input(props) {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    props.add(todo);
    setTodo("");
  };

  return (
    <div>
      <div className="input">
        <input
          type="text"
          placeholder="Enter a todo item"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />
      </div>

      <div className="submit">
        <button type="submit" onClick={handleAddTodo}>
          Add todo
        </button>
      </div>
    </div>
  );
}

export default Input;
