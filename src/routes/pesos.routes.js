import { Router } from "express";

import listPesosController from "../controllers/pesos/listPesos.controller";

const router = Router();

router.get('', listPesosController);

export default router;