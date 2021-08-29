import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{text: string; id: string; onDeleteTodo: (id: string) => void;}> = (props) => {
  
  const deleteTodoHandler = () => {
    props.onDeleteTodo(props.id);
  };
  
  return (
    <li className={classes.item} onClick={deleteTodoHandler}>
      {props.text}
    </li>
  );
};

export default TodoItem;
