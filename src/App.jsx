import { useState } from "react";
import Input from "./components/input";
import List from "./components/list";

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo([...todos, todo]);
  };

  return (
    <div className="App">
      <Input add={addTodo} />
      <List items={todos} />
    </div>
  );
}

export default App;
