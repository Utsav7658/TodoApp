import axios from "axios";

export const getAllTodos = async () => {
  return await axios
    .get("http://localhost:8080/todos")
    .then((res) => res.data)
    .catch((err) => {
      console.log("An Error occured. Error is: " + err);
    })
    .finally(() => {
      console.log("Request Completed Successfully! Cleaning Promise Handling");
    });
};

export const getTodoById = async (id) => {
  return await axios
    .get(`http://localhost:8080/todos/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log("An Error occured. Error is: " + err);
    })
    .finally(() => {
      console.log("Request Completed Successfully! Cleaning Promise Handling");
    });
};

export const updateTodoById = async (id, todo) => {
  return await axios
    .put(`http://localhost:8080/todos/${id}`, todo)
    .then((res) => res.data)
    .catch((err) => {
      console.log("An Error occured. Error is: " + err);
    })
    .finally(() => {
      console.log("Request Completed Successfully! Cleaning Promise Handling");
    });
};

export const createTodo = async (todo) => {
  await axios
    .post(`http://localhost:8080/todos`, todo)
    .then((res) => res.data)
    .catch((err) => {
      console.log("An Error occured. Error is: " + err);
    })
    .finally(() => {
      console.log("Request Completed Successfully! Cleaning Promise Handling");
    });
};

export const deleteTodoById = async (id) => {
  await axios
    .delete(`http://localhost:8080/todos/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log("An Error occured. Error is: " + err);
    })
    .finally(() => {
      console.log("Request Completed Successfully! Cleaning Promise Handling");
    });
};
