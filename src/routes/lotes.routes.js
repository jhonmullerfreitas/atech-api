import { Router } from "express";

import listLotesController from "../controllers/lotes/listLotes.controller";

const router = Router()

router.get('', listLotesController)

export default router;