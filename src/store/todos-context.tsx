import React,{useState} from "react";

import Todo from "../models/todo";

type contextType = {
  items: Todo[];
  addTodo: (id:string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<contextType>({
  items: [],
  addTodo: (id:string) => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  
  const contextValue:contextType = {
    items:todos,
    addTodo:addTodoHandler,
    deleteTodo:deleteTodoHandler
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;