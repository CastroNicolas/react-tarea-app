import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { FaTasks, FaClipboardList } from 'react-icons/fa';

export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

    return (
        <div className="container todo-app">
            <h1 className="text-primary text-center mb-4"><FaTasks /> Task/s: {todosCount}, <small>Pending: {pendingTodosCount}</small> </h1>

            <div className="row">
                <div className="col-lg-5 col-md-12 order-md-1 mb-4">
                    <h4 className="text-center"><FaClipboardList /> Add Task</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>

                <div className="col-lg-7 col-md-12 order-md-2">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
            </div>
        </div>
    );
}
