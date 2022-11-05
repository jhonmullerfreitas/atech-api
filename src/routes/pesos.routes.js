import { Router } from "express";

import listPesosController from "../controllers/pesos/listPesos.controller";
import listPesosLoteController from "../controllers/pesos/listPesosLote.controller";

const router = Router();

router.get('', listPesosController);
router.get('/:id', listPesosLoteController)

export default router;