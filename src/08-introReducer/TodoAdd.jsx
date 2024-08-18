import { useForm } from '../hooks/useForm';
import { FaPlus } from 'react-icons/fa';

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        };

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit} className="todo-add-form p-3">
            <div className="input-group mb-3">
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control todo-input"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    autoComplete="off"
                />
                <button
                    type='submit'
                    className="btn btn-primary todo-button d-flex align-items-center justify-content-center"
                >
                    <FaPlus style={{ marginRight: '5px' }} /> Add
                </button>
            </div>
        </form>
    );
}
