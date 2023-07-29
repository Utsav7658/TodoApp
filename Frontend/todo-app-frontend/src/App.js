import "./App.css";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import TodoHome from "./Components/TodoComponents/TodoHome";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <TodoHome />
    </div>
  );
}

export default App;
