import { FaTrash, FaCheck } from 'react-icons/fa';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through text-success' : ''}`}
        style={{ cursor: 'pointer' }}
        onClick={() => onToggleTodo(todo.id)}
      >
        <FaCheck style={{ marginRight: '10px' }} /> {todo.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todo.id)}
      >
        <FaTrash />
      </button>
    </li>
  )
}
