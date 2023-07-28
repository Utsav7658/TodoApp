import React, { useState } from "react";
import { createTodo, updateTodoById } from "../API/API";

function TodoCreate(props) {
  const [description, setDescription] = useState(props.todo.description);
  const [done, setDone] = useState(props.todo.done);
  const [dateCompletion, setDateCompletion] = useState(
    props.todo.dateCompletion
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      description: description,
      done: done,
      dateCompletion: dateCompletion,
    };
    if (props.todo === null) {
      createTodo(todo);
    } else {
      updateTodoById(props.todo.id, todo);
    }
    console.log("Todo Created Successfully!");
    setDescription("");
    setDone(false);
    setDateCompletion("");
  };

  const handleClear = () => {
    setDescription("");
    setDone(false);
    setDateCompletion("");
  };

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
            onChange={(e) => setDone(e.target.value)}
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
          <button className="btn btn-warning" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoCreate;
