import React, { useCallback, useEffect, useState } from "react";
import { deleteTodoById, getAllTodos, getTodoById } from "../API/API";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

function TodoHome() {
  const [todos, setTodos] = useState([]);
  const [showTodoCreate, setShowTodoCreate] = useState(false);
  const [todo, setTodo] = useState([]);
  const [search, setSearch] = useState("");
  const [t, setT] = useState([]);
  const [c, setC] = useState(false);

  const getTodos = async () => {
    await getAllTodos().then(setTodos);
  };

  const handleShowCreateTodo = () => {
    setShowTodoCreate(!showTodoCreate);
  };

  const updateTodo = async (id) => {
    

    await getTodoById(id).then(setTodo);
    setShowTodoCreate(true);
  };

  const deleteTodo = async (id) => {
   
    await deleteTodoById(id);
    getTodos();
  };

  const searchTodo = useCallback((search, todos) => {
  
    const result = todos.filter((todoTemp) =>
      todoTemp.description.toLowerCase().includes(search.toLowerCase())
    );

    setTodos(result);
  }, []);

  const sortByDate = () => {
    setC(!c);
    if (c) {
      todos.sort(
        (a, b) => new Date(b.dateCompletion) - new Date(a.dateCompletion)
      );
      
      setT(todos);
    } else {
      todos.sort(
        (a, b) => new Date(a.dateCompletion) - new Date(b.dateCompletion)
      );
    
      setT(todos);
    }
  };

  const sortByDescription = () => {
    setC(!c);
    if (c) {
      todos.sort((a, b) => b.description.localeCompare(a.description));

      setT(todos);
    } else {
      todos.sort((a, b) => a.description.localeCompare(b.description));
      
      setT(todos);
    }
  };

  useEffect(() => {
    if (search === "" || c) {
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
            todos={c ? t : todos}
            searchTodo={searchTodo}
            sortByDate={sortByDate}
            sortByDescription={sortByDescription}
          />
        </>
      )}
    </div>
  );
}

export default TodoHome;
