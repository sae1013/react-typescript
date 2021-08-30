import React, { useRef, useState, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  const [inputText, setInputText] = useState<string>("");
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandle = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
    setInputText("");
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandle}>
      <input
        type="text"
        id="text"
        value={inputText}
        onChange={inputChangeHandler}
        ref={todoInputRef}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
