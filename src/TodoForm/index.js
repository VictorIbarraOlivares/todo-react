import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';


function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue !== '') {
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Tarea a realizar" 
            />
            <div className="TodoForm-buttonContainer TodoForm-button-cancel">
                <button
                    className="TodoForm-button"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm }