const db = require('./db');

async function getActivities() {
    const rows = await db.query(
        "SELECT id, titulo, estado FROM actividad"
    );
    
    return {
        "success": true,
        "data": rows
    }
}

/**
 * Creacion de tareas 
 * @param {*} activitie 
 * @returns 
 */
async function createActivitie(activitie){
    const result = await db.query(
        `INSERT INTO actividad (titulo, estado) VALUES ("${activitie.titulo}", "Pendiente")`
    );

    let message = 'Error al crear actividad';

    if (result.affectedRows) {
        message = 'Actividad creada correctamente';

        return {
            "success": true,
            "data": {
                "id": result.insertId,
                "titulo": activitie.titulo,
                "estado": "Pendiente"
            },
            "message": message
        }
    } else {
        return {
            "success": false,
            "message": message
        }
    }
}

/**
 * Actualizacion del estado de una tarea
 * @param {*} id 
 * @param {*} activitie 
 * @returns 
 */
async function updateActivitie(id, activitie){

    console.log(activitie);

    const result = await db.query(
        `UPDATE actividad SET titulo="${activitie.titulo}", estado="${activitie.estado}" WHERE id=${id}` 
    );

    let message = 'Error al actualizar actividad';

    if (result.affectedRows) {
        message = 'Actividad actualizada correctamente';
        return {
            "success": true,
            "data": {
                "id": id,
                "estado": "Completada"
            },
            "message": message
        }
    } else {
        return {
            "success": false,
            "message": message
        }
    }
}

/**
 * Eliminacion de tareas usando id
 * @param {*} id 
 * @returns 
 */
async function deleteActivitie(id){
    const result = await db.query(
        `DELETE FROM actividad WHERE id=${id}`
    );

    let message = 'Error al eliminar actividad';

    if (result.affectedRows) {
        message = 'Actividad eliminada correctamente';
        return {
            "success": true,
            "data": {
                "id": id,
                "estado": "Completada"
            },
            "message": message
        }        
    } else {
        return {
            "success": false,
            "message": message
        }
    }
}

module.exports = {
    getActivities,
    createActivitie,
    updateActivitie,
    deleteActivitie
}