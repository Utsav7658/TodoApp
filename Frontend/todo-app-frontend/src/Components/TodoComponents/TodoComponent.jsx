import React from "react";

function TodoComponent(props) {
  return (
    <tr>
      <td style={props.todo.done ? { textDecoration: "line-through" } : {}}>
        {props.todo.description}
      </td>
      <td>{props.todo.dateCompletion}</td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => {
            props.updateTodo(props.todo.id);
          }}
        >
          Update
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            props.deleteTodo(props.todo.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoComponent;
