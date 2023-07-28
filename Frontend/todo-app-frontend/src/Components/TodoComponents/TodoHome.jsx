import React, { useEffect, useState } from "react";
import { deleteTodoById, getAllTodos, getTodoById } from "../API/API";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

function TodoHome() {
  const [todos, setTodos] = useState([]);
  const [showTodoCreate, setShowTodoCreate] = useState(false);
  const [todo, setTodo] = useState([]);

  const getTodos = async () => {
    await getAllTodos().then(setTodos);
  };
  useEffect(() => {
    getTodos();
  }, [showTodoCreate, setShowTodoCreate]);

  const handleShowCreateTodo = () => {
    setShowTodoCreate(!showTodoCreate);
  };

  const updateTodo = async (id) => {
    console.log("Updating " + id);

    await getTodoById(id).then(setTodo);
    setShowTodoCreate(true);
  };

  const deleteTodo = async (id) => {
    console.log("Deleting " + id);
    await deleteTodoById(id);
    getTodos();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleShowCreateTodo}>
        {showTodoCreate ? "Close" : "Add Todo"}
      </button>
      {showTodoCreate ? (
        <TodoCreate todo={todo} />
      ) : (
        <TodoList
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          todos={todos}
        />
      )}
    </div>
  );
}

export default TodoHome;
