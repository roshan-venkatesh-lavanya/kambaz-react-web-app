import { deleteTodo, setTodo } from "./todosReducer";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{todo.title}</span>
      <div className="d-flex gap-2">
        <Button variant="primary" onClick={() => dispatch(setTodo(todo))}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete
        </Button>
      </div>
    </li>
  );
}
