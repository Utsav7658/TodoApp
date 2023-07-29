import React from "react";
import TodoComponent from "./TodoComponent";

function TodoList(props) {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ cursor: "pointer" }} onClick={props.sortByDescription}>
              Description
            </th>
            <th style={{ cursor: "pointer" }} onClick={props.sortByDate}>
              Date to Complete
            </th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo) => (
            <TodoComponent
              updateTodo={props.updateTodo}
              deleteTodo={props.deleteTodo}
              key={todo.id}
              todo={todo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
