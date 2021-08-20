import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";

export const EditTodo = () => {
  const [todo, setTodo] = useState();
  
  useEffect(() => {
    setTodo({
      text: "foo",
    });
  }, [])

  return todo ? <TodoForm todo={todo}/> : <div>Load</div>
}