import React, { useEffect, useState } from "react";
import { createTodo, updateTodoById } from "../API/API";

function TodoCreate(props) {
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);
  const [dateCompletion, setDateCompletion] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      description: description,
      done: done,
      dateCompletion: dateCompletion,
    };
    if (props.todo.length === 0) {
      createTodo(todo);
      alert("Todo Created Successfully!");
    } else {
      updateTodoById(props.todo.id, todo);
      alert("Todo Updated Successfully!");
    }

    handleClear();
  };

  const handleClear = () => {
    setDescription("");
    setDone(false);
    setDateCompletion("");
  };

  useEffect(() => {
    if (props.todo.length === 0) {
      setDescription("");
      setDone(false);
      setDateCompletion("");
    } else {
      setDescription(props.todo.description);
      setDateCompletion(props.todo.dateCompletion);
      setDone(props.todo.done);
    }
  }, [
    props.todo.dateCompletion,
    props.todo.description,
    props.todo.done,
    props.todo.length,
  ]);

  return (
    <div className="container row g-3 align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="form-label">Description</label>
          <input
            className="form-control"
            type="text"
            value={description}
            placeholder="Enter the Description"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div className="">
          <label className="form-check-label">Is it Done?</label>
          <input
            className="form-check-input"
            type="checkbox"
            value={done}
            checked={done}
            onChange={(e) => {
              setDone(!done);
            }}
          ></input>
        </div>
        <div className="">
          <label className="form-label">Date to be completed</label>
          <input
            className="form-control"
            type="date"
            value={dateCompletion}
            onChange={(e) => setDateCompletion(e.target.value)}
          ></input>
        </div>
        <div>
          <button className="btn btn-success">Submit</button>
        </div>
      </form>
      <button className="btn btn-warning" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

export default TodoCreate;
