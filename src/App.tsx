import React,{useContext} from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from './store/todos-context';

function App() {
  
  return (
    <div className="App">
      <TodosContextProvider>
        <NewTodo  />
        <Todos  />
      </TodosContextProvider>
    </div>
  );
}

export default App;
