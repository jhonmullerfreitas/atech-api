import { Router } from "express";

import listMortalidadesController from "../controllers/mortalidades/listMortalidades.controller";

const router = Router()

router.get('', listMortalidadesController)

export default router;