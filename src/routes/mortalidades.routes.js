import { Router } from "express";

import listMortalidadesController from "../controllers/listMortalidades.controller";


const router = Router()


router.get('', listMortalidadesController)

export default router;