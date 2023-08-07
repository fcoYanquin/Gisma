import React, { useState, useEffect } from "react";
import FormTask from "./FormTask";
import "../css/List.css";
import Task from "./Task";

/**
 * Listado de componentes de tareas
 */
function List() {

    const [tasks, setTask] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;
    const port = process.env.REACT_APP_API_PORT;

    useEffect(() => {
        fetch(apiUrl + ":" + port + "/actividades")
        .then(response => response.json())
        .then((data) => {    
            setTask(data.data);   
        });
     }, []);
     

    /**
     * Agrega una nueva tarea
     */
    const addTask = task => {
        if (task.titulo.trim()) {
            task.titulo = task.titulo.trim();

            fetch(apiUrl + ":" + port + "/actividades", {
                method: "POST",
                body: JSON.stringify({
                    titulo: task.titulo
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then((data) => {
                if (data.success) {
                    const updatedTasks = [data.data, ...tasks];
                    setTask(updatedTasks);   
                } 
            });
        }
    }

    /**
     * Elimina una tarea de la lista
     */
    const removeTask = id => {

        fetch(apiUrl + ":" + port + "/actividades/" + id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then((data) => {
            if (data.success) {
                const updatedTasks = tasks.filter(task => task.id !== id);
                setTask(updatedTasks);
            }
        });
    }

    /**
     * Actualiza una tarea a estado completada
     */
    const updateTask = (id, titulo) => {

        fetch(apiUrl + ":" + port + "/actividades/" + id, {
            method: "PUT",
            body: JSON.stringify({
                titulo: titulo,
                estado: "Completada"
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then((data) => {
            if (data.success) {
                const updatedTasks = tasks.map(task => {
                    if (task.id === id) {
                        task.estado = "Completada";
                    }
                    return task;
                });
                setTask(updatedTasks);
            }
        });
    }

    return (
        <div>
            <FormTask onSubmit={addTask} />
            <div className="tasks-list-container">
                {
                    /** Listado de todas las tareas */
                    tasks.map((task) =>
                        <Task 
                            key={task.id}
                            id={task.id}
                            titulo={task.titulo} 
                            completada={task.estado}
                            updateTask={updateTask}
                            removeTask={removeTask} />
                    )
                    
                }
            </div>

        </div>
    );
}

export default List;