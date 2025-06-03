import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { ListGroup, Card } from "react-bootstrap";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div id="wd-todo-list-redux" className="p-3">
      <h2>Todo List</h2>
      <Card>
        <ListGroup variant="flush">
          <TodoForm />
          {todos.map((todo: any) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}
