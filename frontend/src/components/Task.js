import React from "react";
import "../css/Task.css";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";

/**
 * Componentes de tarea
 */
function Task({ id, titulo, completada, updateTask, removeTask }) {
    return (
        <div className={completada == "Completada" ? "task-container complete" : "task-container"}>
            <div 
                className="task-text" >
                { titulo + (completada == "Completada" ? " (Completada)" : " (Pendiente)") }
            </div>
            <div 
                className="task-container-icon"
                onClick={() => updateTask(id, titulo)}>
                <AiFillCheckSquare className="task-icon-complete" />
            </div>
            <div 
                className="task-container-icon"
                onClick={() => removeTask(id)}>
                <AiFillDelete className="task-icon-delete" />
            </div>
        </div>
    );
}

export default Task;