import React, { useRef,useState } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const [inputText,setInputText] = useState<string>(''); 
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandle = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    
    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText); 
    setInputText('');
  };

  const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputText(e.target.value);
  }

  return (
    <form className={classes.form} onSubmit={submitHandle}>
      <input type="text" id="text" value ={inputText} onChange = {inputChangeHandler} ref={todoInputRef}></input>
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
