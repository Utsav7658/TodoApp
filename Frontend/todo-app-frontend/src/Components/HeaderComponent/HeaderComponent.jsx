import React from "react";

function HeaderComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="/">
          Todo App
        </a>
        <a
          className="btn btn-outline-success my-2 my-sm-0"
          href="https://github.com/Utsav7658/TodoApp/"
        >
          Github
        </a>
      </nav>
    </div>
  );
}

export default HeaderComponent;
