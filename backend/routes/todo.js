const express = require('express');
const router = express.Router();
const actions = require('../services/actions');

/**
 * Lista de actividades
 */
router.get('/', async function(req, res, next) {
    try {
        res.json(await actions.getActivities());
    } catch (err) {
        console.error(`Error al obtener actividades `, err.message);
        next(err);
    }
});

/**
 * Creacion de actividad
 */
router.post('/', async function(req, res, next) {
    try {
        console.log("Desde route");
        console.log(req);
        res.json(await actions.createActivitie(req.body));
    } catch (err) {
        console.error(`Error al crear actividad `, err.message);
        next(err);
    }
});

/**
 * Actualizacion de actividad
 */
router.put('/:id', async function(req, res, next) {
    try {
        res.json(await actions.updateActivitie(req.params.id, req.body));
    } catch (err) {
        console.error(`Error al actualizar actividad`, err.message);
        next(err);
    }
});

/**
 * Eliminacion de actividad
 */
router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await actions.deleteActivitie(req.params.id));
    } catch (err) {
        console.error(`Error al eliminar actividad`, err.message);
        next(err);
    }
});

module.exports = router;