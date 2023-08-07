import React, { useState } from "react";
import "../css/FormTask.css";

/**
 * Envio de tareas usando el boton de agregar
 */
function FormTask(props) {

    const [input, setInput] = useState('');

    const changeInput = e => {
        setInput(e.target.value);
    };

    const sendTask = e => {
        e.preventDefault();

        const newTask = {
            titulo: input,
            completada: "Pendiente"
        }

        props.onSubmit(newTask);
    };

    return (
        <form 
            className="task-form" 
            onSubmit={sendTask}>
            <input 
                className="task-input"
                type="text"
                placeholder="Escriba una Tarea"
                name="texto" 
                onChange={changeInput}/>
            <button className="task-button">
                Agregar Tarea
            </button>
        </form>
    );
}

export default FormTask;