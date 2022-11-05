import { Router } from "express";

import listDetailMortalidadeLoteController from "../controllers/mortalidades/listDetailMortalidadeLote.controller";
import listMortalidadesController from "../controllers/mortalidades/listMortalidades.controller";

const router = Router()

router.get('', listMortalidadesController)
router.get('/:id', listDetailMortalidadeLoteController)

export default router;