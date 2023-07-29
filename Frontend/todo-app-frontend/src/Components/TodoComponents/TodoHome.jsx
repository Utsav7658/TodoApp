import React, { useCallback, useEffect, useState } from "react";
import { deleteTodoById, getAllTodos, getTodoById } from "../API/API";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

function TodoHome() {
  const [todos, setTodos] = useState([]);
  const [showTodoCreate, setShowTodoCreate] = useState(false);
  const [todo, setTodo] = useState([]);
  const [search, setSearch] = useState("");

  const getTodos = async () => {
    await getAllTodos().then(setTodos);
  };

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

  const searchTodo = useCallback((search, todos) => {
    console.log(search);
    const result = todos.filter((todoTemp) =>
      todoTemp.description.toLowerCase().includes(search.toLowerCase())
    );

    setTodos(result);
  }, []);

  useEffect(() => {
    if (search === "") {
      getTodos();
    } else {
      searchTodo(search, todos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showTodoCreate, setShowTodoCreate, search, searchTodo]);

  return (
    <div>
      <button className="btn btn-primary" onClick={handleShowCreateTodo}>
        {showTodoCreate ? "Close" : "Add Todo"}
      </button>

      {showTodoCreate ? (
        <TodoCreate todo={todo} />
      ) : (
        <>
          <input
            className="form-control"
            placeholder="Search"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <TodoList
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            todos={todos}
            searchTodo={searchTodo}
          />
        </>
      )}
    </div>
  );
}

export default TodoHome;
