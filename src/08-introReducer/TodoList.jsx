import { TodoItem } from "./TodoItem";
import { FaListUl } from 'react-icons/fa';

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.length === 0 ? (
        <p className="text-center"><FaListUl />  There are no pending tasks.</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))
      )}
    </ul>
  );
}
