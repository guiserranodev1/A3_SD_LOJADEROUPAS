import express from 'express';
import RoupasController from '../controllers/roupasController.js';

const router = express.Router();
const roupasController = new RoupasController();

router.post('/roupas', roupasController.createRoupa.bind(roupasController));
router.get('/roupas', roupasController.getAllRoupas.bind(roupasController));
router.get('/roupas/:id', roupasController.getRoupaById.bind(roupasController));
router.put('/roupas/:id', roupasController.updateRoupa.bind(roupasController));
router.delete('/roupas/:id', roupasController.deleteRoupa.bind(roupasController));

export default router;